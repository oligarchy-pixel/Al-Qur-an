// Jembatan TikTok LIVE / YouTube Live -> game (bisa di PC atau di HP Android lewat Termux).
// Cara pakai:
//   TikTok  : node server.js username_tiktok_kamu
//   YouTube : node server.js yt:@handle_channel_kamu
// Lalu buka game di browser:  http://localhost:21214/
// (server ini juga menyajikan file game, jadi tidak perlu membuka index.html manual)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { WebSocketServer } from "ws";

const ARG = (process.argv[2] || process.env.TIKTOK_USERNAME || "").trim();
const YT = /^(yt:|youtube:|--youtube=?)/i.test(ARG);
// buang awalan, spasi, dan tanda @ berlebih (mis. "@@nama" karena salah ketik), serta alamat lengkap youtube.com/@nama
const username = ARG.replace(/^(yt:|youtube:|--youtube=?)/i, "").replace(/^https?:\/\/(www\.|m\.)?youtube\.com\//i, "").replace(/\/.*$/, "").replace(/\s+/g, "").replace(/^@+/, "");
const PORT = Number(process.env.PORT || 21214);
if (!username) {
  console.log("Pemakaian:  TikTok  → node server.js USERNAME_TIKTOK");
  console.log("            YouTube → node server.js yt:@HANDLE_CHANNEL");
  process.exit(1);
}

/* ---------- Server file game (http://localhost:21214/) ---------- */
const GAME_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".ogg": "audio/ogg", ".wav": "audio/wav", ".webmanifest": "application/manifest+json",
};
const server = http.createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  // daftar mp3 di folder game/quran (untuk bacaan milik sendiri, mis. maqam Jiharkah)
  if (p === "/quran-list") {
    let files = [];
    try { files = fs.readdirSync(path.join(GAME_DIR, "quran")).filter((f) => /\.(mp3|m4a|ogg|wav)$/i.test(f)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true })); } catch (e) { /* folder belum ada */ }
    res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-cache" });
    res.end(JSON.stringify(files)); return;
  }
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
// LIVE tanpa batas: jangan sampai server mati karena satu kesalahan kecil
process.on("unhandledRejection", (e) => console.log("Peringatan:", e?.message || e));
process.on("uncaughtException", (e) => { console.log("Peringatan:", e?.message || e); if (e?.code === "EADDRINUSE") process.exit(1); });
server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.log(`Port ${PORT} sudah dipakai server lain yang masih berjalan.`);
    console.log('Hentikan dulu dengan:  pkill -f "node server.js"   lalu jalankan lagi.');
    process.exit(1);
  }
  throw e;
});
const wss = new WebSocketServer({ server });
const safe = (o) => JSON.stringify(o, (k, v) => (typeof v === "bigint" ? v.toString() : v));
let lastStatus = { ok: false, code: "waiting", user: (YT ? "@" : "") + username, text: "Menunggu LIVE dimulai…" };
function broadcast(event, data) {
  const msg = safe({ event, data });
  for (const c of wss.clients) if (c.readyState === 1) c.send(msg);
}
function status(ok, text, code) {
  lastStatus = { ok, text, code, user: (YT ? "@" : "") + username };
  console.log(text);
  broadcast("status", lastStatus);
}
wss.on("connection", (ws) => {
  console.log("Game terhubung ke server.");
  ws.send(safe({ event: "status", data: lastStatus }));
});
server.listen(PORT, () => {
  console.log("==============================================");
  console.log(` Server siap. Buka di Chrome:`);
  console.log(`   Game ISLAMI – Kuis      : http://localhost:${PORT}/islami.html`);
  console.log(`   Game ISLAMI – Dzikir    : http://localhost:${PORT}/islami.html?mode=dzikir`);
  console.log(`   Versi RINGAN (HP biasa) : http://localhost:${PORT}/lite.html`);
  console.log(`   Versi PETA (HP kuat)    : http://localhost:${PORT}/`);
  console.log(" Biarkan jendela ini tetap berjalan selama LIVE.");
  console.log("==============================================");
});

