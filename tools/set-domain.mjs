/**
 * Move the site's identity to a new origin in one go.
 *
 *   cd tools && node set-domain.mjs https://cabanagreenview.ro
 *
 * The origin appears in: canonical, Open Graph / Twitter images and URLs, every JSON-LD
 * @id / url / image / logo, robots.txt (Sitemap line and header comment), sitemap.xml
 * and llms.txt. The current origin lives in tools/site-origin.txt, so running this
 * script again later (e.g. a second domain change) works the same way.
 *
 * After running it: connect the domain to the Worker (Cloudflare dashboard → Workers →
 * cabanagreenview → Settings → Domains & Routes → Custom Domain), deploy, then submit
 * the new sitemap in Google Search Console and Bing Webmaster Tools.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const MARKER = join(HERE, 'site-origin.txt');
const FILES = ['index.html', 'robots.txt', 'sitemap.xml', 'llms.txt'];

const next = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https:\/\/[a-z0-9.-]+\.[a-z]{2,}$/i.test(next)) {
  console.error('Usage: node set-domain.mjs https://your-domain.ro   (https, no path)');
  process.exit(1);
}
const current = (await readFile(MARKER, 'utf8')).trim();
if (current === next) { console.log(`Already on ${next}`); process.exit(0); }

let total = 0;
for (const f of FILES) {
  const p = join(ROOT, f);
  const src = await readFile(p, 'utf8');
  const n = src.split(current).length - 1;
  if (n) await writeFile(p, src.split(current).join(next));
  console.log(`  ${f.padEnd(12)} ${n} replaced`);
  total += n;
}
await writeFile(MARKER, next + '\n');
console.log(`\n${current}  ->  ${next}   (${total} replacements)`);
console.log('Next: add the domain as a Custom Domain on the Worker, deploy, resubmit the sitemap.');
