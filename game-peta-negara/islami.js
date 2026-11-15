/* Game Islami LIVE (ringan) — dua mode:
 *   islami.html               → Kuis Islami: penonton menjawab A/B/C/D di komentar
 *   islami.html?mode=dzikir   → Dzikir Bersama: penonton mengetik SubhanAllah, Alhamdulillah, dst.
 * Bisa untuk TikTok maupun YouTube (lewat server bawaan). Gift/Super Chat hanya diberi ucapan terima kasih,
 * tidak dijadikan poin — supaya permainan tetap tentang ilmu & dzikir.
 */
(() => {
  "use strict";
  const CFG = window.GAME_CONFIG || {};
  const params = new URLSearchParams(location.search);
  let MODE = params.get("mode") === "dzikir" ? "dzikir" : "kuis";
  // ?auto=15 → bergantian otomatis Kuis ⇄ Dzikir setiap 15 menit (untuk LIVE panjang tanpa menyentuh HP)
  const AUTO_MIN = Math.max(0, Number(params.get("auto")) || 0);
  // ?lang=ms → Bahasa Melayu, ?lang=id → Bahasa Indonesia, lainnya → English
  const LANG = ["id", "ms"].includes(params.get("lang") || CFG.BAHASA) ? (params.get("lang") || CFG.BAHASA) : "en";
  const $ = (s) => document.querySelector(s);
  const Q_SEC = CFG.KUIS_DETIK ?? 20, REVEAL_SEC = 7, ROUND_Q = 10;
  const TARGET_STEP = CFG.DZIKIR_TARGET ?? 500;

  const TX = {};
  TX.en = {
    quizTitle: "ISLAMIC QUIZ 🕌", quizSub: "Type A, B, C or D in the chat to answer!",
    dzTitle: "DZIKIR TOGETHER 📿", dzSub: "Type in the chat: SubhanAllah · Alhamdulillah · Allahu Akbar…",
    q: (n) => `Question ${n}`, left: (s, n) => `⏱ ${s}s · ${n} answer${n === 1 ? "" : "s"}`,
    correct: (n, names) => n ? `✅ ${n} correct! ${names}` : "No correct answers this time — next question!",
    salam: (u) => `Assalamu'alaikum ${u}! 👋`, askQ: (u) => `${u}, answer with A, B, C or D 😊`,
    askD: (u) => `${u}, type SubhanAllah or Alhamdulillah 📿`, thanks: (u) => `Jazakallahu khairan, ${u} 🤲`,
    dz: (u, d) => `${u}: ${d} ✨`, top: "TOP PLAYERS", topD: "TOP DZIKIR", pts: (n) => `${n} pts`, times: (n) => `${n}x`,
    noPlayers: "No players yet — join in the chat!", total: (t) => `dzikir together · target ${t}`,
    champTitle: "🏆 QUIZ CHAMPIONS 🏆", champNext: "New round starting soon…",
    goalTitle: "MasyaAllah! 🤲", goal: (n) => `${n} dzikir together!`, goalNext: (t) => `Next target: ${t}`,
    nowQuiz: "🕌 Quiz time! Answer with A, B, C or D", nowDz: "📿 Dzikir time! Type SubhanAllah, Alhamdulillah…",
    tap: "🔊 Tap the screen for sound", waiting: (u) => `Waiting for LIVE ${u}…`, live: (u) => `Connected to LIVE ${u}`,
    lost: "LIVE disconnected — retrying…", connecting: "Connecting to server…", noServer: "Server not running — start Termux",
    locale: "en-US",
    remind: ["🤲 Share this LIVE — may it be a continuous reward (sadaqah jariyah)", "ﷺ Don't forget to send salawat upon the Prophet ﷺ", "🕌 Type A, B, C or D to answer the quiz", "📿 Type SubhanAllah · Alhamdulillah · Allahu Akbar", "👍 Like & subscribe to support this channel"],
  };
  TX.id = {
    quizTitle: "KUIS ISLAMI 🕌", quizSub: "Ketik A, B, C atau D di komentar untuk menjawab!",
    dzTitle: "DZIKIR BERSAMA 📿", dzSub: "Ketik di komentar: SubhanAllah · Alhamdulillah · Allahu Akbar…",
    q: (n) => `Soal ${n}`, left: (s, n) => `⏱ ${s} detik · ${n} jawaban`,
    correct: (n, names) => n ? `✅ ${n} benar! ${names}` : "Belum ada yang benar — lanjut soal berikutnya!",
    salam: (u) => `Assalamu'alaikum ${u}! 👋`, askQ: (u) => `${u}, jawab dengan A, B, C atau D 😊`,
    askD: (u) => `${u}, ketik SubhanAllah atau Alhamdulillah 📿`, thanks: (u) => `Jazakallahu khairan, ${u} 🤲`,
    dz: (u, d) => `${u}: ${d} ✨`, top: "PEMAIN TERATAS", topD: "DZIKIR TERBANYAK", pts: (n) => `${n} poin`, times: (n) => `${n}x`,
    noPlayers: "Belum ada pemain — ayo ikut di komentar!", total: (t) => `dzikir bersama · target ${t}`,
    champTitle: "🏆 JUARA KUIS 🏆", champNext: "Ronde baru segera dimulai…",
    goalTitle: "MasyaAllah! 🤲", goal: (n) => `${n} dzikir bersama!`, goalNext: (t) => `Target berikutnya: ${t}`,
    nowQuiz: "🕌 Waktunya kuis! Jawab dengan A, B, C atau D", nowDz: "📿 Waktunya dzikir! Ketik SubhanAllah, Alhamdulillah…",
    tap: "🔊 Ketuk layar untuk suara", waiting: (u) => `Menunggu LIVE ${u}…`, live: (u) => `Terhubung ke LIVE ${u}`,
    lost: "LIVE terputus — mencoba lagi…", connecting: "Menghubungkan ke server…", noServer: "Server belum jalan — buka Termux",
    locale: "id-ID",
    remind: ["🤲 Bagikan LIVE ini, semoga jadi amal jariyah", "ﷺ Jangan lupa bershalawat kepada Nabi ﷺ", "🕌 Ketik A, B, C atau D untuk menjawab kuis", "📿 Ketik SubhanAllah · Alhamdulillah · Allahu Akbar", "👍 Like & subscribe untuk mendukung channel ini"],
  };
  TX.ms = {
    quizTitle: "KUIZ ISLAM 🕌", quizSub: "Taip A, B, C atau D di ruangan sembang untuk menjawab!",
    dzTitle: "ZIKIR BERSAMA 📿", dzSub: "Taip di ruangan sembang: SubhanAllah · Alhamdulillah · Allahu Akbar…",
    q: (n) => `Soalan ${n}`, left: (s, n) => `⏱ ${s} saat · ${n} jawapan`,
    correct: (n, names) => n ? `✅ ${n} betul! ${names}` : "Tiada jawapan betul kali ini — soalan seterusnya!",
    salam: (u) => `Assalamualaikum ${u}! 👋`, askQ: (u) => `${u}, jawab dengan A, B, C atau D 😊`,
    askD: (u) => `${u}, taip SubhanAllah atau Alhamdulillah 📿`, thanks: (u) => `Jazakallahu khairan, ${u} 🤲`,
    dz: (u, d) => `${u}: ${d} ✨`, top: "PEMAIN TERBAIK", topD: "ZIKIR TERBANYAK", pts: (n) => `${n} mata`, times: (n) => `${n} kali`,
    noPlayers: "Belum ada pemain — jom sertai di ruangan sembang!", total: (t) => `zikir bersama · sasaran ${t}`,
    champTitle: "🏆 JUARA KUIZ 🏆", champNext: "Pusingan baharu akan bermula…",
    goalTitle: "MasyaAllah! 🤲", goal: (n) => `${n} zikir bersama!`, goalNext: (t) => `Sasaran seterusnya: ${t}`,
    nowQuiz: "🕌 Masa kuiz! Jawab dengan A, B, C atau D", nowDz: "📿 Masa zikir! Taip SubhanAllah, Alhamdulillah…",
    tap: "🔊 Sentuh skrin untuk bunyi", waiting: (u) => `Menunggu LIVE ${u}…`, live: (u) => `Bersambung ke LIVE ${u}`,
    lost: "LIVE terputus — mencuba semula…", connecting: "Menyambung ke pelayan…", noServer: "Pelayan belum berjalan — buka Termux",
    locale: "ms-MY",
    remind: ["🤲 Kongsikan LIVE ini, semoga menjadi amal jariah", "ﷺ Jangan lupa berselawat ke atas Nabi ﷺ", "🕌 Taip A, B, C atau D untuk menjawab kuiz", "📿 Taip SubhanAllah · Alhamdulillah · Allahu Akbar", "👍 Like & subscribe untuk menyokong saluran ini"],
  };
  const T = TX[LANG];

  /* ---------- Skala 1080x1920 ---------- */
  const stage = $("#stage");
  const fit = () => { const s = Math.min(innerWidth / 1080, innerHeight / 1920); stage.style.transform = `translate(${-540 * s}px, ${-960 * s}px) scale(${s})`; };
  addEventListener("resize", fit); fit();

  /* ---------- Util ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const num = (n) => Math.round(n).toLocaleString(T.locale);
  const short = (s, n = 16) => { s = String(s || ""); return s.length > n ? s.slice(0, n - 1) + "…" : s; };
  const norm = (s) => String(s).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const optText = (o) => { const p = String(o).split(" | "); return LANG === "en" ? p[0] : LANG === "ms" ? (p[2] || p[1] || p[0]) : (p[1] || p[0]); };

  /* ---------- State ---------- */
  const keyOf = (m) => `islami.${m}.${params.get("demo") === "1" ? "demo" : "v1"}`;
  let KEY = keyOf(MODE);
  if (params.get("reset") === "1") {
    try { for (const k of ["islami.kuis.v1", "islami.kuis.demo", "islami.dzikir.v1", "islami.dzikir.demo"]) localStorage.removeItem(k); } catch (e) { /* */ }
    params.delete("reset");
    try { history.replaceState(null, "", location.pathname + (params.toString() ? "?" + params : "")); } catch (e) { /* */ }
  }
  let S;
  function loadState() {
    S = { u: {}, qn: 0, round: 1, dz: {}, total: 0, target: TARGET_STEP };
    try { const v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v && v.u) S = Object.assign(S, v); } catch (e) { /* */ }
  }
  const saveState = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* */ } };
  loadState();
  let dirty = false;
  setInterval(() => { if (!dirty) return; dirty = false; saveState(); }, 4000);
  const user = (raw) => { const u = S.u[raw.id] || (S.u[raw.id] = { n: "", p: 0 }); u.n = short(raw.nick || raw.id, 18); return u; };

  /* ---------- Suara ringan (tanpa musik) ---------- */
  let ac = null;
  // Bunyi kuiz: keras & jelas (?svol=1.5 untuk lebih keras). Lewat kompresor supaya keras tanpa pecah.
  const SVOL = Math.max(0, Number(params.get("svol") ?? CFG.VOLUME_EFEK_KUIS ?? 1));
  let out = null;
  const bus = () => {
    if (out) return out;
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -10; comp.ratio.value = 6; comp.attack.value = 0.003; comp.release.value = 0.15;
    out = ac.createGain(); out.gain.value = 2.2 * SVOL; out.connect(comp); comp.connect(ac.destination);
    return out;
  };
  const tone = (f, t, d, v = 0.1, type = "sine") => { const o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.value = f; g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(g).connect(bus()); o.start(t); o.stop(t + d + 0.02); };
  const SFX = {
    newq: (t) => { tone(784, t, 0.18, 0.16, "triangle"); tone(1047, t + 0.12, 0.3, 0.16, "triangle"); },       // soal baru
    ans: (t) => tone(660 + Math.random() * 200, t, 0.08, 0.07, "triangle"),                                       // ada yang menjawab
    tick: (t) => tone(1400, t, 0.07, 0.12, "square"),
    reveal: (t) => [659, 784, 988, 1319].forEach((f, i) => tone(f, t + i * 0.1, 0.45, 0.16, "triangle")),
    dz: (t) => tone(880 + Math.random() * 300, t, 0.3, 0.09),
    goal: (t) => [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, t + i * 0.14, 0.7, 0.16, "triangle")),
    hello: (t) => tone(1047, t, 0.18, 0.08),
  };
  const DUR = { newq: 0.5, ans: 0.1, tick: 0.1, reveal: 0.8, dz: 0.3, goal: 1.3, hello: 0.2 };
  let lastS = 0;
  const sfx = (n) => {
    if (CFG.SUARA === false || !ac || ac.state !== "running") return;
    const now = performance.now(); if ((n === "dz" || n === "hello" || n === "ans") && now - lastS < 150) return; lastS = now;
    try { SFX[n](ac.currentTime + 0.01); } catch (e) { /* */ }
    if (params.get("duck") === "1") duck(DUR[n] || 0.5);   // pengecilan sesaat hanya bila diminta (?duck=1)
  };
  const tap = $("#tap"); tap.textContent = T.tap; if (CFG.SUARA !== false) tap.classList.remove("hidden");
  /* ---------- Bacaan Al-Quran (diputar berulang-ulang) ----------
   * ?quran=0 → mati. ?qari=alafasy|husary|minshawi|sudais. ?surah=1,36,55 → daftar surah sendiri. ?qvol=0.8 → volume.
   * Saat bacaan Al-Quran diputar, bunyi efek game dimatikan supaya bacaan didengar dengan tenang (QS Al-A'raf: 204).
   */
  const QARI = { alafasy: ["ar.alafasy", "Mishary Rashid Alafasy"], husary: ["ar.husary", "Mahmoud Khalil Al-Husary"],
    minshawi: ["ar.minshawi", "Muhammad Siddiq Al-Minshawi"], sudais: ["ar.abdurrahmaansudais", "Abdurrahman As-Sudais"] };
  const SURAH = { 1: "Al-Fatihah", 2: "Al-Baqarah", 3: "Ali 'Imran", 12: "Yusuf", 18: "Al-Kahf", 19: "Maryam", 32: "As-Sajdah", 36: "Yasin",
    48: "Al-Fath", 50: "Qaf", 55: "Ar-Rahman", 56: "Al-Waqi'ah", 67: "Al-Mulk", 73: "Al-Muzzammil", 76: "Al-Insan", 78: "An-Naba'",
    87: "Al-A'la", 89: "Al-Fajr", 93: "Ad-Duha", 94: "Asy-Syarh", 97: "Al-Qadr", 112: "Al-Ikhlas", 113: "Al-Falaq", 114: "An-Nas" };
  const quranWanted = params.get("quran") !== "0" && CFG.QURAN !== false;
  const qari = QARI[params.get("qari") || CFG.QURAN_QARI || "alafasy"] || QARI.alafasy;
  const qList = (params.get("surah") || (CFG.QURAN_SURAH || [1, 36, 55, 56, 67, 18, 19, 32, 78, 50, 2]).join(","))
    .split(",").map((n) => parseInt(n, 10)).filter((n) => n >= 1 && n <= 114);
  const QLOCAL = Array.isArray(CFG.QURAN_LOKAL) ? CFG.QURAN_LOKAL : [];  // mp3 milik sendiri, mis. ["quran/yasin.mp3"]
  let quranOn = false, qIdx = 0, qFails = 0, qBitrate = 64;
  const qAudio = new Audio();
  qAudio.preload = "auto";
  qAudio.volume = Math.min(1, Math.max(0, Number(params.get("qvol") ?? CFG.QURAN_VOLUME ?? 0.9)));
  const np = $("#np");
  // Ducking: kecilkan bacaan Al-Quran sesaat ketika bunyi kuiz berbunyi, lalu kembalikan perlahan
  const QBASE = qAudio.volume; let duckUntil = 0;
  function duck(sec) { duckUntil = Math.max(duckUntil, performance.now() + sec * 1000 + 250); qAudio.volume = QBASE * 0.35; }
  setInterval(() => { if (performance.now() > duckUntil && qAudio.volume < QBASE) qAudio.volume = Math.min(QBASE, qAudio.volume + QBASE * 0.08); }, 60);
  function qSrc() {
    if (QLOCAL.length) return QLOCAL[qIdx % QLOCAL.length];
    return `https://cdn.islamic.network/quran/audio-surah/${qBitrate}/${qari[0]}/${qList[qIdx % qList.length]}.mp3`;
  }
  function qLabel() {
    if (QLOCAL.length) return "🎧 " + decodeURIComponent(String(QLOCAL[qIdx % QLOCAL.length]).split("/").pop().replace(/\.mp3$/i, ""));
    const n = qList[qIdx % qList.length];
    return `🎧 ${SURAH[n] ? "Surah " + SURAH[n] : "Surah " + n} · ${qari[1]}`;
  }
  function qPlay() {
    qAudio.src = qSrc();
    np.textContent = qLabel(); np.classList.remove("hidden");
    qAudio.play().then(() => { quranOn = true; qFails = 0; }).catch(() => {});
  }
  qAudio.addEventListener("ended", () => { qIdx++; qPlay(); });            // surah berikutnya, lalu ulang dari awal
  qAudio.addEventListener("error", () => {
    if (!QLOCAL.length && qBitrate === 64) { qBitrate = 128; qPlay(); return; } // coba kualitas lain
    qFails++; qBitrate = 64;
    if (qFails > qList.length + 2) { quranOn = false; np.textContent = "🎧 Audio Al-Quran tidak dapat dimuat (cek internet)"; setTimeout(() => { qFails = 0; qPlay(); }, 60000); return; }
    qIdx++; setTimeout(qPlay, 3000);
  });
  qAudio.addEventListener("playing", () => { quranOn = true; });
  qAudio.addEventListener("pause", () => { if (!qAudio.ended) quranOn = false; });

  if (quranWanted) tap.classList.remove("hidden");
  addEventListener("pointerdown", () => {
    if (quranWanted && !quranOn && (!qAudio.src || qAudio.paused)) { if (!qAudio.src) qPlay(); else qAudio.play().catch(() => {}); }
    try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state !== "running") ac.resume(); } catch (e) { /* */ }
    tap.classList.add("hidden");
    if (matchMedia("(pointer: coarse)").matches && !document.fullscreenElement && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
  });

  /* ---------- Banner ---------- */
  const queue = []; let busy = false;
  function say(html, kind = "", prio = 1) {
    if (prio <= 1 && queue.length > 3) return;
    queue.push({ html, kind, prio }); queue.sort((a, b) => b.prio - a.prio);
    if (queue.length > 8) queue.length = 8;
    if (!busy) nextMsg();
  }
  function nextMsg() {
    const q = queue.shift(); if (!q) { busy = false; return; } busy = true;
    const box = $("#banner"), el = document.createElement("div"), old = box.firstChild;
    el.className = "msg in " + q.kind; el.innerHTML = `<span>${q.html}</span>`;
    if (old) { old.classList.add("out"); setTimeout(() => old.remove(), 350); }
    box.append(el); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("in")));
    setTimeout(nextMsg, queue.length > 2 ? 1200 : 2000);
  }

  /* ---------- Papan pemain ---------- */
  let boardQ = false;
  function renderBoard() {
    boardQ = false;
    const list = Object.values(S.u).filter((u) => u.p > 0).sort((a, b) => b.p - a.p).slice(0, 5);
    $("#board").innerHTML = `<h3>${MODE === "kuis" ? T.top : T.topD}<small>${MODE === "kuis" ? T.q(S.qn || 1).replace(/\d+/, (n) => `${((S.qn - 1) % ROUND_Q) + 1}/${ROUND_Q}`) : ""}</small></h3>` +
      (list.length ? list.map((u, i) => `<div class="pr"><span class="r">${["🥇", "🥈", "🥉"][i] || i + 1}</span><span class="nm">${esc(u.n)}</span><span class="p">${MODE === "kuis" ? T.pts(u.p) : T.times(u.p)}</span></div>`).join("") : `<div class="empty">${T.noPlayers}</div>`);
  }
  const queueBoard = () => { if (!boardQ) { boardQ = true; setTimeout(renderBoard, 400); } };

  /* ---------- Sapaan untuk penonton baru ---------- */
  const greeted = new Set(); let lastHello = 0;
  function greet(raw, ask) {
    if (greeted.has(raw.id)) return false;
    greeted.add(raw.id);
    const now = Date.now(); if (now - lastHello < 2500) return true; lastHello = now;
    say(ask ? (MODE === "kuis" ? T.askQ(esc(short(raw.nick))) : T.askD(esc(short(raw.nick)))) : T.salam(esc(short(raw.nick))), "", 1);
    sfx("hello");
    return true;
  }

  /* ================= MODE KUIS ================= */
  let Q = null, phase = "q", phaseEnd = 0, answers = new Map(), order = [], deck = [];
  function newQuestion() {
    if (!deck.length) deck = shuffle([...window.KUIS.keys()]);
    const item = window.KUIS[deck.pop()];
    const opts = shuffle(item.a.map((t, i) => ({ t, ok: i === 0 })));
    Q = { text: item[LANG] || item.en, opts, correct: opts.findIndex((o) => o.ok) };
    S.qn++; dirty = true;
    answers = new Map(); order = [];
    phase = "q"; phaseEnd = Date.now() + Q_SEC * 1000;
    $("#qnum").textContent = T.q(((S.qn - 1) % ROUND_Q) + 1) + " / " + ROUND_Q;
    $("#qtext").textContent = Q.text;
    sfx("newq");
    $("#opts").innerHTML = opts.map((o, i) => `<div class="opt"><b>${"ABCD"[i]}</b><span>${esc(optText(o.t))}</span><span class="n"></span></div>`).join("");
    renderBoard();
  }
  function parseAnswer(comment) {
    const n = norm(comment);
    if (!n) return -1;
    const m = n.match(/^(?:jawab|jawaban|answer|ans)?\s*([abcd1-4])$/) || n.match(/^([abcd])\b/);
    if (m) return "abcd1234".indexOf(m[1]) % 4;
    for (let i = 0; i < 4; i++) for (const alt of String(Q.opts[i].t).split(" | ")) if (norm(alt) === n) return i;
    return -1;
  }
  function reveal() {
    phase = "r"; phaseEnd = Date.now() + REVEAL_SEC * 1000;
    const els = [...document.querySelectorAll(".opt")], count = [0, 0, 0, 0];
    for (const a of answers.values()) count[a]++;
    els.forEach((el, i) => { el.classList.add(i === Q.correct ? "ok" : "no"); el.querySelector(".n").textContent = count[i] ? count[i] : ""; });
    const winners = order.filter((id) => answers.get(id) === Q.correct);
    winners.forEach((id, i) => { const u = S.u[id]; if (u) u.p += 10 + ([5, 3, 1][i] || 0); });
    dirty = true;
    const names = winners.slice(0, 3).map((id) => esc(S.u[id]?.n || "")).join(", ");
    say(T.correct(winners.length, names), "green", 5);
    sfx("reveal"); renderBoard();
  }
  function champions() {
    phase = "c"; phaseEnd = Date.now() + 9000;
    const list = Object.values(S.u).filter((u) => u.p > 0).sort((a, b) => b.p - a.p).slice(0, 3);
    if (!list.length) { phaseEnd = 0; return; }
    const o = $("#over");
    o.querySelector("h2").textContent = T.champTitle;
    o.querySelector(".big").innerHTML = list.map((u, i) => `${["🥇", "🥈", "🥉"][i]} ${esc(u.n)} — ${T.pts(u.p)}`).join("<br>");
    o.querySelector(".t").textContent = T.champNext;
    o.classList.add("show"); sfx("goal");
  }
  function quizTick() {
    if (MODE !== "kuis") return;
    const now = Date.now(), left = Math.max(0, Math.ceil((phaseEnd - now) / 1000));
    if (phase === "q") {
      $("#qfill").style.transform = `scaleX(${Math.max(0, (phaseEnd - now) / (Q_SEC * 1000))})`;
      $("#qinfo").textContent = T.left(left, answers.size);
      if (left <= 5 && left > 0 && left !== quizTick.last) sfx("tick");
      quizTick.last = left;
      if (now >= phaseEnd) reveal();
    } else if (phase === "r" && now >= phaseEnd) {
      if (switchWanted) { setMode("dzikir"); return; }
      if (S.qn % ROUND_Q === 0) champions();
      if (phase !== "c" || !phaseEnd) newQuestion();
    } else if (phase === "c" && now >= phaseEnd) {
      $("#over").classList.remove("show");
      for (const u of Object.values(S.u)) u.p = 0;
      S.round++; dirty = true; newQuestion();
    }
  }
  function quizChat(raw, comment) {
    const u = user(raw);
    if (phase !== "q") return;
    const a = parseAnswer(comment);
    if (a < 0) { greet(raw, true); return; }
    greeted.add(raw.id);
    if (answers.has(raw.id)) return;
    answers.set(raw.id, a); order.push(raw.id); sfx("ans");
    $("#qinfo").textContent = T.left(Math.max(0, Math.ceil((phaseEnd - Date.now()) / 1000)), answers.size);
    void u;
  }

  /* ================= MODE DZIKIR ================= */
  const DZ = [
    { k: "subhanallah", ar: "سُبْحَانَ ٱللَّٰهِ", lt: "SubhanAllah", re: /subh?an+a?l+a+h|subhanal+oh|سبحان/ },
    { k: "alhamdulillah", ar: "ٱلْحَمْدُ لِلَّٰهِ", lt: "Alhamdulillah", re: /al?hamd|hamdulil|الحمد/ },
    { k: "allahuakbar", ar: "ٱللَّٰهُ أَكْبَرُ", lt: "Allahu Akbar", re: /al+ah?u?\s?akbar|al+ohu?\s?akbar|takbir|اكبر|أكبر/ },
    { k: "astaghfirullah", ar: "أَسْتَغْفِرُ ٱللَّٰهَ", lt: "Astaghfirullah", re: /ast[ae]?g+h?f[ie]?r|استغفر/ },
    { k: "lailahaillallah", ar: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ", lt: "La ilaha illallah", re: /la+\s?i?la+ha\s?il+al+ah|lailahail|laa?\s?ilaa?ha|لا اله|لا إله/ },
    { k: "shalawat", ar: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّد", sm: true, lt: LANG === "ms" ? "Selawat" : "Shalawat", re: /s[h]?[aoe]l+[ae]?wat|s[h]?[aoe]l+[ie]\s?a?la|s[h]?[aoe]l+al+ahu|ﷺ|صل/ },
  ];
  let goalBusy = false;
  function dzRender(hitKey) {
    $("#total .num").textContent = num(S.total);
    $("#total .lbl").textContent = T.total(num(S.target));
    $("#tfill").style.transform = `scaleX(${Math.min(1, S.total / S.target)})`;
    for (const d of DZ) {
      const el = document.getElementById("dz-" + d.k);
      el.querySelector(".c").textContent = num(S.dz[d.k] || 0);
      if (d.k === hitKey) { el.classList.add("hit"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("hit"), 250); }
    }
  }
  const lastDz = {};
  function dzChat(raw, comment) {
    const low = String(comment).toLowerCase().normalize("NFKD").replace(/[̀-ًͯ-ٰٟ]/g, "").replace(/[^\p{L}\s؀-ۿﷺ]/gu, " ");
    const flat = low.replace(/\s+/g, "");
    const hits = DZ.filter((d) => d.re.test(flat) || d.re.test(low));
    if (!hits.length) { greet(raw, true); return; }
    greeted.add(raw.id);
    const now = Date.now(); if (lastDz[raw.id] && now - lastDz[raw.id] < 1000) return; lastDz[raw.id] = now;
    const u = user(raw);
    for (const d of hits.slice(0, 3)) { S.dz[d.k] = (S.dz[d.k] || 0) + 1; S.total++; u.p++; }
    dirty = true;
    say(T.dz(esc(u.n), esc(hits[0].lt)), "", 2);
    sfx("dz"); dzRender(hits[0].k); queueBoard();
    if (S.total >= S.target && !goalBusy) {
      goalBusy = true;
      const o = $("#over");
      o.querySelector("h2").textContent = T.goalTitle;
      o.querySelector(".big").textContent = T.goal(num(S.target));
      S.target += TARGET_STEP;
      o.querySelector(".t").textContent = T.goalNext(num(S.target));
      o.classList.add("show"); sfx("goal");
      setTimeout(() => { o.classList.remove("show"); goalBusy = false; dzRender(); }, 6000);
    }
  }

  /* ---------- Event dari server (TikTok / YouTube / TikFinity) ---------- */
  const pick = (img) => { const a = img && (img.url || img.urlList); return Array.isArray(a) ? a[0] : null; };
  function normUser(d) { const u = d.user || d, id = u.uniqueId || d.uniqueId || u.userId || d.userId || u.nickname || d.nickname; return id ? { id: String(id), nick: u.nickname || d.nickname || String(id), avatar: pick(u.profilePicture) } : null; }
  function dispatch(ev, d) {
    if (!d) return; ev = String(ev || "").toLowerCase();
    const raw = normUser(d); if (!raw) return;
    try {
      if (ev === "chat") (MODE === "kuis" ? quizChat : dzChat)(raw, d.comment || d.content || "");
      else if (ev === "member") greet(raw, false);
      else if (ev === "gift") { if (d.giftType === 1 && !d.repeatEnd && !(d.giftDetails && d.giftDetails.giftType !== 1)) return; say(T.thanks(esc(short(raw.nick))), "green", 4); }
      else if (ev === "superchat" || ev === "follow" || (ev === "social" && /follow/i.test(d.displayType || ""))) say(T.thanks(esc(short(raw.nick))), "green", 4);
    } catch (e) { console.error(ev, e); }
  }
  window.islamiGame = { dispatch, state: () => S, quranAudio: () => qAudio };

  /* ---------- Koneksi ---------- */
  const WS_URL = params.get("ws") || (location.protocol.startsWith("http") ? `ws://${location.host}/` : CFG.WS_URL);
  const st = $("#status"), setSt = (ok, t) => { st.textContent = (ok ? "🟢 " : "🔴 ") + t; st.style.opacity = ok ? ".35" : "1"; };
  function connect() {
    let ws; setSt(false, T.connecting);
    try { ws = new WebSocket(WS_URL); } catch (e) { setSt(false, T.noServer); setTimeout(connect, 3000); return; }
    ws.onmessage = (e) => {
      let m; try { m = JSON.parse(e.data); } catch (er) { return; }
      for (const x of Array.isArray(m) ? m : [m]) {
        if (x.event === "status" && x.data) { const d = x.data; setSt(!!d.ok, d.code === "connected" ? T.live(d.user) : d.code === "waiting" ? T.waiting(d.user) : d.code === "lost" ? T.lost : d.text); continue; }
        dispatch(x.event || x.type, x.data || x);
      }
    };
    ws.onclose = () => { setSt(false, T.noServer); setTimeout(connect, 3000); };
    ws.onerror = () => { try { ws.close(); } catch (er) { /* */ } };
  }

  /* ---------- Demo ---------- */
  if (params.get("demo") === "1") {
    const names = ["Ahmad", "Fatimah", "Yusuf", "Aisyah", "Umar", "Khadijah", "Bilal", "Maryam", "Hasan", "Zainab", "Ali", "Salman"];
    const dz = ["SubhanAllah", "Alhamdulillah", "Allahu Akbar", "Astaghfirullah", "La ilaha illallah", "Allahumma shalli 'ala Muhammad", "subhanallah 🤲", "alhamdulillah"];
    const step = () => {
      const i = Math.floor(Math.random() * 30), u = { uniqueId: "d" + i, nickname: names[i % 12] + " " + i }, r = Math.random();
      if (r < 0.06) dispatch("member", u);
      else if (r < 0.08) dispatch("gift", { ...u, giftName: "Rose", diamondCount: 1, giftType: 2, repeatEnd: true });
      else if (MODE === "kuis") dispatch("chat", { ...u, comment: Math.random() < 0.85 ? (Math.random() < 0.6 && Q ? "ABCD"[Q.correct] : "ABCD"[Math.floor(Math.random() * 4)]) : "masyaallah" });
      else dispatch("chat", { ...u, comment: dz[Math.floor(Math.random() * dz.length)] });
      setTimeout(step, 300 + Math.random() * 700);
    };
    step();
  }

  /* ---------- Ganti mode (manual lewat ?mode= atau otomatis lewat ?auto=) ---------- */
  let switchWanted = false;
  function setMode(m, first) {
    if (!first) { saveState(); }
    switchWanted = false;
    MODE = m; KEY = keyOf(m); loadState();
    $("#over").classList.remove("show");
    const quiz = m === "kuis";
    $("#title").textContent = quiz ? T.quizTitle : T.dzTitle;
    $("#sub").textContent = quiz ? T.quizSub : T.dzSub;
    $("#quiz").classList.toggle("hidden", !quiz);
    $("#dzikir").classList.toggle("hidden", quiz);
    stage.classList.toggle("mode-dzikir", !quiz);
    if (quiz) newQuestion();
    else {
      $("#cards").innerHTML = DZ.map((d) => `<div class="dz" id="dz-${d.k}"><div class="arab${d.sm ? " sm" : ""}">${d.ar}</div><div class="lt">${d.lt}</div><div class="c">0</div></div>`).join("");
      dzRender();
    }
    renderBoard();
    if (!first) { say(quiz ? T.nowQuiz : T.nowDz, "green", 6); sfx("goal"); }
    scheduleAuto();
  }
  let autoT = null;
  function scheduleAuto() {
    clearTimeout(autoT);
    if (!(AUTO_MIN > 0)) return;
    autoT = setTimeout(function flip() {
      if (MODE === "kuis") switchWanted = true;      // tunggu soal yang sedang berjalan selesai
      else if (goalBusy) autoT = setTimeout(flip, 3000);
      else setMode("kuis");
    }, AUTO_MIN * 60 * 1000);
  }

  /* ---------- LIVE tanpa batas: jaga memori tetap kecil + pengingat berkala ---------- */
  setInterval(() => {
    const ids = Object.keys(S.u);
    if (ids.length > 3000) {                       // simpan 2000 pemain dengan poin tertinggi saja
      ids.sort((a, b) => (S.u[b].p || 0) - (S.u[a].p || 0));
      for (const id of ids.slice(2000)) delete S.u[id];
      dirty = true;
    }
    if (greeted.size > 5000) greeted.clear();
    for (const k of Object.keys(lastDz)) if (Date.now() - lastDz[k] > 60000) delete lastDz[k];
  }, 60000);
  const REMIND_MIN = Number(params.get("remind") ?? CFG.PENGINGAT_MENIT ?? 6);
  let remindI = 0;
  if (REMIND_MIN > 0) setInterval(() => { say(T.remind[remindI++ % T.remind.length], "", 2); }, REMIND_MIN * 60 * 1000);

  /* ---------- Mulai ---------- */
  document.documentElement.lang = LANG;
  setMode(MODE, true);
  setInterval(quizTick, 250);
  connect();
})();
