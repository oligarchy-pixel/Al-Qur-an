// Jembatan TikTok LIVE -> game Peta Negara (bisa di PC atau di HP Android lewat Termux).
// Pakai ini jika TIDAK memakai TikFinity.
// Cara pakai:  node server.js username_tiktok_kamu
// Lalu buka game di browser:  http://localhost:21214/
// (server ini juga menyajikan file game, jadi tidak perlu membuka index.html manual)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WebSocketServer } from "ws";
import { TikTokLiveConnection, WebcastEvent, ControlEvent } from "tiktok-live-connector";

const username = (process.argv[2] || process.env.TIKTOK_USERNAME || "").trim().replace(/^@/, "");
const PORT = Number(process.env.PORT || 21214);
if (!username) {
  console.log("Pemakaian: node server.js USERNAME_TIKTOK   (tanpa @)");
  process.exit(1);
}

/* ---------- Server file game (http://localhost:21214/) ---------- */
const GAME_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".mp3": "audio/mpeg", ".ogg": "audio/ogg", ".wav": "audio/wav", ".webmanifest": "application/manifest+json",
};
const server = http.createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.resolve(GAME_DIR, "." + p);
  if (!file.startsWith(GAME_DIR + path.sep) || file.includes(`${path.sep}server${path.sep}`)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    // bendera, library & data peta jarang berubah: simpan di cache agar tidak berkedip/termuat ulang
    const stat = /^\/(flags|lib|data)\//.test(p) ? "public, max-age=604800" : "no-cache";
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": stat });
    res.end(data);
  });
});

/* ---------- WebSocket ke game ---------- */
const wss = new WebSocketServer({ server });
const safe = (o) => JSON.stringify(o, (k, v) => (typeof v === "bigint" ? v.toString() : v));
let lastStatus = { ok: false, text: "Menunggu LIVE dimulai…" };
function broadcast(event, data) {
  const msg = safe({ event, data });
  for (const c of wss.clients) if (c.readyState === 1) c.send(msg);
}
function status(ok, text) {
  lastStatus = { ok, text };
  console.log(text);
  broadcast("status", lastStatus);
}
wss.on("connection", (ws) => {
  console.log("Game terhubung ke server.");
  ws.send(safe({ event: "status", data: lastStatus }));
});
server.listen(PORT, () => {
  console.log("==============================================");
  console.log(` Server siap. Buka di Chrome:  http://localhost:${PORT}/`);
  console.log(" Biarkan jendela ini tetap berjalan selama LIVE.");
  console.log("==============================================");
});

/* ---------- Koneksi ke TikTok LIVE ---------- */
const opts = {};
if (process.env.SIGN_API_KEY) opts.signApiKey = process.env.SIGN_API_KEY;
const conn = new TikTokLiveConnection(username, opts);

for (const [name, ev] of [
  ["chat", WebcastEvent.CHAT], ["gift", WebcastEvent.GIFT], ["like", WebcastEvent.LIKE],
  ["follow", WebcastEvent.FOLLOW], ["share", WebcastEvent.SHARE],
]) {
  conn.on(ev, (data) => broadcast(name, data));
}
let retryT = null;
const retry = (ms) => { clearTimeout(retryT); retryT = setTimeout(start, ms); };
conn.on(ControlEvent.DISCONNECTED, () => {
  status(false, "Terputus dari TikTok LIVE — mencoba lagi…");
  retry(10000);
});
conn.on(ControlEvent.ERROR, (e) => {
  const msg = String(e?.exception?.message || e?.message || e?.info || e);
  if (/isn't online|offline/i.test(msg)) return; // belum LIVE: sudah ditangani di start()
  console.log("Error:", msg);
});

async function start() {
  try {
    const state = await conn.connect();
    status(true, `Terhubung ke LIVE @${username}`);
    console.log(`(room ${state.roomId})`);
  } catch (e) {
    console.log(`Belum bisa terhubung: ${e?.message || e}`);
    status(false, `Menunggu LIVE @${username} dimulai… (cek tiap 15 detik)`);
    retry(15000);
  }
}
start();
