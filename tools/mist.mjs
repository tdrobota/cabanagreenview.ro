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

/* CLI: node mist.mjs <source.jpg> <out-stem>
   Writes <out-stem>.webp (2000w), <out-stem>-1000.webp, <out-stem>.jpg (fallback).
   node mist.mjs <source> <out.webp> season   -> single graded webp at source size (season photos).
   The hero uses the original 2048px p37 from the first commit:
     git show da8ac85:images/p37.jpg > p37orig.jpg && node mist.mjs p37orig.jpg ../images/hero/cabin-mist */
const PRESETS = {
  hero:   {},
  // lighter grade for supporting photos: cooler and quieter, but recognisably the same season
  season: { haze: 0.28, warmKeep: 0.85, exposure: 0.8, midHaze: 0.1, warmLift: 1.05, coolMix: 0.45 },
};
if (process.argv[2] && process.argv[3]) {
  const img = await mist(process.argv[2], PRESETS[process.argv[4] || 'hero']);
  const buf = await img.png().toBuffer();
  const stem = process.argv[3];
  if (process.argv[4] === 'season') { await sharp(buf).webp({ quality: 80 }).toFile(stem); process.exit(0); }
  await sharp(buf).resize(2000).webp({ quality: 78 }).toFile(`${stem}.webp`);
  await sharp(buf).resize(1000).webp({ quality: 76 }).toFile(`${stem}-1000.webp`);
  await sharp(buf).resize(1600).jpeg({ quality: 80, mozjpeg: true }).toFile(`${stem}.jpg`);
}
