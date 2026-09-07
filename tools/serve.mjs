/** Minimal static server for local preview:  npm run dev  ->  http://localhost:8080 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = process.argv[2] ? process.argv[2] : join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = Number(process.env.PORT) || 8080;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain',
};

createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const fp = normalize(join(ROOT, p));
    if (!fp.startsWith(normalize(ROOT))) { res.writeHead(403); return res.end(); }
    const body = await readFile(fp);
    res.writeHead(200, { 'content-type': MIME[extname(fp)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    try {
      res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
      res.end(await readFile(join(ROOT, '404.html')));
    } catch { res.writeHead(404); res.end('Not found'); }
  }
}).listen(PORT, () => console.log(`serving ${ROOT} on http://localhost:${PORT}`));
