import { chromium } from 'playwright';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = process.argv[2];
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const CSS_URL = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap';

const b = await chromium.launch();
const p = await b.newPage();
const css = await (await p.request.get(CSS_URL, { headers: { 'user-agent': UA } })).text();

await mkdir(join(OUT, 'fonts'), { recursive: true });
const faces = css.match(/@font-face\s*\{[^}]*\}/g) || [];
let out = '/* Self-hosted Playfair Display + Inter (latin + latin-ext only). Regenerate: node tools/fonts.mjs */\n';
let count = 0;

for (const face of faces) {
  const range = (face.match(/unicode-range:\s*([^;]+);/) || [])[1] || '';
  const isLatin = /U\+0000-00FF/.test(range);
  const isLatinExt = /U\+0100-02BA/.test(range) && !/U\+0460|U\+0370|U\+0102-0103|U\+1EA0/.test(range) === false ? /U\+0100-02BA/.test(range) : false;
  const keep = isLatin || /^\/\* latin-ext \*\//.test('') || (/U\+0100-02BA/.test(range) && /U\+2C60-2C7F/.test(range) && !/U\+0460/.test(range));
  if (!keep) continue;

  const fam = (face.match(/font-family:\s*'([^']+)'/) || [])[1];
  const weight = (face.match(/font-weight:\s*(\d+)/) || [])[1];
  const italic = /font-style:\s*italic/.test(face);
  const url = (face.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
  if (!url) continue;

  const sub = isLatin ? 'lat' : 'ext';
  const slug = `${fam.toLowerCase().replace(/\s+/g, '')}-${weight}${italic ? 'i' : ''}-${sub}.woff2`;
  const bytes = Buffer.from(await (await p.request.get(url)).body());
  await writeFile(join(OUT, 'fonts', slug), bytes);
  out += face.replace(/url\(https:[^)]+\.woff2\)/, `url(/fonts/${slug})`).replace(/\s+/g, ' ').trim() + '\n';
  count++;
}
await writeFile(join(OUT, 'fonts.css'), out);
console.log(`${count} faces / woff2 written`);
await b.close();
