// Jembatan TikTok LIVE -> game Peta Negara.
// Pakai ini jika TIDAK memakai TikFinity.
// Cara pakai:  node server.js username_tiktok_kamu
// Lalu buka game dengan: index.html?ws=ws://localhost:21214/
import { WebSocketServer } from "ws";
import { TikTokLiveConnection, WebcastEvent, ControlEvent } from "tiktok-live-connector";

const username = (process.argv[2] || process.env.TIKTOK_USERNAME || "").replace(/^@/, "");
const PORT = Number(process.env.PORT || 21214);
if (!username) {
  console.log("Pemakaian: node server.js USERNAME_TIKTOK   (tanpa @)");
  process.exit(1);
}

const wss = new WebSocketServer({ port: PORT });
const safe = (o) => JSON.stringify(o, (k, v) => (typeof v === "bigint" ? v.toString() : v));
function broadcast(event, data) {
  const msg = safe({ event, data });
  for (const c of wss.clients) if (c.readyState === 1) c.send(msg);
}
wss.on("connection", () => console.log("Game terhubung ke server."));
console.log(`Server WebSocket siap di ws://localhost:${PORT}/`);

const opts = {};
if (process.env.SIGN_API_KEY) opts.signApiKey = process.env.SIGN_API_KEY;
const conn = new TikTokLiveConnection(username, opts);

for (const [name, ev] of [
  ["chat", WebcastEvent.CHAT], ["gift", WebcastEvent.GIFT], ["like", WebcastEvent.LIKE],
  ["follow", WebcastEvent.FOLLOW], ["share", WebcastEvent.SHARE],
]) {
  conn.on(ev, (data) => broadcast(name, data));
}
conn.on(ControlEvent.DISCONNECTED, () => {
  console.log("Terputus dari TikTok. Mencoba lagi dalam 10 detik…");
  setTimeout(start, 10000);
});
conn.on(ControlEvent.ERROR, (e) => console.log("Error:", e?.message || e));

async function start() {
  try {
    const state = await conn.connect();
    console.log(`Terhubung ke LIVE @${username} (room ${state.roomId}).`);
  } catch (e) {
    console.log(`Gagal terhubung ke LIVE @${username}: ${e?.message || e}`);
    console.log("Pastikan kamu sedang LIVE. Mencoba lagi dalam 15 detik…");
    setTimeout(start, 15000);
  }
}
start();
