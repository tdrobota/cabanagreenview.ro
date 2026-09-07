/**
 * Production build -> dist/
 *
 *   npm run build
 *
 * The repo root is the source of truth and is directly deployable as-is
 * (that's what GitHub Pages serves). This step is for Cloudflare Pages /
 * Netlify: set the build command to `npm run build` and the output dir to
 * `dist`. It minifies CSS + JS, content-hashes them, rewrites the
 * references in index.html / 404.html, and copies every other asset over.
 */
import { build } from 'esbuild';
import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const hash8 = buf => createHash('sha256').update(buf).digest('hex').slice(0, 8);

await rm(DIST, { recursive: true, force: true });
await mkdir(DIST, { recursive: true });

// 1. minify css + js
const css = (await build({ entryPoints: [join(ROOT, 'styles.css')], minify: true, write: false })).outputFiles[0].text;
const js = (await build({ entryPoints: [join(ROOT, 'app.js')], minify: true, write: false, target: 'es2018' })).outputFiles[0].text;
const cssName = `styles.${hash8(css)}.css`;
const jsName = `app.${hash8(js)}.js`;
await writeFile(join(DIST, cssName), css);
await writeFile(join(DIST, jsName), js);

// 2. static assets
const COPY = ['images', 'fonts', 'fonts.css', 'favicon.svg', 'favicon.ico', 'favicon-16.png',
  'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'site.webmanifest',
  'robots.txt', 'sitemap.xml', 'llms.txt', 'CNAME', '_headers', '_redirects', '.nojekyll'];
for (const f of COPY) {
  await cp(join(ROOT, f), join(DIST, f), { recursive: true }).catch(() => {});
}

// 3. rewrite html
for (const page of ['index.html', '404.html']) {
  let html = await readFile(join(ROOT, page), 'utf8');
  html = html
    .replace(/styles\.css\?v=\d+/g, cssName)
    .replace(/app\.js\?v=\d+/g, jsName);
  await writeFile(join(DIST, page), html);
}

console.log(`dist/ ready — ${cssName}, ${jsName} + assets`);
