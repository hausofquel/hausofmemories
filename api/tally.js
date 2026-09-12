/* api/tally.js — the shared firefly count
   ============================================================
   A static site has nowhere to keep a number that everyone sees, so
   this small serverless function holds it. Vercel runs anything in
   /api automatically; nothing else in the project changes.

   GET  /api/tally   -> { total }            read the count
   POST /api/tally   -> { total }            one firefly, counted

   ── WHAT YOU HAVE TO DO ONCE ──
   The count needs somewhere to live. In the Vercel dashboard for this
   project: Storage -> create a KV store (Upstash Redis) and connect it
   to the project. That injects KV_REST_API_URL and KV_REST_API_TOKEN
   automatically — this file reads those and needs no other setup.
   Redeploy after connecting.

   Until that exists this route answers { configured: false } and the
   site quietly falls back to counting per-browser, so nothing breaks
   in the meantime.
   ============================================================ */

const KEY = 'hom:fireflies:collected';

function store() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ''), token };
}

async function call(path) {
  const s = store();
  const res = await fetch(`${s.url}/${path}`, {
    headers: { Authorization: `Bearer ${s.token}` },
    cache: 'no-store'
  });
  if (!res.ok) throw new Error(`store responded ${res.status}`);
  const body = await res.json();
  return body.result;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (!store()) {
    // Not provisioned yet — say so plainly rather than pretending zero.
    return res.status(200).json({ configured: false });
  }

  try {
    if (req.method === 'POST') {
      // One click, one firefly. The count only ever goes up by one per
      // request, so the endpoint can't be told to add a hundred.
      const total = await call(`incr/${KEY}`);
      return res.status(200).json({ configured: true, total: Number(total) || 0 });
    }
    const total = await call(`get/${KEY}`);
    return res.status(200).json({ configured: true, total: Number(total) || 0 });
  } catch (err) {
    // Never let a counter take the page down with it.
    return res.status(200).json({ configured: false, error: String(err.message || err) });
  }
}
