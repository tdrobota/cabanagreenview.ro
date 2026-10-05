/**
 * One canonical address for the whole site.
 *
 * The site is static files (served by the ASSETS binding). This script runs first for every
 * request and sends anything that is not https://www.cabanagreenviewrarau.ro (the bare domain,
 * the old workers.dev address, plain http) there with a permanent 301, keeping path and query.
 * Everything else is handed to the static files, with _headers, the 404 page and the
 * /index.html -> / redirects still applied by the assets layer.
 *
 * tools/set-domain.mjs rewrites CANONICAL when the domain changes.
 */
const CANONICAL = 'https://www.cabanagreenviewrarau.ro';
const CANONICAL_HOST = new URL(CANONICAL).hostname;
const LOCAL = new Set(['localhost', '127.0.0.1']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (LOCAL.has(url.hostname)) return env.ASSETS.fetch(request);   // wrangler dev
    if (url.hostname !== CANONICAL_HOST || url.protocol !== 'https:') {
      return Response.redirect(CANONICAL + url.pathname + url.search, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
