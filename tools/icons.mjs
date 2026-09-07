import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';
const svg = await readFile(process.argv[2], 'utf8');
const b = await chromium.launch();
const sizes = { 'favicon-32.png':32, 'favicon-16.png':16, 'icon-192.png':192, 'icon-512.png':512, 'apple-touch-icon.png':180 };
for (const [name, s] of Object.entries(sizes)) {
  const p = await b.newPage({ viewport: { width: s, height: s }, deviceScaleFactor: 1 });
  await p.setContent(`<!doctype html><html><head><style>*{margin:0}html,body{width:${s}px;height:${s}px}svg{width:${s}px;height:${s}px;display:block}</style></head><body>${svg}</body></html>`);
  await p.waitForTimeout(50);
  const buf = await p.screenshot({ omitBackground: true, clip: { x:0, y:0, width:s, height:s } });
  await writeFile(process.argv[3] + '/' + name, buf);
  await p.close();
  console.log(name, s+'px', buf.length+'B');
}
await b.close();
