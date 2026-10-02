/** Self-host Host Grotesk (latin + latin-ext only).  node fonts.mjs ..  (writes <out>/fonts/*.woff2 + <out>/fonts.css) */
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const OUT = process.argv[2] || '..';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const CSS_URL = 'https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@300;400;500&display=swap';

const css = await (await fetch(CSS_URL, { headers: { 'user-agent': UA } })).text();
await mkdir(join(OUT, 'fonts'), { recursive: true });

// Google labels each block with a subset comment: /* latin */, /* latin-ext */, ...
const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g)];
let out = '/* Self-hosted Host Grotesk (latin + latin-ext only). Regenerate: cd tools && node fonts.mjs .. */\n';
let count = 0;

// Host Grotesk is a variable font: every weight in a subset points at the same
// file, so keep one face per subset and declare the weight range.
const seen = new Set();
for (const [, subset, face] of blocks) {
  if (subset !== 'latin' && subset !== 'latin-ext') continue;
  const url = (face.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
  if (!url || seen.has(subset)) continue;
  seen.add(subset);
  const slug = `hostgrotesk-${subset === 'latin' ? 'lat' : 'ext'}.woff2`;
  await writeFile(join(OUT, 'fonts', slug), Buffer.from(await (await fetch(url)).arrayBuffer()));
  out += face.replace(/url\(https:[^)]+\.woff2\)/, `url(/fonts/${slug})`)
    .replace(/font-weight:\s*\d+;/, 'font-weight: 300 500;')
    .replace(/\s+/g, ' ').trim() + '\n';
  count++;
}
await writeFile(join(OUT, 'fonts.css'), out);
console.log(`${count} faces / woff2 written`);
