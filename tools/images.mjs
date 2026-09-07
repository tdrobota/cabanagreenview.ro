/**
 * Image pipeline for cabanagreenview.ro
 *
 *   npm run images
 *
 * For every source JPEG in images/ it writes, next to it:
 *   - <name>.jpg      re-encoded, resized to a sane max width (mozjpeg, fallback)
 *   - <name>.webp     same width, smaller (primary source)
 *   - <name>-640.webp small variant for srcset / mobile
 * Plus images/og.jpg — a dedicated 1200x630 social card cropped from the hero.
 *
 * Needs `sharp` (npm i). Re-runnable, but it re-encodes the .jpg in place, so
 * keep the originals in git if you want a clean source to go back to.
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'images');

const DEFAULT_W = 1100;                 // gallery cards render <= 640px (<=1280 retina)
const WIDTHS = { 'p24.jpg': 1600, 'p55.jpg': 1200 }; // hero background, portrait about image
const SMALL_W = 640;
const OG = { src: 'p24.jpg', out: 'og.jpg', w: 1200, h: 630 };

const isSource = f => /\.jpe?g$/i.test(f) && !/(^og\.|-\d+\.jpe?g$)/i.test(f);

async function run() {
  const files = (await readdir(DIR)).filter(isSource);
  let before = 0, jpgAfter = 0, webpAfter = 0;

  for (const f of files) {
    const p = join(DIR, f);
    before += (await stat(p)).size;
    const src = await sharp(p).rotate().toBuffer();
    const meta = await sharp(src).metadata();
    const w = Math.min(WIDTHS[f] || DEFAULT_W, meta.width);
    const stem = basename(f, extname(f));

    const isHero = f === 'p24.jpg';
    const jpg = await sharp(src).resize({ width: w }).jpeg({ quality: isHero ? 72 : 76, mozjpeg: true }).toBuffer();
    await sharp(jpg).toFile(p);
    jpgAfter += jpg.length;

    const webp = await sharp(src).resize({ width: w }).webp({ quality: isHero ? 58 : 64 }).toBuffer();
    await sharp(webp).toFile(join(DIR, stem + '.webp'));
    webpAfter += webp.length;

    if (meta.width > SMALL_W) {
      await sharp(src).resize({ width: SMALL_W }).webp({ quality: 62 }).toFile(join(DIR, stem + '-640.webp'));
    }
    process.stdout.write('.');
  }

  await sharp(join(DIR, OG.src))
    .resize({ width: OG.w, height: OG.h, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(join(DIR, OG.out));

  const mb = n => (n / 1e6).toFixed(1) + ' MB';
  console.log(`\n${files.length} images: source ${mb(before)} -> jpg ${mb(jpgAfter)} + webp ${mb(webpAfter)} (+ 640px webp + og.jpg)`);
}
run();