/* ---------- Koneksi ke TikTok LIVE ---------- */
async function startTikTok() {
  const { TikTokLiveConnection, WebcastEvent, ControlEvent } = await import("tiktok-live-connector");
  const opts = {};
  if (process.env.SIGN_API_KEY) opts.signApiKey = process.env.SIGN_API_KEY;
  const conn = new TikTokLiveConnection(username, opts);

  for (const [name, ev] of [
    ["chat", WebcastEvent.CHAT], ["gift", WebcastEvent.GIFT], ["like", WebcastEvent.LIKE],
    ["follow", WebcastEvent.FOLLOW], ["share", WebcastEvent.SHARE], ["member", WebcastEvent.MEMBER],
  ]) {
    conn.on(ev, (data) => {
      broadcast(name, data);
      // tampilkan di Termux supaya mudah dicek apakah komentar/gift benar-benar masuk
      const u = data?.user?.uniqueId || data?.uniqueId || "?";
      if (name === "chat") console.log(`💬 ${u}: ${data.comment}`);
      else if (name === "gift" && (data.repeatEnd || data.giftDetails?.giftType !== 1)) console.log(`🎁 ${u}: ${data.giftDetails?.giftName || data.giftName || "gift"} x${data.repeatCount || 1}`);
      else if (name === "follow") console.log(`➕ ${u} follow`);
    });
  }
  let retryT = null;
  const retry = (ms) => { clearTimeout(retryT); retryT = setTimeout(start, ms); };
  conn.on(ControlEvent.DISCONNECTED, () => {
    status(false, "Terputus dari TikTok LIVE — mencoba lagi…", "lost");
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
      status(true, `Terhubung ke LIVE @${username}`, "connected");
      console.log(`(room ${state.roomId})`);
    } catch (e) {
      console.log(`Belum bisa terhubung: ${e?.message || e}`);
      status(false, `Menunggu LIVE @${username} dimulai… (cek tiap 15 detik)`, "waiting");
      retry(15000);
    }
  }
  start();
}

/* ---------- Koneksi ke YouTube Live (tanpa API key) ---------- */
async function startYouTube() {
  const { LiveChat } = (await import("youtube-chat")).default;
  const handle = "@" + username;
  let chat = null, timer = null;
  const again = (ms) => { clearTimeout(timer); timer = setTimeout(start, ms); };
  const text = (msg) => (msg || []).map((m) => m.text ?? m.emojiText ?? "").join("");
  async function start() {
    if (chat) { try { chat.stop(); } catch (e) { /* */ } }
    chat = new LiveChat({ handle });
    chat.on("start", (liveId) => { status(true, `Terhubung ke YouTube Live ${handle}`, "connected"); console.log(`(live ${liveId})`); });
    chat.on("end", () => { status(false, "YouTube Live berakhir/terputus — mencoba lagi…", "lost"); again(15000); });
    chat.on("error", (e) => { const m = String(e?.message || e); if (!/live stream|not found|liveId/i.test(m)) console.log("Error:", m); });
    chat.on("chat", (c) => {
      const a = c.author || {};
      const base = { uniqueId: a.channelId || a.name, nickname: a.name, profilePictureUrl: a.thumbnail?.url, platform: "youtube" };
      const comment = text(c.message);
      if (c.superchat) {
        broadcast("superchat", { ...base, amount: c.superchat.amount, comment });
        console.log(`💝 ${a.name}: Super Chat ${c.superchat.amount} ${comment}`);
      }
      if (c.isMembership) { broadcast("follow", base); console.log(`⭐ ${a.name} menjadi member`); }
      if (comment) { broadcast("chat", { ...base, comment }); console.log(`💬 ${a.name}: ${comment}`); }
    });
    const ok = await chat.start().catch(() => false);
    if (!ok) {
      status(false, `Menunggu YouTube Live ${handle} dimulai… (cek tiap 20 detik)`, "waiting");
      again(20000);
    }
  }
  start();
}

(YT ? startYouTube() : startTikTok()).catch((e) => {
  console.log("Gagal memuat penghubung:", e?.message || e);
  console.log("Jalankan:  cd ~/game-peta-negara/server && npm install");
});
