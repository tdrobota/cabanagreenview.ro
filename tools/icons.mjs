/**
 * Regenerate every icon from favicon.svg.
 *
 *   cd tools && npm run icons
 *
 * Writes favicon-16/32.png, apple-touch-icon.png, icon-192/512.png,
 * icon-maskable.png (padded for OS masking) and favicon.ico.
 */
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = await readFile(join(ROOT, 'favicon.svg'));

const sizes = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'apple-touch-icon.png': 180,
  'icon-192.png': 192,
  'icon-512.png': 512,
};
for (const [name, s] of Object.entries(sizes)) {
  await sharp(svg, { density: 400 }).resize(s, s).png().toFile(join(ROOT, name));
  console.log('  ' + name + '  ' + s + 'px');
}

// Maskable: full-bleed dusk-slate square, glyph at ~62% in the safe zone.
const glyph = (await readFile(join(ROOT, 'favicon.svg'), 'utf8'))
  .replace(/<rect[^>]*\/>/, ''); // drop the rounded background
const g = await sharp(Buffer.from(glyph), { density: 400 })
  .resize(320, 320, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png().toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 13, g: 26, b: 30, alpha: 1 } } })
  .composite([{ input: g, gravity: 'center' }]).png().toFile(join(ROOT, 'icon-maskable.png'));
console.log('  icon-maskable.png  512px (padded)');

// favicon.ico: a 32px PNG wrapped in a minimal ICO container.
const png = await sharp(svg, { density: 400 }).resize(32, 32).png().toBuffer();
const hdr = Buffer.alloc(22);
hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
hdr[6] = 32; hdr[7] = 32;
hdr.writeUInt16LE(1, 10); hdr.writeUInt16LE(32, 12);
hdr.writeUInt32LE(png.length, 14); hdr.writeUInt32LE(22, 18);
await writeFile(join(ROOT, 'favicon.ico'), Buffer.concat([hdr, png]));
console.log('  favicon.ico  ' + (22 + png.length) + 'B');
