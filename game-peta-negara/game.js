/* Perang Peta Negara — game interaktif TikTok LIVE
 * Penonton mengetik nama negara di komentar untuk bergabung.
 * Like, follow, share, dan gift menambah "tinggi" (meter) negaranya.
 */
(() => {
  "use strict";
  const CFG = window.GAME_CONFIG;
  const COUNTRIES = window.COUNTRIES;
  const params = new URLSearchParams(location.search);
  // Bila game dibuka lewat server bawaan (http://localhost:21214/), otomatis pakai WebSocket server itu.
  const WS_URL = params.get("ws") || (location.protocol.startsWith("http") ? `ws://${location.host}/` : CFG.WS_URL);
  const TOUCH = matchMedia("(pointer: coarse)").matches;
  if (params.get("satelit") === "0") CFG.TILE_URL = "";
  const $ = (s) => document.querySelector(s);

  /* ---------- Bahasa ---------- */
  const LANG = (CFG.BAHASA || (CFG.BAHASA_NAMA_NEGARA === "en" ? "en" : "id")) === "id" ? "id" : "en";
  const TEXT = {
    en: {
      leads: (c) => `👑 ${c} is leading!`, players: (n) => `${n} player${n === 1 ? "" : "s"}`,
      empty: "No countries yet.<br>Type your country!", joined: (u, c) => `${u} joined ${c}!`,
      joinedFeed: (u, c) => `${u} joined <b>${c}</b>!`, thanks: (u) => `@${u} thank you! Type your country first 🌍`,
      sent: (u, g, n, m) => `${u} sent ${g} x${n} <b>+${m}</b>`, follow: (u, m) => `${u} followed ${m ? `<b>+${m}</b>` : "— type your country!"}`,
      share: (u, m) => `${u} shared the LIVE ${m ? `<b>+${m}</b>` : ""}`, bigSent: (u, g, n) => `${u} sent ${g} x${n}`, bigFor: (c) => `for ${c}`,
      board: "COUNTRIES", winTitle: "🏆 ROUND WINNER 🏆", heroes: "Country heroes:", next: "New round starting soon…", round: (n) => `Round ${n}`,
      connecting: (u) => `Connecting… (${u})`, disconnected: "Disconnected — retrying…", connected: "Connected",
      waiting: (u) => `Waiting for LIVE @${u}…`, live: (u) => `Connected to LIVE @${u}`, lost: "TikTok LIVE disconnected — retrying…",
      demoOn: "Demo mode ON", demoOff: "Demo mode OFF", musicOn: "🎵 Music on", musicOff: "🔇 Music off", sfxOn: "🔊 Sound effects on", sfxOff: "🔇 Sound effects off",
      reset: "Reset all scores?", gift: "gift", locale: "en-US",
    },
    id: {
      leads: (c) => `👑 ${c} memimpin!`, players: (n) => `${n} pemain`,
      empty: "Belum ada negara.<br>Ketik nama negaramu!", joined: (u, c) => `${u} bergabung ke ${c}!`,
      joinedFeed: (u, c) => `${u} bergabung ke <b>${c}</b>!`, thanks: (u) => `@${u} terima kasih! Ketik nama negaramu dulu 🌍`,
      sent: (u, g, n, m) => `${u} mengirim ${g} x${n} <b>+${m}</b>`, follow: (u, m) => `${u} follow ${m ? `<b>+${m}</b>` : "— ketik negaramu!"}`,
      share: (u, m) => `${u} membagikan LIVE ${m ? `<b>+${m}</b>` : ""}`, bigSent: (u, g, n) => `${u} mengirim ${g} x${n}`, bigFor: (c) => `untuk ${c}`,
      board: "NEGARA", winTitle: "🏆 PEMENANG RONDE 🏆", heroes: "Pahlawan negara:", next: "Ronde baru dimulai sebentar lagi…", round: (n) => `Ronde ${n}`,
      connecting: (u) => `Menghubungkan… (${u})`, disconnected: "Terputus — mencoba lagi…", connected: "Terhubung",
      waiting: (u) => `Menunggu LIVE @${u} dimulai…`, live: (u) => `Terhubung ke LIVE @${u}`, lost: "Terputus dari TikTok LIVE — mencoba lagi…",
      demoOn: "Mode demo AKTIF", demoOff: "Mode demo mati", musicOn: "🎵 Musik nyala", musicOff: "🔇 Musik mati", sfxOn: "🔊 Efek suara nyala", sfxOff: "🔇 Efek suara mati",
      reset: "Reset semua skor?", gift: "gift", locale: "id-ID",
    },
  };
  const T = TEXT[LANG];
  // nama pendek bahasa Inggris (nama resmi ISO terlalu panjang untuk papan peringkat)
  const SHORT_EN = {
    US: "USA", GB: "United Kingdom", RU: "Russia", KR: "South Korea", KP: "North Korea", IR: "Iran", VN: "Vietnam",
    LA: "Laos", SY: "Syria", TZ: "Tanzania", TW: "Taiwan", MD: "Moldova", MK: "North Macedonia", PS: "Palestine",
    CD: "DR Congo", CG: "Congo", CN: "China", CF: "Central African Rep.", BN: "Brunei", VA: "Vatican", FM: "Micronesia",
    BO: "Bolivia", VE: "Venezuela", AE: "UAE", DO: "Dominican Rep.", BA: "Bosnia", GM: "Gambia", FK: "Falkland Islands",
    VI: "US Virgin Islands", VG: "British Virgin Islands", TF: "French Southern Lands", IO: "British Indian Ocean",
    GS: "South Georgia", HM: "Heard Island", MF: "Saint Martin", SX: "Sint Maarten", CI: "Ivory Coast", CZ: "Czechia",
    TT: "Trinidad & Tobago", ST: "São Tomé & Príncipe", VC: "St Vincent", KN: "St Kitts & Nevis", AG: "Antigua & Barbuda",
    TC: "Turks & Caicos", PM: "St Pierre & Miquelon", MP: "N. Mariana Islands", XK: "Kosovo",
  };
  const stage = $("#stage");

  /* ---------- Skala panggung 1080x1920 ---------- */
  function fit() {
    const s = Math.min(innerWidth / 1080, innerHeight / 1920);
    stage.style.transform = `translate(${-540 * s}px, ${-960 * s}px) scale(${s})`;
  }
  addEventListener("resize", fit);
  fit();

  /* ---------- Util ---------- */
  const fmt = (n) => Math.round(n).toLocaleString(T.locale) + " m";
  const flagUrl = (iso) => `flags/${iso.toLowerCase()}.svg`;
  const cname = (iso) => {
    const c = COUNTRIES[iso];
    return c ? (LANG === "en" ? SHORT_EN[iso] || c.name : c.nameId) : iso;
  };
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const hash = (s) => { let h = 0; for (const ch of String(s)) h = (h * 31 + ch.codePointAt(0)) | 0; return Math.abs(h); };
  const colorOf = (s) => `hsl(${hash(s) % 360} 70% 45%)`;
  function norm(s) {
    return String(s).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
      .replace(/[^\p{L}\p{M}\p{N}+\u{1F1E6}-\u{1F1FF}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }
  function avatarHtml(user, cls) {
    const letter = esc((user.nick || user.id || "?").trim().charAt(0).toUpperCase());
    const bg = user.avatar ? `background-image:url('${esc(user.avatar)}');` : "";
    return `<div class="${cls}" style="background-color:${colorOf(user.id)};${bg}">${user.avatar ? "" : letter}</div>`;
  }

  /* ---------- Pencocokan nama negara ---------- */
  const aliasMap = new Map();
  const nonAscii = [];
  for (const c of Object.values(COUNTRIES)) {
    for (const a of c.aliases) {
      if (!aliasMap.has(a)) aliasMap.set(a, c.iso);
      if (/[^\x00-\x7f]/.test(a) && !/[\u{1F1E6}-\u{1F1FF}]/u.test(a)) nonAscii.push([a, c.iso]);
    }
  }
  nonAscii.sort((a, b) => b[0].length - a[0].length);
  // Kata sebutan bangsa (demonym) yang sering diketik penonton: "Indonesian", "Filipino", dll.
  const DEMONYM = {
    indonesian: "ID", malaysian: "MY", thai: "TH", filipino: "PH", filipina: "PH", vietnamese: "VN", burmese: "MM",
    cambodian: "KH", laotian: "LA", singaporean: "SG", bruneian: "BN", american: "US", canadian: "CA", mexican: "MX",
    brazilian: "BR", argentinian: "AR", argentine: "AR", colombian: "CO", peruvian: "PE", chilean: "CL", venezuelan: "VE",
    british: "GB", english: "GB", french: "FR", german: "DE", italian: "IT", spanish: "ES", portuguese: "PT", dutch: "NL",
    russian: "RU", ukrainian: "UA", polish: "PL", turkish: "TR", egyptian: "EG", moroccan: "MA", algerian: "DZ",
    tunisian: "TN", saudi: "SA", emirati: "AE", iraqi: "IQ", iranian: "IR", pakistani: "PK", indian: "IN",
    bangladeshi: "BD", nepali: "NP", srilankan: "LK", afghan: "AF", chinese: "CN", japanese: "JP", korean: "KR",
    nigerian: "NG", kenyan: "KE", ghanaian: "GH", ethiopian: "ET", somali: "SO", sudanese: "SD", palestinian: "PS",
    jordanian: "JO", syrian: "SY", lebanese: "LB", yemeni: "YE", kuwaiti: "KW", qatari: "QA", omani: "OM", libyan: "LY",
    australian: "AU", kiwi: "NZ", belarusian: "BY", kazakh: "KZ", uzbek: "UZ", azerbaijani: "AZ", georgian: "GE",
    zambian: "ZM", zimbabwean: "ZW", tanzanian: "TZ", ugandan: "UG", cameroonian: "CM", senegalese: "SN", malian: "ML",
  };
  for (const [k, iso] of Object.entries(DEMONYM)) if (COUNTRIES[iso] && !aliasMap.has(k)) aliasMap.set(k, iso);
  const longAliases = [...aliasMap.keys()].filter((a) => /^[a-z]{5,}$/.test(a));
  const okLen = (p) => (/[^\x00-\x7f]/.test(p) ? p.length >= 2 : p.replace(/ /g, "").length >= 4);

  function flagEmojiIso(text) {
    const m = String(text).match(/[\u{1F1E6}-\u{1F1FF}]{2}/u);
    if (!m) return null;
    const iso = [...m[0]].map((ch) => String.fromCharCode(ch.codePointAt(0) - 0x1f1e6 + 65)).join("");
    return COUNTRIES[iso] ? iso : null;
  }
  /** strict=true: komentar harus (hampir) hanya nama negara — dipakai untuk pindah negara */
  function findCountry(text, strict) {
    const fe = flagEmojiIso(text);
    if (fe) return fe;
    const n = norm(text);
    if (!n) return null;
    if (aliasMap.has(n)) return aliasMap.get(n);
    if (aliasMap.has(n.replace(/ /g, ""))) return aliasMap.get(n.replace(/ /g, ""));
    if (strict) return null;
    const w = n.split(" ");
    for (let len = Math.min(5, w.length); len >= 1; len--) {
      for (let i = 0; i + len <= w.length; i++) {
        const p = w.slice(i, i + len).join(" ");
        if (aliasMap.has(p) && okLen(p)) return aliasMap.get(p);
      }
    }
    for (const [a, iso] of nonAscii) if (a.length >= 2 && n.includes(a)) return iso;
    for (const word of w) if (["usa", "uae", "ksa", "drc", "rsa", "nkri", "indo", "pinas"].includes(word) && aliasMap.has(word)) return aliasMap.get(word);
    // awalan: "indonesiaaa", "malaysiaa", "philippines!!" → cocok bila kata diawali nama negara (≥5 huruf)
    for (const word of w) {
      if (word.length < 5) continue;
      let best = null;
      for (const a of longAliases) if (word.startsWith(a) && word.length - a.length <= 4 && (!best || a.length > best.length)) best = a;
      if (best) return aliasMap.get(best);
    }
    return null;
  }

  /* ---------- Peta ---------- */
  const map = L.map("map", {
    zoomControl: false, attributionControl: !!CFG.TILE_URL, zoomSnap: 0.1,
    minZoom: 1.6, maxZoom: CFG.ZOOM_MAKS, keyboard: false, scrollWheelZoom: false,
    doubleClickZoom: false, boxZoom: false, inertia: false,
    maxBounds: [[-80, -220], [84, 220]], worldCopyJump: false,
    renderer: L.svg({ padding: 1.2 }),
  });
  if (CFG.TILE_URL) {
    L.tileLayer(CFG.TILE_URL, { attribution: CFG.TILE_ATRIBUSI, maxZoom: CFG.ZOOM_MAKS, keepBuffer: 4 }).addTo(map);
  }
  const satellite = !!CFG.TILE_URL;
  const WORLD_VIEW = L.latLngBounds([[-50, -150], [72, 165]]);
  const PAD = { paddingTopLeft: [60, 440], paddingBottomRight: [480, 600] };
  map.fitBounds(WORLD_VIEW, { padding: [0, 0] });

  const geo = topojson.feature(window.WORLD_TOPO, window.WORLD_TOPO.objects.countries);
  const shapes = {}; // iso -> {layers:[], ring, bbox, center, bounds}

  function ringArea(r) {
    let a = 0;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
    return Math.abs(a / 2);
  }
  function inRing(x, y, r) {
    let inside = false;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const [xi, yi] = r[i], [xj, yj] = r[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  function centroid(r) {
    let x = 0, y = 0, a = 0;
    for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
      const f = r[j][0] * r[i][1] - r[i][0] * r[j][1];
      x += (r[j][0] + r[i][0]) * f; y += (r[j][1] + r[i][1]) * f; a += f * 3;
    }
    return a ? [x / a, y / a] : r[0];
  }

  const baseStyle = () => satellite
    ? { color: "#ffffff", weight: 1, opacity: 0.35, fillColor: "#000", fillOpacity: 0 }
    : { color: "#9ec9a5", weight: 1, opacity: 0.5, fillColor: "#2f4a35", fillOpacity: 0.95 };

  const countryLayer = L.geoJSON(geo, {
    style: baseStyle,
    interactive: false,
    onEachFeature(f, layer) {
      const iso = f.properties.iso;
      const sh = (shapes[iso] = shapes[iso] || { layers: [], best: null, bestA: -1 });
      sh.layers.push(layer);
      const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
      for (const p of polys) {
        const a = ringArea(p[0]) * Math.cos(((p[0][0][1] || 0) * Math.PI) / 180);
        if (a > sh.bestA) { sh.bestA = a; sh.best = p[0]; }
      }
    },
  }).addTo(map);

  for (const sh of Object.values(shapes)) {
    const r = sh.best;
    let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    for (const [x, y] of r) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
    sh.bbox = [minX, minY, maxX, maxY];
    let c = centroid(r);
    if (!inRing(c[0], c[1], r)) {
      let best = null, bd = 1e18;
      for (let i = 1; i < 20; i++) for (let j = 1; j < 20; j++) {
        const x = minX + ((maxX - minX) * i) / 20, y = minY + ((maxY - minY) * j) / 20;
        if (inRing(x, y, r)) { const d = (x - c[0]) ** 2 + (y - c[1]) ** 2; if (d < bd) { bd = d; best = [x, y]; } }
      }
      if (best) c = best;
    }
    sh.center = L.latLng(c[1], c[0]);
    // negara kecil: perluas sedikit agar kamera tidak terlalu dekat
    const padDeg = Math.max(0, 3 - Math.max(maxX - minX, maxY - minY)) / 2;
    sh.bounds = L.latLngBounds([minY - padDeg, minX - padDeg], [maxY + padDeg, maxX + padDeg]);
  }
  function randomPointIn(iso) {
    const sh = shapes[iso];
    const [minX, minY, maxX, maxY] = sh.bbox;
    for (let t = 0; t < 80; t++) {
      const x = minX + Math.random() * (maxX - minX), y = minY + Math.random() * (maxY - minY);
      if (inRing(x, y, sh.best)) return L.latLng(y, x);
    }
    return sh.center;
  }

  /* ---------- State ---------- */
  // Mode demo memakai simpanan terpisah, jadi pemain palsu tidak pernah tercampur ke LIVE sungguhan.
  const SAVE_KEY = params.get("demo") === "1" ? "petaNegara.demo" : "petaNegara.v1";
  // ?reset=1 → hapus semua skor & pemain (berguna di HP yang tidak punya keyboard)
  if (params.get("reset") === "1") {
    try { localStorage.removeItem("petaNegara.v1"); localStorage.removeItem("petaNegara.demo"); } catch (e) { /* */ }
    params.delete("reset");
    try { history.replaceState(null, "", location.pathname + (params.toString() ? "?" + params : "")); } catch (e) { /* */ }
  }
  let S = { countries: {}, users: {}, pending: {}, roundEnd: 0, round: 1 };
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
    if (saved && saved.countries) S = Object.assign(S, saved);
  } catch (e) { /* abaikan */ }
  let dirty = false;
  setInterval(() => {
    if (!dirty) return;
    dirty = false;
    try {
      const ids = Object.keys(S.users);
      if (ids.length > 6000) for (const id of ids.slice(0, ids.length - 6000)) delete S.users[id];
      localStorage.setItem(SAVE_KEY, JSON.stringify(S));
    } catch (e) { /* abaikan */ }
  }, 3000);

  const C = (iso) => (S.countries[iso] = S.countries[iso] || { meters: 0, players: 0 });
  function upsertUser(u) {
    const old = S.users[u.id] || { id: u.id, iso: null, contrib: 0 };
    old.nick = u.nick || old.nick || u.id;
    if (u.avatar) old.avatar = u.avatar;
    S.users[u.id] = old;
    return old;
  }

  /* ---------- Gambar label & avatar ---------- */
  const labels = {}; // iso -> marker
  const pins = {};   // iso -> [{uid, marker}]
  let leaderIso = null;

  function refreshCountryStyle(iso) {
    const sh = shapes[iso];
    if (!sh) return;
    const active = (S.countries[iso]?.players || 0) > 0 || (S.countries[iso]?.meters || 0) > 0;
    const col = iso === leaderIso ? "#ffd54a" : colorOf(iso);
    for (const l of sh.layers) {
      l.setStyle(active
        ? { color: iso === leaderIso ? "#ffd54a" : "#ffffff", weight: iso === leaderIso ? 3 : 2, opacity: 0.95, fillColor: col, fillOpacity: satellite ? 0.28 : 0.85 }
        : baseStyle());
      const el = l.getElement && l.getElement();
      if (el) {
        el.classList.toggle("country-active", active);
        el.classList.toggle("country-lead", iso === leaderIso);
      }
    }
  }
  function hot(iso) {
    const sh = shapes[iso];
    if (!sh) return;
    for (const l of sh.layers) {
      const el = l.getElement && l.getElement();
      if (!el) continue;
      el.classList.add("country-hot");
      clearTimeout(el._hotT);
      el._hotT = setTimeout(() => el.classList.remove("country-hot"), 2500);
    }
  }
  function labelHtml(iso) {
    const c = S.countries[iso] || { meters: 0, players: 0 };
    return `${iso === leaderIso ? '<div class="crown">👑</div>' : ""}<div class="box"><img src="${flagUrl(iso)}" alt=""><div>${esc(cname(iso))}<small>${fmt(c.meters)}</small></div></div>`;
  }
  function updateLabel(iso) {
    if (!shapes[iso]) return;
    const c = S.countries[iso];
    if (!c || (c.players <= 0 && c.meters <= 0)) {
      if (labels[iso]) { map.removeLayer(labels[iso]); delete labels[iso]; }
      return;
    }
    if (!labels[iso]) {
      labels[iso] = L.marker(shapes[iso].center, {
        icon: L.divIcon({ className: "clabel", html: labelHtml(iso), iconSize: [0, 0] }),
        interactive: false, zIndexOffset: 1000,
      }).addTo(map);
    } else {
      const el = labels[iso].getElement();
      if (el) { el.innerHTML = labelHtml(iso); el.classList.toggle("lead", iso === leaderIso); }
    }
    if (iso === leaderIso) labels[iso].setZIndexOffset(2000); else labels[iso].setZIndexOffset(1000);
  }
  function addPin(user, isNew) {
    const iso = user.iso;
    if (!shapes[iso]) return;
    removePin(user.id);
    const m = L.marker(randomPointIn(iso), {
      icon: L.divIcon({ className: "pin" + (isNew ? " new" : ""), html: avatarHtml(user, "av"), iconSize: [0, 0] }),
      interactive: false,
    }).addTo(map);
    const list = (pins[iso] = pins[iso] || []);
    list.push({ uid: user.id, marker: m });
    while (list.length > CFG.AVATAR_PER_NEGARA) map.removeLayer(list.shift().marker);
    if (isNew) setTimeout(() => { const el = m.getElement(); if (el) el.classList.remove("new"); }, 4000);
  }
  function removePin(uid) {
    for (const list of Object.values(pins)) {
      const i = list.findIndex((p) => p.uid === uid);
      if (i >= 0) { map.removeLayer(list[i].marker); list.splice(i, 1); }
    }
  }

  /* ---------- Papan peringkat ---------- */
  const prevMeters = {};
  let boardQueued = false;
  function sorted() {
    return Object.entries(S.countries).filter(([, c]) => c.meters > 0 || c.players > 0)
      .sort((a, b) => b[1].meters - a[1].meters || b[1].players - a[1].players);
  }
  function renderBoard() {
    boardQueued = false;
    const list = sorted();
    const newLeader = list.length && list[0][1].meters > 0 ? list[0][0] : null;
    if (newLeader !== leaderIso) {
      const old = leaderIso;
      leaderIso = newLeader;
      if (old) { refreshCountryStyle(old); updateLabel(old); }
      if (newLeader) {
        refreshCountryStyle(newLeader); updateLabel(newLeader);
        if (old) { toast(T.leads(esc(cname(newLeader))), newLeader); SFX("pemimpin"); }
      }
    }
    const top = list.slice(0, 10);
    $("#boardList").innerHTML = top.length
      ? top.map(([iso, c], i) => {
          const flash = prevMeters[iso] !== undefined && prevMeters[iso] !== c.meters ? " flash" : "";
          return `<li class="${flash}"><span class="rk">${i === 0 ? "👑" : i + 1}</span><img src="${flagUrl(iso)}" alt=""><span class="nm">${esc(cname(iso))}<small>${T.players(c.players)}</small></span><span class="mt">${fmt(c.meters)}</span></li>`;
        }).join("")
      : `<span class="empty">${T.empty}</span>`;
    for (const [iso, c] of list) prevMeters[iso] = c.meters;
    setTimeout(() => document.querySelectorAll("#boardList li.flash").forEach((li) => li.classList.remove("flash")), 600);
    const total = list.reduce((s, [, c]) => s + c.players, 0);
    $("#totalPlayers").textContent = T.players(total);
  }
  const queueBoard = () => { if (!boardQueued) { boardQueued = true; setTimeout(renderBoard, 250); } };

  /* ---------- Feed, toast, gift besar ---------- */
  function feed(user, html, iso) {
    const el = document.createElement("div");
    el.className = "feed-item";
    el.innerHTML = `${avatarHtml(user, "av")}<span class="tx">${html}</span>${iso ? `<img class="fl" src="${flagUrl(iso)}" alt="">` : ""}`;
    const box = $("#feed");
    box.prepend(el);
    while (box.children.length > 6) box.lastChild.remove();
    setTimeout(() => el.remove(), 15000);
  }
  function toast(html, iso) {
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `${iso ? `<img src="${flagUrl(iso)}" alt="">` : ""}<span>${html}</span>`;
    const box = $("#toasts");
    box.append(el);
    while (box.children.length > 3) box.firstChild.remove();
    setTimeout(() => el.remove(), 3500);
  }
  let bigT;
  function bigGift(user, giftName, count, meters, iso) {
    const el = $("#bigGift");
    el.innerHTML = `${avatarHtml(user, "gav")}<div class="gtx">${T.bigSent(esc(user.nick), esc(giftName), count)}</div><div class="gpl">+${fmt(meters)} ${iso ? T.bigFor(esc(cname(iso))) : ""}</div>`;
    el.classList.remove("hidden", "show"); void el.offsetWidth; el.classList.add("show");
    clearTimeout(bigT);
    bigT = setTimeout(() => el.classList.add("hidden"), 4000);
  }

  /* ---------- Suara (lihat audio.js) ---------- */
  const SFX = (name, arg) => { try { window.GameAudio && window.GameAudio.play(name, arg); } catch (e) { /* */ } };

  /* ---------- Kamera ---------- */
  let camQueue = [], lastMove = 0, tourIdx = 0;
  function requestCam(iso, prio) {
    if (!shapes[iso]) return;
    camQueue = camQueue.filter((q) => q.iso !== iso);
    camQueue.push({ iso, prio, t: Date.now() });
    if (camQueue.length > 20) camQueue.shift();
  }
  function flyTo(iso) {
    map.flyToBounds(shapes[iso].bounds, { ...PAD, maxZoom: CFG.ZOOM_MAKS, duration: 1.6 });
    hot(iso);
    lastMove = Date.now();
  }
  setInterval(() => {
    const now = Date.now();
    if (now - lastMove < CFG.JEDA_KAMERA_DETIK * 1000) return;
    camQueue = camQueue.filter((q) => now - q.t < 15000);
    if (camQueue.length) {
      camQueue.sort((a, b) => b.prio - a.prio || b.t - a.t);
      flyTo(camQueue.shift().iso);
      return;
    }
    if (now - lastMove > 9000) {
      const list = sorted().slice(0, 5);
      if (list.length && tourIdx % (list.length + 1) !== list.length) flyTo(list[tourIdx % (list.length + 1)][0]);
      else { map.flyToBounds(WORLD_VIEW, { duration: 2 }); lastMove = now; }
      tourIdx++;
    }
  }, 250);

  /* ---------- Logika game ---------- */
  function addMeters(iso, m, user) {
    if (!iso || !(m > 0)) return;
    C(iso).meters += m;
    if (user) user.contrib = (user.contrib || 0) + m;
    dirty = true;
    updateLabel(iso);
    queueBoard();
  }
  function credit(user, m, why) {
    if (user.iso) { addMeters(user.iso, m, user); return true; }
    if (CFG.GIFT_SEBELUM_GABUNG_DISIMPAN) { S.pending[user.id] = (S.pending[user.id] || 0) + m; dirty = true; }
    return false;
  }
  function join(user, iso) {
    const first = !user.everJoined;
    if (user.iso === iso) return;
    if (user.iso) { C(user.iso).players = Math.max(0, C(user.iso).players - 1); refreshCountryStyle(user.iso); updateLabel(user.iso); }
    user.iso = iso;
    user.everJoined = true;
    C(iso).players++;
    dirty = true;
    refreshCountryStyle(iso);
    if (first) addMeters(iso, CFG.METER_GABUNG, user);
    const pend = S.pending[user.id];
    if (pend) { delete S.pending[user.id]; addMeters(iso, pend, user); }
    updateLabel(iso);
    addPin(user, true);
    feed(user, T.joinedFeed(esc(user.nick), esc(cname(iso))), iso);
    toast(T.joined(esc(user.nick), esc(cname(iso))), iso);
    requestCam(iso, 1);
    SFX("gabung");
    queueBoard();
  }

  const handlers = {
    chat(u, d) {
      const user = upsertUser(u);
      const iso = findCountry(d.comment, !!user.iso);
      if (iso && (!user.iso || CFG.BOLEH_PINDAH_NEGARA)) join(user, iso);
    },
    gift(u, d) {
      if (d.giftType === 1 && !d.repeatEnd) return; // streak masih berjalan
      const user = upsertUser(u);
      const count = Math.max(1, d.repeatCount || 1);
      const coins = (d.diamondCount || 1) * count;
      const m = coins * CFG.METER_PER_KOIN;
      const ok = credit(user, m, "gift");
      if (window.GameAudio) window.GameAudio.gift(coins, count);
      if (ok) {
        feed(user, T.sent(esc(user.nick), esc(d.giftName || T.gift), count, fmt(m)), user.iso);
        hot(user.iso);
        requestCam(user.iso, 2);
        if (coins >= CFG.GIFT_BESAR_KOIN) bigGift(user, d.giftName || "gift", count, m, user.iso);
      } else {
        toast(T.thanks(esc(user.nick)));
      }
    },
    like(u, d) {
      const user = upsertUser(u);
      credit(user, (d.likeCount || 1) * CFG.METER_PER_LIKE, "like");
      if (CFG.SUARA_LIKE) SFX("like");
    },
    follow(u) {
      const user = upsertUser(u);
      const ok = credit(user, CFG.METER_FOLLOW, "follow");
      SFX("follow");
      feed(user, T.follow(esc(user.nick), ok ? fmt(CFG.METER_FOLLOW) : ""), user.iso);
    },
    share(u) {
      const user = upsertUser(u);
      const ok = credit(user, CFG.METER_SHARE, "share");
      SFX("share");
      feed(user, T.share(esc(user.nick), ok ? fmt(CFG.METER_SHARE) : ""), user.iso);
    },
  };

  /* ---------- Normalisasi data event (TikFinity / tiktok-live-connector v1 & v2) ---------- */
  function pickUrl(img) {
    if (!img) return null;
    if (typeof img === "string") return img;
    const arr = img.url || img.urlList || img.url_list || img.urls;
    return Array.isArray(arr) ? arr.find((x) => typeof x === "string") || null : null;
  }
  function normUser(d) {
    const u = d.user || d;
    const id = u.uniqueId || d.uniqueId || u.userId || d.userId || u.nickname || d.nickname;
    if (!id) return null;
    return {
      id: String(id),
      nick: u.nickname || d.nickname || u.uniqueId || d.uniqueId || String(id),
      avatar: d.profilePictureUrl || u.profilePictureUrl || pickUrl(u.profilePicture) || pickUrl(u.avatarThumb) || pickUrl(u.avatarMedium) || null,
    };
  }
  function normGift(d) {
    const g = d.giftDetails || d.gift || {};
    return {
      giftType: d.giftType ?? g.giftType,
      repeatEnd: d.repeatEnd ?? d.repeat_end,
      repeatCount: d.repeatCount ?? d.repeat_count ?? 1,
      diamondCount: d.diamondCount ?? g.diamondCount ?? g.diamond_count ?? d.extendedGiftInfo?.diamond_count ?? 1,
      giftName: d.giftName || g.giftName || g.name || d.extendedGiftInfo?.name || "gift",
    };
  }
  function dispatch(event, data) {
    if (!data) return;
    let ev = String(event || "").toLowerCase();
    if (ev === "social") {
      const t = String(data.displayType || data.label || "").toLowerCase();
      ev = t.includes("follow") ? "follow" : t.includes("share") ? "share" : "";
    }
    const u = normUser(data);
    if (!u) return;
    try {
      if (ev === "chat") handlers.chat(u, { comment: data.comment || data.content || "" });
      else if (ev === "gift") handlers.gift(u, normGift(data));
      else if (ev === "like") handlers.like(u, { likeCount: data.likeCount || data.count || 1 });
      else if (ev === "follow") handlers.follow(u);
      else if (ev === "share") handlers.share(u);
    } catch (e) { console.error("event error", ev, e); }
  }
  window.petaNegara = { dispatch, state: () => S }; // untuk tes / integrasi lain

  /* ---------- WebSocket ---------- */
  const statusEl = $("#status");
  let connected = false;
  function setStatus(ok, txt) {
    connected = ok;
    statusEl.textContent = (ok ? "🟢 " : "🔴 ") + txt;
    statusEl.style.opacity = ok ? "0.35" : "1";
  }
  function connect() {
    let ws;
    try { ws = new WebSocket(WS_URL); } catch (e) { setStatus(false, "URL WebSocket salah: " + WS_URL); return; }
    setStatus(false, T.connecting(WS_URL));
    ws.onopen = () => { setStatus(true, T.connected); if (!demoOn) $("#help").classList.add("hidden"); };
    ws.onmessage = (m) => {
      let msg;
      try { msg = JSON.parse(m.data); } catch (e) { return; }
      const list = Array.isArray(msg) ? msg : [msg];
      for (const x of list) {
        if (x.event === "status" && x.data) {
          const d = x.data, u = d.user || "";
          setStatus(!!d.ok, d.code === "connected" ? T.live(u) : d.code === "waiting" ? T.waiting(u) : d.code === "lost" ? T.lost : d.text);
          continue;
        }
        dispatch(x.event || x.type || x.eventName, x.data || x.payload || x);
      }
    };
    ws.onclose = () => { setStatus(false, T.disconnected); setTimeout(connect, 3000); };
    ws.onerror = () => { try { ws.close(); } catch (e) { /* */ } };
  }

  /* ---------- Ronde ---------- */
  let inWinner = false, lastLeft = -1;
  function startRound() {
    if (CFG.DURASI_RONDE_DETIK > 0) S.roundEnd = Date.now() + CFG.DURASI_RONDE_DETIK * 1000;
    dirty = true;
  }
  function resetScores() {
    for (const c of Object.values(S.countries)) c.meters = 0;
    for (const u of Object.values(S.users)) u.contrib = 0;
    S.pending = {};
    for (const k of Object.keys(prevMeters)) delete prevMeters[k];
    for (const iso of Object.keys(S.countries)) { refreshCountryStyle(iso); updateLabel(iso); }
    dirty = true;
    renderBoard();
  }
  function endRound() {
    const list = sorted();
    const win = list.length && list[0][1].meters > 0 ? list[0] : null;
    if (!win) { startRound(); return; }
    inWinner = true;
    const [iso, c] = win;
    const tops = Object.values(S.users).filter((u) => u.iso === iso && u.contrib > 0)
      .sort((a, b) => b.contrib - a.contrib).slice(0, 3);
    const w = $("#winner");
    w.querySelector(".win-flag").src = flagUrl(iso);
    w.querySelector(".win-name").textContent = cname(iso);
    w.querySelector(".win-meter").textContent = fmt(c.meters);
    w.querySelector(".win-top").innerHTML = tops.length
      ? T.heroes + "<br>" + tops.map((u, i) => `${["🥇", "🥈", "🥉"][i]} ${esc(u.nick)} — ${fmt(u.contrib)}`).join("<br>")
      : "";
    w.classList.remove("hidden");
    flyTo(iso);
    SFX("menang");
    // reset sekarang, supaya gift yang masuk selama layar pemenang tampil dihitung untuk ronde berikutnya
    S.round++;
    if (CFG.RESET_SETELAH_RONDE) resetScores();
    setTimeout(() => {
      w.classList.add("hidden");
      inWinner = false;
      startRound();
    }, CFG.LAMA_LAYAR_PEMENANG * 1000);
  }
  setInterval(() => {
    const t = $("#timer");
    if (!(CFG.DURASI_RONDE_DETIK > 0)) { t.textContent = T.round(S.round); return; }
    if (inWinner) { t.textContent = "00:00"; return; }
    let left = Math.ceil((S.roundEnd - Date.now()) / 1000);
    if (left <= 0) { endRound(); left = 0; }
    t.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
    t.classList.toggle("urgent", left <= 10);
    if (left !== lastLeft) {
      if (left > 0 && left <= 10) SFX(left <= 3 ? "tikAkhir" : "tik");
      if (left === 30 && window.GameAudio) window.GameAudio.boost(0.6); // musik makin ramai menjelang akhir
      lastLeft = left;
    }
  }, 250);

  /* ---------- Mode demo / tes ---------- */
  let demoOn = false, demoT = null;
  const DEMO_ISO = ["ID", "ID", "ID", "MY", "MY", "TH", "TH", "VN", "PH", "PH", "MM", "US", "BR", "MX", "IN", "TR", "EG", "SA", "JP", "KR", "NG", "BD", "PK", "RU", "BY", "ZM"];
  const DEMO_GIFTS = [["Rose", 1, 1], ["Rose", 1, 1], ["Finger Heart", 5, 1], ["TikTok", 1, 1], ["Doughnut", 30, 1], ["Hand Hearts", 100, 1], ["Galaxy", 1000, 2], ["Lion", 29999, 2]];
  const demoUsers = Array.from({ length: 60 }, (_, i) => ({ uniqueId: "demo" + i, nickname: ["Ali", "Siti", "Budi", "Nguyen", "Somchai", "Juan", "Maria", "Ahmed", "Yuki", "Min-ji", "Rizky", "Aisyah"][i % 12] + "_" + i }));
  const rnd = (a) => a[Math.floor(Math.random() * a.length)];
  function demoStep() {
    const u = rnd(demoUsers), r = Math.random();
    const st = S.users[u.uniqueId];
    if (!st || !st.iso || r < 0.12) {
      const iso = rnd(DEMO_ISO);
      const c = COUNTRIES[iso];
      dispatch("chat", { ...u, comment: Math.random() < 0.5 ? c.nameId : rnd(c.aliases.filter((a) => /^[a-z ]+$/.test(a)).concat([c.nameId])) });
    } else if (r < 0.55) {
      let g = rnd(DEMO_GIFTS);
      if (g[1] >= 1000 && Math.random() < 0.85) g = DEMO_GIFTS[0];
      dispatch("gift", { ...u, giftName: g[0], diamondCount: g[1], giftType: g[2], repeatCount: 1 + Math.floor(Math.random() * (g[1] <= 5 ? 10 : 2)), repeatEnd: true });
    } else if (r < 0.85) dispatch("like", { ...u, likeCount: 5 + Math.floor(Math.random() * 40) });
    else if (r < 0.93) dispatch("social", { ...u, displayType: "pm_main_follow_message_viewer_2" });
    else dispatch("share", u);
    demoT = setTimeout(demoStep, 350 + Math.random() * 700);
  }
  function toggleDemo() {
    demoOn = !demoOn;
    clearTimeout(demoT);
    if (demoOn) demoStep();
    toast(demoOn ? T.demoOn : T.demoOff);
  }
  addEventListener("keydown", (e) => {
    const k = e.key.toLowerCase();
    const tu = { uniqueId: "tester", nickname: "Tester" };
    if (k === "d") toggleDemo();
    else if (k === "h") $("#help").classList.toggle("hidden");
    else if (k === "m" && window.GameAudio) toast(window.GameAudio.toggleMusic() ? T.musicOn : T.musicOff);
    else if (k === "s" && window.GameAudio) toast(window.GameAudio.toggleSfx() ? T.sfxOn : T.sfxOff);
    else if (k === "j") dispatch("chat", { ...tu, comment: rnd(DEMO_ISO) === "ID" ? "Indonesia" : COUNTRIES[rnd(DEMO_ISO)].name });
    else if (k === "g") dispatch("gift", { ...tu, giftName: "Doughnut", diamondCount: 30, giftType: 2, repeatCount: 1, repeatEnd: true });
    else if (k === "l") dispatch("like", { ...tu, likeCount: 50 });
    else if (k === "r" && confirm(T.reset)) { S = { countries: {}, users: {}, pending: {}, roundEnd: 0, round: 1 }; Object.keys(labels).forEach((i) => { map.removeLayer(labels[i]); delete labels[i]; }); Object.values(pins).forEach((l) => l.forEach((p) => map.removeLayer(p.marker))); Object.keys(pins).forEach((k2) => delete pins[k2]); for (const iso of Object.keys(shapes)) refreshCountryStyle(iso); leaderIso = null; startRound(); renderBoard(); dirty = true; }
    else if (k === "n" && CFG.DURASI_RONDE_DETIK > 0) S.roundEnd = Date.now();
  });

  /* ---------- Mulai ---------- */
  document.documentElement.lang = LANG;
  $(".board-head span").textContent = T.board;
  $(".win-title").textContent = T.winTitle;
  $(".win-next").textContent = T.next;
  $("#judul").innerHTML = `${esc(CFG.JUDUL)}<small>${esc(CFG.SUBJUDUL)}</small>`;
  $("#legend").innerHTML = CFG.KETERANGAN.map((k) => `<div><span class="i">${k.ikon}</span>${esc(k.teks)}</div>`).join("");
  // pulihkan tampilan dari data tersimpan
  for (const iso of Object.keys(S.countries)) { refreshCountryStyle(iso); updateLabel(iso); }
  for (const u of Object.values(S.users)) if (u.iso && shapes[u.iso]) { const n = (pins[u.iso] || []).length; if (n < CFG.AVATAR_PER_NEGARA) addPin(u, false); }
  if (!(S.roundEnd > Date.now())) startRound();
  renderBoard();
  if (params.get("demo") === "1") toggleDemo();
  else if (!TOUCH) $("#help").classList.remove("hidden");
  // HP: ketuk layar sekali untuk layar penuh (sekaligus menyalakan suara)
  addEventListener("pointerdown", () => {
    const el = document.documentElement;
    if (TOUCH && !document.fullscreenElement && el.requestFullscreen) el.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
  });
  connect();
})();
