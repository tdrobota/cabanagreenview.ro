// Split-tone "mist" grade: warm wood keeps its amber, everything else goes cool slate-teal, with
// height-weighted haze. Pixel-level so the wood/sky separation is by hue, not a geometric mask.
import sharp from 'sharp';
export async function mist(src, { haze = 0.5, warmKeep = 0.92, exposure = 0.6, midHaze = 0.22, warmLift = 1.28, coolMix = 0.7 } = {}) {
  const { data, info } = await sharp(src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const out = Buffer.alloc(W * H * 3);
  const fog = [124, 158, 168], deep = [16, 34, 40];
  for (let y = 0; y < H; y++) {
    const t = y / H;
    // fog strongest at the top third, thin at mid, ground darkens
    const fogA = haze * Math.max(0, 1 - t / 0.62) ** 1.4;
    const groundA = 0.42 * Math.max(0, (t - 0.7) / 0.3) ** 1.5;
    // a band of mist across the treeline / mid-ground
    const midA = midHaze * Math.max(0, 1 - Math.abs(t - 0.46) / 0.16);
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 3;
      let r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
      const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
      let h = 0;
      if (d > 1e-6) {
        if (mx === r) h = ((g - b) / d) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4;
        h *= 60; if (h < 0) h += 360;
      }
      const sat = d / (1 - Math.abs(2 * l - 1) + 1e-6);
      // warmth weight: oranges/yellow-oranges (wood, lamplight)
      const warm = Math.max(0, 1 - Math.abs(h - 34) / 22) * Math.min(1, sat * 2.2);
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      // cool path: luminance mapped onto a slate-teal ramp
      const cr = (lum * 0.82 + 0.015) * coolMix + (r * 0.5 + lum * 0.5) * (1 - coolMix), cg = (lum * 0.97 + 0.03) * coolMix + (g * 0.5 + lum * 0.5) * (1 - coolMix), cb = (lum * 1.02 + 0.05) * coolMix + (b * 0.5 + lum * 0.5) * (1 - coolMix);
      // warm path: original, a touch richer
      // warm path: the wood keeps its colour and is lifted against the darker field
      const wr = r * warmLift, wg = g * warmLift * 0.86, wb = b * warmLift * 0.62;
      const k = warm * warmKeep;
      r = (cr * (1 - k) + wr * k) * exposure;
      g = (cg * (1 - k) + wg * k) * exposure;
      b = (cb * (1 - k) + wb * k) * exposure;
      // haze + ground shade; vignette at edges
      const vx = (x / W - 0.5) * 2, vign = 0.28 * Math.max(0, Math.abs(vx) - 0.55) / 0.45;
      const fa = Math.min(1, fogA + midA) * (1 - k * 0.6);
      r = r * (1 - fa) + fog[0] / 255 * fa; g = g * (1 - fa) + fog[1] / 255 * fa; b = b * (1 - fa) + fog[2] / 255 * fa;
      const da = Math.min(1, groundA + vign);
      r = r * (1 - da) + deep[0] / 255 * da; g = g * (1 - da) + deep[1] / 255 * da; b = b * (1 - da) + deep[2] / 255 * da;
      out[i] = Math.min(255, r * 255); out[i + 1] = Math.min(255, g * 255); out[i + 2] = Math.min(255, b * 255);
    }
  }
  return sharp(out, { raw: { width: W, height: H, channels: 3 } });
}

/* Warm interior light behind the glass gable (owner request, 2026-10-02): evening lamps
   inside the cabin. Per photo, in its own source frame: the glazing shapes, where the lamps
   pool (centre + radii) and the glazing's top and height (the apex glows less). Only the dark
   glass inside the shapes is lit, so the wood mullions stay as they are; a soft bloom spills
   onto the frames and the ground. */
const GLASS = {
  p37: { w: 2048, h: 1536, top: 618, span: 460, pool: [1180, 1010, 420, 330],
    shapes: '<polygon points="1178,618 888,1076 1498,1076"/><rect x="858" y="1098" width="680" height="106"/>' +
            '<rect x="1106" y="1098" width="162" height="185"/>' },
  p24: { w: 2048, h: 1365, top: 200, span: 620, pool: [1080, 760, 380, 300],
    shapes: '<polygon points="1055,200 812,738 1435,738"/><rect x="812" y="748" width="652" height="158"/>' +
            '<rect x="985" y="800" width="150" height="222"/>' },
  p20: { w: 2048, h: 2048, top: 340, span: 760, pool: [1120, 1000, 420, 360],
    shapes: '<polygon points="1122,338 636,1034 1608,1034"/><rect x="636" y="1062" width="1032" height="168"/>' +
            '<rect x="1003" y="1116" width="250" height="280"/>' },
  p14: { w: 1600, h: 1066, top: 120, span: 560, pool: [990, 560, 280, 240],
    shapes: '<polygon points="1024,120 740,705 1225,705"/><rect x="944" y="600" width="112" height="144"/>' },
};

