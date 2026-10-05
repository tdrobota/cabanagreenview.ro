// Foreground cutout for the hero: the cabin (and everything in front of it) from the graded
// photo, transparent above the roofline, so the big wordmark can sit between sky and house.
//
//   cd tools && node hero-cutout.mjs            (after mist.mjs has written images/hero/p37*)
//
// The outline is traced by hand on the 2048 x 1536 source and scaled to each output size, so the
// cutout lines up pixel for pixel with p37.webp / p37-1000.webp under the same object-fit.
import sharp from 'sharp';

const SRC_W = 2048;
// fence on the left -> wing roof verge and ridge -> A-frame outer trim, apex, right trim down to
// the eave -> deck fence -> the neighbouring roof at the right edge. Trees and hills stay behind.
const OUTLINE = [[0, 1060], [352, 1062], [490, 724], [1055, 724], [1178, 540], [1683, 1220], [1975, 1180], [1975, 990], [2000, 990], [2048, 925], [2048, 1536], [0, 1536]];

async function cutout(src, out) {
  const { width: W, height: H } = await sharp(src).metadata();
  const k = W / SRC_W;
  const pts = OUTLINE.map(([x, y]) => `${(x * k).toFixed(1)},${(y * k).toFixed(1)}`).join(' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><polygon points="${pts}" fill="#fff"/></svg>`;
  // a hair of softness so the edge reads like the photo's own focus, not a scissor cut
  const mask = await sharp(Buffer.from(svg)).blur(Math.max(0.3, 0.8 * k)).extractChannel(0).raw().toBuffer();
  const rgb = await sharp(src).removeAlpha().raw().toBuffer();
  const rgba = Buffer.alloc(W * H * 4);
  for (let i = 0; i < W * H; i++) {
    rgba[i * 4] = rgb[i * 3]; rgba[i * 4 + 1] = rgb[i * 3 + 1]; rgba[i * 4 + 2] = rgb[i * 3 + 2]; rgba[i * 4 + 3] = mask[i];
  }
  await sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).webp({ quality: 82, alphaQuality: 90, effort: 6 }).toFile(out);
  console.log(out, W + 'x' + H);
}

await cutout('../images/hero/p37.webp', '../images/hero/p37-fg.webp');
await cutout('../images/hero/p37-1000.webp', '../images/hero/p37-fg-1000.webp');
