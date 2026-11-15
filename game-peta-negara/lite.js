/* Country Race LITE — versi ringan untuk HP spesifikasi rendah.
 * Tanpa peta, tanpa efek berat. Penonton mengetik nama negara; komentar, like, follow, share, gift
 * menambah meter negaranya. Penonton baru otomatis disapa dan diajak bergabung.
 */
(() => {
  "use strict";
  const CFG = window.GAME_CONFIG || {};
  const COUNTRIES = window.COUNTRIES;
  const params = new URLSearchParams(location.search);
  const $ = (s) => document.querySelector(s);
  const LANG = CFG.BAHASA === "id" ? "id" : "en";
  const P = {
    coin: CFG.METER_PER_KOIN ?? 100, like: CFG.METER_PER_LIKE ?? 1, follow: CFG.METER_FOLLOW ?? 50,
    share: CFG.METER_SHARE ?? 30, join: CFG.METER_GABUNG ?? 10, chat: CFG.METER_KOMENTAR ?? 5,
  };
  const ROUND = CFG.DURASI_RONDE_DETIK ?? 300, WIN_SEC = CFG.LAMA_LAYAR_PEMENANG ?? 8, ROWS = 8;
  const T = LANG === "en" ? {
    title: 'TYPE YOUR <span>COUNTRY!</span> 🌍',
    sub: `comment +${P.chat} m · like +${P.like} m · follow +${P.follow} m · 1 coin +${P.coin} m`,
    joined: (u, c) => `${u} joined ${c}!`, hello: (u) => `👋 Welcome ${u}! Type your country`,
    ask: (u) => `${u}, type your country name to join! 🌍`, gift: (u, g, n, m) => `${u} sent ${g} x${n}  +${m}`,
    follow: (u) => `${u} followed! +${P.follow} m`, share: (u) => `${u} shared the LIVE! +${P.share} m`,
    leads: (c) => `👑 ${c} takes the lead!`, players: (n) => `${n} player${n === 1 ? "" : "s"}`,
    empty: "No countries yet…<br>Type your country in the comments!", win: "🏆 ROUND WINNER 🏆", heroes: "Top players:",
    tap: "🔊 Tap the screen for sound", waiting: (u) => `Waiting for LIVE @${u}…`, live: (u) => `Connected to LIVE @${u}`,
    lost: "LIVE disconnected — retrying…", connecting: "Connecting to server…", noServer: "Server not running — start Termux",
    locale: "en-US",
  } : {
    title: 'KETIK <span>NEGARAMU!</span> 🌍',
    sub: `komentar +${P.chat} m · like +${P.like} m · follow +${P.follow} m · 1 koin +${P.coin} m`,
    joined: (u, c) => `${u} bergabung ke ${c}!`, hello: (u) => `👋 Selamat datang ${u}! Ketik negaramu`,
    ask: (u) => `${u}, ketik nama negaramu untuk ikut! 🌍`, gift: (u, g, n, m) => `${u} mengirim ${g} x${n}  +${m}`,
    follow: (u) => `${u} follow! +${P.follow} m`, share: (u) => `${u} membagikan LIVE! +${P.share} m`,
    leads: (c) => `👑 ${c} memimpin!`, players: (n) => `${n} pemain`,
    empty: "Belum ada negara…<br>Ketik nama negaramu di komentar!", win: "🏆 PEMENANG RONDE 🏆", heroes: "Pemain teratas:",
    tap: "🔊 Ketuk layar untuk suara", waiting: (u) => `Menunggu LIVE @${u}…`, live: (u) => `Terhubung ke LIVE @${u}`,
    lost: "LIVE terputus — mencoba lagi…", connecting: "Menghubungkan ke server…", noServer: "Server belum jalan — buka Termux",
    locale: "id-ID",
  };
  const SHORT_EN = { US: "USA", GB: "UK", RU: "Russia", KR: "South Korea", KP: "North Korea", IR: "Iran", VN: "Vietnam", LA: "Laos",
    SY: "Syria", TZ: "Tanzania", TW: "Taiwan", MD: "Moldova", MK: "N. Macedonia", PS: "Palestine", CD: "DR Congo", CG: "Congo",
    CN: "China", CF: "C. African Rep.", BN: "Brunei", VA: "Vatican", FM: "Micronesia", BO: "Bolivia", VE: "Venezuela", AE: "UAE",
    DO: "Dominican Rep.", BA: "Bosnia", GM: "Gambia", CI: "Ivory Coast", CZ: "Czechia", TT: "Trinidad & Tobago", XK: "Kosovo" };

  /* ---------- Skala 1080x1920 ---------- */
  const stage = $("#stage");
  function fit() { const s = Math.min(innerWidth / 1080, innerHeight / 1920); stage.style.transform = `translate(${-540 * s}px, ${-960 * s}px) scale(${s})`; }
  addEventListener("resize", fit); fit();

  /* ---------- Util ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (n) => Math.round(n).toLocaleString(T.locale) + " m";
  const flag = (iso) => `flags/${iso.toLowerCase()}.svg`;
  const cname = (iso) => { const c = COUNTRIES[iso]; return c ? (LANG === "en" ? SHORT_EN[iso] || c.name : c.nameId) : iso; };
  const hue = (s) => { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0; return Math.abs(h) % 360; };
  const short = (s, n = 16) => { s = String(s || ""); return s.length > n ? s.slice(0, n - 1) + "…" : s; };

  /* ---------- Pencocokan nama negara ---------- */
  const norm = (s) => String(s).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^\p{L}\p{M}\p{N}+\u{1F1E6}-\u{1F1FF}\s]/gu, " ").replace(/\s+/g, " ").trim();
  const alias = new Map(), nonAscii = [];
  for (const c of Object.values(COUNTRIES)) for (const a of c.aliases) {
    if (!alias.has(a)) alias.set(a, c.iso);
    if (/[^\x00-\x7f]/.test(a) && !/[\u{1F1E6}-\u{1F1FF}]/u.test(a)) nonAscii.push([a, c.iso]);
  }
  nonAscii.sort((a, b) => b[0].length - a[0].length);
  const DEMONYM = { indonesian: "ID", malaysian: "MY", thai: "TH", filipino: "PH", filipina: "PH", vietnamese: "VN", burmese: "MM",
    cambodian: "KH", singaporean: "SG", american: "US", canadian: "CA", mexican: "MX", brazilian: "BR", argentinian: "AR",
    colombian: "CO", peruvian: "PE", british: "GB", english: "GB", french: "FR", german: "DE", italian: "IT", spanish: "ES",
    portuguese: "PT", dutch: "NL", russian: "RU", ukrainian: "UA", polish: "PL", turkish: "TR", egyptian: "EG", moroccan: "MA",
    algerian: "DZ", tunisian: "TN", saudi: "SA", emirati: "AE", iraqi: "IQ", iranian: "IR", pakistani: "PK", indian: "IN",
    bangladeshi: "BD", nepali: "NP", afghan: "AF", chinese: "CN", japanese: "JP", korean: "KR", nigerian: "NG", kenyan: "KE",
    ghanaian: "GH", ethiopian: "ET", somali: "SO", sudanese: "SD", palestinian: "PS", jordanian: "JO", syrian: "SY",
    lebanese: "LB", yemeni: "YE", kuwaiti: "KW", qatari: "QA", omani: "OM", libyan: "LY", australian: "AU", belarusian: "BY",
    kazakh: "KZ", uzbek: "UZ", zambian: "ZM", zimbabwean: "ZW", tanzanian: "TZ", ugandan: "UG", cameroonian: "CM", senegalese: "SN" };
  for (const [k, iso] of Object.entries(DEMONYM)) if (COUNTRIES[iso] && !alias.has(k)) alias.set(k, iso);
  const longA = [...alias.keys()].filter((a) => /^[a-z]{5,}$/.test(a));
  const SHORTOK = ["usa", "uae", "ksa", "drc", "rsa", "nkri", "indo", "pinas"];
  function findCountry(text, strict) {
    const m = String(text).match(/[\u{1F1E6}-\u{1F1FF}]{2}/u);
    if (m) { const iso = [...m[0]].map((ch) => String.fromCharCode(ch.codePointAt(0) - 0x1f1e6 + 65)).join(""); if (COUNTRIES[iso]) return iso; }
    const n = norm(text);
    if (!n) return null;
    if (alias.has(n)) return alias.get(n);
    if (alias.has(n.replace(/ /g, ""))) return alias.get(n.replace(/ /g, ""));
    if (strict) return null;
    const w = n.split(" ");
    for (let len = Math.min(4, w.length); len >= 1; len--) for (let i = 0; i + len <= w.length; i++) {
      const p = w.slice(i, i + len).join(" ");
      if (alias.has(p) && (/[^\x00-\x7f]/.test(p) ? p.length >= 2 : p.replace(/ /g, "").length >= 4)) return alias.get(p);
    }
    for (const word of w) if (SHORTOK.includes(word) && alias.has(word)) return alias.get(word);
    for (const [a, iso] of nonAscii) if (n.includes(a)) return iso;
    for (const word of w) {
      if (word.length < 5) continue;
      let best = null;
      for (const a of longA) if (word.startsWith(a) && word.length - a.length <= 4 && (!best || a.length > best.length)) best = a;
      if (best) return alias.get(best);
    }
    return null;
  }

  /* ---------- State (disimpan; mode demo terpisah) ---------- */
  const KEY = params.get("demo") === "1" ? "countryRaceLite.demo" : "countryRaceLite.v1";
  if (params.get("reset") === "1") {
    try { localStorage.removeItem("countryRaceLite.v1"); localStorage.removeItem("countryRaceLite.demo"); } catch (e) { /* */ }
    params.delete("reset");
    try { history.replaceState(null, "", location.pathname + (params.toString() ? "?" + params : "")); } catch (e) { /* */ }
  }
  let S = { c: {}, u: {}, pend: {}, end: 0, round: 1 };
  try { const v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v && v.c) S = Object.assign(S, v); } catch (e) { /* */ }
  let dirty = false;
  setInterval(() => {
    if (!dirty) return; dirty = false;
    try {
      const ids = Object.keys(S.u); if (ids.length > 4000) for (const id of ids.slice(0, ids.length - 4000)) delete S.u[id];
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) { /* */ }
  }, 5000);
  const C = (iso) => (S.c[iso] = S.c[iso] || { m: 0, p: 0 });
  function user(u) {
    const x = S.u[u.id] || (S.u[u.id] = { iso: null, pts: 0 });
    x.nick = short(u.nick || u.id, 18);
    return x;
  }

  /* ---------- Suara sederhana (tanpa musik, sangat ringan) ---------- */
  let ac = null;
  const soundOn = CFG.SUARA !== false;
  function tone(f, t, d, v = 0.12, type = "triangle") {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = f; g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(ac.destination); o.start(t); o.stop(t + d + 0.02);
  }
  const SFX = {
    join: (t) => { tone(523, t, 0.12); tone(784, t + 0.08, 0.18); },
    gift: (t) => [784, 988, 1175, 1568].forEach((f, i) => tone(f, t + i * 0.07, 0.35, 0.1, "sine")),
    big: (t) => [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, t + i * 0.09, 0.5, 0.12, "square")),
    hello: (t) => tone(1047, t, 0.15, 0.06, "sine"),
    win: (t) => [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, t + i * 0.16, 0.4, 0.13, "square")),
    tick: (t) => tone(1500, t, 0.05, 0.08, "square"),
  };
  let lastSfx = 0;
  function sfx(name) {
    if (!soundOn || !ac || ac.state !== "running") return;
    const now = performance.now(); if (name !== "win" && name !== "big" && now - lastSfx < 120) return; lastSfx = now;
    try { SFX[name](ac.currentTime + 0.01); } catch (e) { /* */ }
  }
  const tapBtn = $("#tap");
  tapBtn.textContent = T.tap;
  function unlock() {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state !== "running") ac.resume();
    } catch (e) { /* */ }
    tapBtn.classList.add("hidden");
    if (matchMedia("(pointer: coarse)").matches && !document.fullscreenElement && document.documentElement.requestFullscreen)
      document.documentElement.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
  }
  if (soundOn) tapBtn.classList.remove("hidden");
  addEventListener("pointerdown", unlock);

  /* ---------- Banner pesan (antrian) ---------- */
  const queue = []; let showing = false;
  function say(html, kind = "", iso = null, prio = 1) {
    if (prio <= 1 && queue.length > 4) return;              // sapaan dibuang kalau antrian penuh
    if (queue.length > 8) queue.splice(queue.findIndex((q) => q.prio <= 2), 1);
    queue.push({ html, kind, iso, prio });
    queue.sort((a, b) => b.prio - a.prio);
    if (!showing) next();
  }
  function next() {
    const q = queue.shift();
    if (!q) { showing = false; return; }
    showing = true;
    const box = $("#banner");
    const el = document.createElement("div");
    el.className = "msg in " + q.kind;
    el.innerHTML = (q.iso ? `<img src="${flag(q.iso)}" alt="">` : "") + `<span>${q.html}</span>`;
    const old = box.firstChild;
    if (old) { old.classList.add("out"); setTimeout(() => old.remove(), 350); }
    box.append(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove("in")));
    setTimeout(next, queue.length > 3 ? 1100 : 1800);
  }

  /* ---------- Papan balapan ---------- */
  const rows = {}; let leader = null, renderQ = false;
  const ROW_H = 110;
  function sorted() { return Object.entries(S.c).filter(([, c]) => c.p > 0 || c.m > 0).sort((a, b) => b[1].m - a[1].m || b[1].p - a[1].p); }
  function render() {
    renderQ = false;
    const list = sorted(), top = list.slice(0, ROWS), max = Math.max(1, top.length ? top[0][1].m : 1);
    $("#empty").innerHTML = top.length ? "" : T.empty;
    const keep = new Set();
    top.forEach(([iso, c], i) => {
      keep.add(iso);
      let r = rows[iso];
      if (!r) {
        r = rows[iso] = document.createElement("div");
        r.className = "row";
        r.innerHTML = `<div class="rk"></div><img src="${flag(iso)}" alt=""><div class="info"><div class="nm">${esc(cname(iso))}</div><div class="pl"></div></div><div class="track"><div class="bar" style="background:hsl(${hue(iso)} 75% 55%)"></div></div><div class="mt"></div>`;
        r.style.transform = `translateY(${ROWS * ROW_H}px)`; r.style.opacity = "0";
        $("#race").append(r);
        r.offsetWidth; // mulai animasi dari bawah
      }
      const y = `translateY(${i * ROW_H}px)`;
      r.style.setProperty("--y", y);
      r.style.transform = y; r.style.opacity = "1";
      r.classList.toggle("first", i === 0);
      r.querySelector(".rk").textContent = i === 0 ? "👑" : i + 1;
      r.querySelector(".pl").textContent = T.players(c.p);
      const mt = r.querySelector(".mt"), txt = fmt(c.m);
      if (mt.textContent !== txt) { mt.textContent = txt; r.classList.remove("pop"); r.offsetWidth; r.classList.add("pop"); }
      r.querySelector(".bar").style.transform = `scaleX(${Math.max(0.02, c.m / max)})`;
    });
    for (const iso of Object.keys(rows)) if (!keep.has(iso)) { const r = rows[iso]; r.style.opacity = "0"; setTimeout(() => r.remove(), 400); delete rows[iso]; }
    const newLeader = top.length && top[0][1].m > 0 ? top[0][0] : null;
    if (newLeader && leader && newLeader !== leader) say(T.leads(esc(cname(newLeader))), "gift", newLeader, 3);
    leader = newLeader;
  }
  const queueRender = () => { if (!renderQ) { renderQ = true; setTimeout(render, 400); } };

  /* ---------- Logika ---------- */
  function add(iso, m, u) { if (!iso || !(m > 0)) return; C(iso).m += m; if (u) u.pts = (u.pts || 0) + m; dirty = true; queueRender(); }
  function credit(u, m) { if (u.iso) add(u.iso, m, u); else { S.pend[u.id] = (S.pend[u.id] || 0) + m; dirty = true; } }
  function join(id, u, iso) {
    if (u.iso === iso) return;
    if (u.iso) C(u.iso).p = Math.max(0, C(u.iso).p - 1);
    const first = !u.was; u.iso = iso; u.was = true; C(iso).p++;
    if (first) add(iso, P.join, u);
    if (S.pend[id]) { add(iso, S.pend[id], u); delete S.pend[id]; }
    say(T.joined(esc(u.nick), esc(cname(iso))), "", iso, 2);
    sfx("join"); dirty = true; queueRender();
  }
  const lastAsk = {}, lastChat = {}; let lastAskAll = 0;
  const H = {
    chat(raw, d) {
      const u = user(raw), iso = findCountry(d.comment, !!u.iso);
      if (iso) { join(raw.id, u, iso); return; }
      const now = Date.now();
      if (u.iso) { if (!lastChat[raw.id] || now - lastChat[raw.id] > 2000) { lastChat[raw.id] = now; add(u.iso, P.chat, u); } return; }
      // belum punya negara: ajak bergabung (dibatasi supaya tidak spam)
      if ((!lastAsk[raw.id] || now - lastAsk[raw.id] > 20000) && now - lastAskAll > 3000) { lastAsk[raw.id] = now; lastAskAll = now; say(T.ask(esc(u.nick)), "hello", null, 1); }
    },
    member(raw) {
      const u = user(raw); if (u.iso) return;
      const now = Date.now(); if (now - lastAskAll < 2500) return; lastAskAll = now;
      say(T.hello(esc(u.nick)), "hello", null, 1); sfx("hello");
    },
    gift(raw, g) {
      if (g.giftType === 1 && !g.repeatEnd) return;
      const u = user(raw), n = Math.max(1, g.repeatCount || 1), coins = (g.diamondCount || 1) * n, m = coins * P.coin;
      credit(u, m);
      say(T.gift(esc(u.nick), esc(g.giftName), n, fmt(m)), "gift", u.iso, 4);
      sfx(coins >= (CFG.GIFT_BESAR_KOIN || 30) ? "big" : "gift");
    },
    like(raw, d) { credit(user(raw), (d.likeCount || 1) * P.like); },
    follow(raw) { const u = user(raw); credit(u, P.follow); say(T.follow(esc(u.nick)), "", u.iso, 2); },
    share(raw) { const u = user(raw); credit(u, P.share); say(T.share(esc(u.nick)), "", u.iso, 2); },
  };

  /* ---------- Normalisasi event (server bawaan / TikFinity) ---------- */
  const pick = (img) => { const a = img && (img.url || img.urlList || img.url_list); return Array.isArray(a) ? a[0] : null; };
  function normUser(d) {
    const u = d.user || d, id = u.uniqueId || d.uniqueId || u.userId || d.userId || u.nickname || d.nickname;
    return id ? { id: String(id), nick: u.nickname || d.nickname || u.uniqueId || d.uniqueId || String(id), avatar: pick(u.profilePicture) } : null;
  }
  function dispatch(ev, d) {
    if (!d) return;
    ev = String(ev || "").toLowerCase();
    if (ev === "social") { const t = String(d.displayType || d.label || "").toLowerCase(); ev = t.includes("follow") ? "follow" : t.includes("share") ? "share" : ""; }
    const u = normUser(d); if (!u) return;
    try {
      if (ev === "chat") H.chat(u, { comment: d.comment || d.content || "" });
      else if (ev === "gift") {
        const g = d.giftDetails || d.gift || {};
        H.gift(u, { giftType: d.giftType ?? g.giftType, repeatEnd: d.repeatEnd, repeatCount: d.repeatCount ?? 1,
          diamondCount: d.diamondCount ?? g.diamondCount ?? 1, giftName: d.giftName || g.giftName || "gift" });
      } else if (ev === "like") H.like(u, { likeCount: d.likeCount || d.count || 1 });
      else if (ev === "follow") H.follow(u);
      else if (ev === "share") H.share(u);
      else if (ev === "member") H.member(u);
    } catch (e) { console.error(ev, e); }
  }
  window.countryRace = { dispatch, state: () => S };

  /* ---------- Koneksi ---------- */
  const WS_URL = params.get("ws") || (location.protocol.startsWith("http") ? `ws://${location.host}/` : CFG.WS_URL);
  const st = $("#status");
  const setSt = (ok, t) => { st.textContent = (ok ? "🟢 " : "🔴 ") + t; st.style.opacity = ok ? ".35" : "1"; };
  function connect() {
    let ws; setSt(false, T.connecting);
    try { ws = new WebSocket(WS_URL); } catch (e) { setSt(false, T.noServer); setTimeout(connect, 3000); return; }
    ws.onmessage = (e) => {
      let msg; try { msg = JSON.parse(e.data); } catch (er) { return; }
      for (const x of Array.isArray(msg) ? msg : [msg]) {
        if (x.event === "status" && x.data) { const d = x.data; setSt(!!d.ok, d.code === "connected" ? T.live(d.user) : d.code === "waiting" ? T.waiting(d.user) : d.code === "lost" ? T.lost : d.text); continue; }
        dispatch(x.event || x.type, x.data || x);
      }
    };
    ws.onopen = () => setSt(false, T.waiting(""));
    ws.onclose = () => { setSt(false, T.noServer); setTimeout(connect, 3000); };
    ws.onerror = () => { try { ws.close(); } catch (er) { /* */ } };
  }

  /* ---------- Ronde ---------- */
  let inWin = false, lastLeft = -1;
  const startRound = () => { if (ROUND > 0) S.end = Date.now() + ROUND * 1000; dirty = true; };
  function endRound() {
    const list = sorted(), w = list.length && list[0][1].m > 0 ? list[0] : null;
    if (!w) { startRound(); return; }
    inWin = true;
    const [iso, c] = w, card = $("#winner");
    const tops = Object.values(S.u).filter((u) => u.iso === iso && u.pts > 0).sort((a, b) => b.pts - a.pts).slice(0, 3);
    card.querySelector("h2").textContent = T.win;
    card.querySelector("img").src = flag(iso);
    card.querySelector(".n").textContent = cname(iso);
    card.querySelector(".m").textContent = fmt(c.m);
    card.querySelector(".t").innerHTML = tops.length ? T.heroes + "<br>" + tops.map((u, i) => `${["🥇", "🥈", "🥉"][i]} ${esc(u.nick)} — ${fmt(u.pts)}`).join("<br>") : "";
    card.classList.add("show"); sfx("win");
    S.round++;
    if (CFG.RESET_SETELAH_RONDE !== false) { for (const x of Object.values(S.c)) x.m = 0; for (const u of Object.values(S.u)) u.pts = 0; S.pend = {}; render(); }
    setTimeout(() => { card.classList.remove("show"); inWin = false; startRound(); }, WIN_SEC * 1000);
  }
  setInterval(() => {
    const t = $("#timer");
    if (!(ROUND > 0)) { t.textContent = "#" + S.round; return; }
    if (inWin) return;
    let left = Math.ceil((S.end - Date.now()) / 1000);
    if (left <= 0) { left = 0; endRound(); }
    t.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
    t.classList.toggle("urgent", left <= 10);
    if (left !== lastLeft && left > 0 && left <= 5) sfx("tick");
    lastLeft = left;
  }, 500);

  /* ---------- Demo ---------- */
  if (params.get("demo") === "1") {
    const ISO = ["ID", "ID", "MY", "TH", "PH", "VN", "US", "BR", "IN", "EG", "SA", "TR", "PK", "NG", "MX"];
    const names = ["Ali", "Siti", "Budi", "Nguyen", "Somchai", "Juan", "Maria", "Ahmed", "Yuki", "Rizky", "Aisyah", "Omar"];
    const r = (a) => a[Math.floor(Math.random() * a.length)];
    const step = () => {
      const i = Math.floor(Math.random() * 40), u = { uniqueId: "d" + i, nickname: names[i % 12] + "_" + i }, x = Math.random(), s = S.u["d" + i];
      if (x < 0.1) dispatch("member", u);
      else if (!s || !s.iso || x < 0.18) dispatch("chat", { ...u, comment: Math.random() < 0.3 ? "hello!" : cname(r(ISO)) });
      else if (x < 0.5) dispatch("chat", { ...u, comment: "go go go!" });
      else if (x < 0.75) dispatch("like", { ...u, likeCount: 5 + Math.floor(Math.random() * 30) });
      else if (x < 0.92) dispatch("gift", { ...u, giftName: "Rose", diamondCount: 1, giftType: 2, repeatCount: 1 + Math.floor(Math.random() * 5) });
      else dispatch("gift", { ...u, giftName: "Doughnut", diamondCount: 30, giftType: 2, repeatCount: 1 });
      setTimeout(step, 400 + Math.random() * 600);
    };
    step();
  }

  /* ---------- Mulai ---------- */
  document.documentElement.lang = LANG;
  $("#title").innerHTML = T.title;
  $("#sub").textContent = T.sub;
  if (!(S.end > Date.now())) startRound();
  render();
  connect();
})();
