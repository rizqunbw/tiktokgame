# Snake Kingdom — TikTok LIVE Simulation

## Public Vercel demo

Deployed from GitHub `main` using `npm run build:web`. The page at `/` runs 300 AI snakes entirely in **each viewer’s own browser**. `/?admin=1` enables a local-in-browser event simulator. No follower verification, gifts, or live TikTok connection occur on the public demo. A browser tab is not synchronized with other tabs. Speech is browser Text-to-Speech, requires user gesture, and is not premium generative AI.

## Full local mode for TikTok LIVE Studio

Install Node.js 20+, run `npm install && npm run dev` (or Windows start-windows.bat). Game: http://127.0.0.1:5173/; simulator: http://127.0.0.1:5173/?admin=1. Local Node.js server listens only on `127.0.0.1:3001`. Follow → JOIN → likes/gifts. The local version is not connected to real TikTok yet.

For streaming use Chrome window capture in TikTok LIVE Studio. Enable speaker/browser audio capture and click the voice enable button; do not expose the simulator publicly. Real verified follow-to-join needs a trusted TikTok integration before it can be enforced.

The public Vercel demo intentionally does not host the persistent Node.js/WebSocket simulation because Vercel Functions are not an always-on game server.