export async function lamps(img, glass = GLASS.p37, { strength = 0.92, color = [255, 152, 62], spill = 0.12 } = {}) {
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const s = W / glass.w;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${glass.w} ${glass.h}" preserveAspectRatio="none">` +
              `<rect width="100%" height="100%" fill="#000"/><g fill="#fff">${glass.shapes}</g></svg>`;
  const mask = await sharp(Buffer.from(svg)).resize(W, H).greyscale().blur(3).raw().toBuffer();

  // Light map: how much of each pixel is lit glass (dark, cool) rather than warm wood.
  const light = Buffer.alloc(W * H);
  const top = glass.top * s, span = glass.span * s;
  const [pcx, pcy, prx, pry] = glass.pool.map(v => v * s);
  for (let p = 0, i = 0; p < W * H; p++, i += 3) {
    if (!mask[p]) continue;
    const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const wood = Math.min(1, Math.max(0, (r - b - 0.08) / 0.12));
    const glassness = Math.min(1, Math.max(0, (0.5 - lum) / 0.35)) * (1 - wood);
    // lamps hang low and central: the glow pools around the living room and falls off
    // toward the attic apex and the outer panes
    const y = Math.floor(p / W), x = p - y * W;
    const depth = 0.45 + 0.55 * Math.min(1, Math.max(0, (y - top) / span));
    const dx = (x - pcx) / prx, dy = (y - pcy) / pry;
    const pool = Math.max(0.35, 1 - 0.65 * Math.min(1, Math.sqrt(dx * dx + dy * dy)));
    light[p] = Math.round(255 * (mask[p] / 255) * glassness * depth * pool);
  }
  const raw1 = { raw: { width: W, height: H, channels: 1 } };
  const bloom = await sharp(light, raw1).blur(Math.max(1, 26 * s)).raw().toBuffer();
  const halo  = await sharp(light, raw1).blur(Math.max(1, 95 * s)).raw().toBuffer();

  const out = Buffer.alloc(W * H * 3);
  const c = color.map(v => v / 255);
  for (let p = 0, i = 0; p < W * H; p++, i += 3) {
    const r = data[i] / 255, g = data[i + 1] / 255, b = data[i + 2] / 255;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // detail-preserving: brighter interior surfaces catch more of the light
    const a = Math.min(1, strength * (light[p] / 255) * Math.min(1.3, 0.18 + 3.4 * lum)
                         + spill * (bloom[p] / 255) + spill * 0.9 * (halo[p] / 255));
    // screen blend toward lamplight
    out[i]     = 255 * (1 - (1 - r) * (1 - c[0] * a));
    out[i + 1] = 255 * (1 - (1 - g) * (1 - c[1] * a));
    out[i + 2] = 255 * (1 - (1 - b) * (1 - c[2] * a));
  }
  return sharp(out, { raw: { width: W, height: H, channels: 3 } });
}

/* The misty surround outside the hero frame: the same photo, small, blurred and lifted
   toward the fog colour. Tiny file; the browser scales it up, which only adds softness. */
async function haze(buf, out) {
  const small = await sharp(buf).resize(480).blur(9).modulate({ saturation: 0.55, brightness: 1.12 }).toBuffer();
  const m = await sharp(small).metadata();
  const fog = Buffer.from(`<svg width="${m.width}" height="${m.height}"><rect width="100%" height="100%" fill="#8fa9b0" fill-opacity="0.38"/></svg>`);
  await sharp(small).composite([{ input: fog }]).webp({ quality: 70 }).toFile(out);
}

/* CLI
   node mist.mjs <source> <out-stem> [photo-id]
     hero grade (+ lamps when GLASS has the photo id) ->
     <out-stem>.webp (2000w), <out-stem>-1000.webp, <out-stem>.jpg, <out-stem>-haze.webp
   node mist.mjs <source> <out.webp> season   -> lighter grade, single webp (season photos)
   Hero sources are the 2048px originals from the first commit, e.g.
     git show da8ac85:images/p37.jpg > p37orig.jpg && node mist.mjs p37orig.jpg ../images/hero/p37 p37 */
const PRESETS = {
  hero:   {},
  // lighter grade for supporting photos: cooler and quieter, but recognisably the same season
  season: { haze: 0.28, warmKeep: 0.85, exposure: 0.8, midHaze: 0.1, warmLift: 1.05, coolMix: 0.45 },
};
if (process.argv[2] && process.argv[3]) {
  const [src, stem, mode] = process.argv.slice(2);
  let img = await mist(src, PRESETS[mode === 'season' ? 'season' : 'hero']);
  if (mode && GLASS[mode]) img = await lamps(img, GLASS[mode]);
  const buf = await img.png().toBuffer();
  if (mode === 'season') { await sharp(buf).webp({ quality: 80 }).toFile(stem); process.exit(0); }
  const w = (await sharp(buf).metadata()).width;
  await sharp(buf).resize(Math.min(2000, w)).webp({ quality: 78 }).toFile(`${stem}.webp`);
  await sharp(buf).resize(1000).webp({ quality: 76 }).toFile(`${stem}-1000.webp`);
  await sharp(buf).resize(Math.min(1600, w)).jpeg({ quality: 80, mozjpeg: true }).toFile(`${stem}.jpg`);
  await haze(buf, `${stem}-haze.webp`);
}
