# Build tooling

Local helper scripts. **Not part of the deploy** — the site is the plain files at
the repo root (Cloudflare Workers serves them via `wrangler.jsonc`
`assets.directory: "."`). `package.json` lives here, not at the repo root, so
Cloudflare's framework detection leaves the static deploy alone.

```
cd tools
npm install          # esbuild + sharp (both optional — skip if a step isn't needed)

npm run images       # re-encode images/ -> resized jpg + webp + -640.webp + og.jpg
npm run fonts        # refresh the self-hosted Playfair + Inter woff2 (needs Playwright)
npm run icons        # regenerate favicon PNGs from favicon.svg (needs Playwright)
npm run bundle       # optional: minified + content-hashed copy in ../dist
npm run dev          # serve the site at http://localhost:8080
```

`fonts` and `icons` need Playwright with a browser installed
(`npx playwright install chromium`).
