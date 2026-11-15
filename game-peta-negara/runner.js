/* Lari Unta — animasi "endless runner" orisinal bernuansa Islami untuk Game Islami.
 * Unta berlari melintasi gurun malam (masjid, menara, pohon kurma, lentera) dan
 * mengumpulkan kurma emas: setiap jawaban/zikir penonton = 1 kurma bertuliskan namanya.
 * Ringan: canvas kecil (720×270, diperbesar CSS), ±30 fps, latar digambar sekali ke kanvas cadangan.
 * API: Runner.spawn(nama, jenis), Runner.celebrate(), Runner.setLabel(teks)
 */
(() => {
  "use strict";
  const W = 720, H = 270, GROUND = 222;
  const cv = document.getElementById("run");
  if (!cv) return;
  // ?lari=0 → matikan animasi unta (untuk HP yang sangat lemah)
  if (new URLSearchParams(location.search).get("lari") === "0" || (window.GAME_CONFIG || {}).ANIMASI_UNTA === false) { cv.style.display = "none"; return; }
  cv.width = W; cv.height = H;
  const g = cv.getContext("2d");
  const rnd = (a, b) => a + Math.random() * (b - a);

  /* ---------- Lapisan latar (digambar sekali) ---------- */
  function layer(w, h, draw) { const c = document.createElement("canvas"); c.width = w; c.height = h; draw(c.getContext("2d")); return c; }
  const sky = layer(W, H, (x) => {
    const gr = x.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "#04140f"); gr.addColorStop(1, "#0d3b2b"); x.fillStyle = gr; x.fillRect(0, 0, W, H);
    x.fillStyle = "rgba(255,255,255,.8)"; for (let i = 0; i < 55; i++) { x.globalAlpha = rnd(.2, .9); x.fillRect(rnd(0, W), rnd(0, 150), rnd(1, 2.4), rnd(1, 2.4)); }
    x.globalAlpha = 1;
    // bulan sabit
    x.fillStyle = "#f6dc8c"; x.beginPath(); x.arc(610, 52, 26, 0, Math.PI * 2); x.fill();
    x.fillStyle = "#06201a"; x.beginPath(); x.arc(622, 44, 23, 0, Math.PI * 2); x.fill();
  });
  // siluet kota masjid (berulang)
  const city = layer(W, H, (x) => {
    x.fillStyle = "rgba(9,58,42,.95)";
    const mosque = (cx, s) => {
      x.fillRect(cx - 60 * s, GROUND - 60 * s, 120 * s, 60 * s);
      x.beginPath(); x.arc(cx, GROUND - 60 * s, 42 * s, Math.PI, 0); x.fill();
      x.fillRect(cx - 2 * s, GROUND - 120 * s, 4 * s, 18 * s);
      for (const m of [-78, 78]) { x.fillRect(cx + m * s - 6 * s, GROUND - 130 * s, 12 * s, 130 * s); x.beginPath(); x.moveTo(cx + m * s - 8 * s, GROUND - 130 * s); x.lineTo(cx + m * s, GROUND - 150 * s); x.lineTo(cx + m * s + 8 * s, GROUND - 130 * s); x.fill(); }
      x.beginPath(); x.arc(cx - 40 * s, GROUND - 60 * s, 16 * s, Math.PI, 0); x.arc(cx + 40 * s, GROUND - 60 * s, 16 * s, Math.PI, 0); x.fill();
    };
    mosque(140, .9); mosque(470, 1.15);
    x.fillRect(280, GROUND - 46, 60, 46); x.beginPath(); x.arc(310, GROUND - 46, 22, Math.PI, 0); x.fill();
    x.fillRect(620, GROUND - 38, 70, 38); x.fillRect(0, GROUND - 26, W, 26);
  });
  const dunes = layer(W, H, (x) => {
    x.fillStyle = "#1c5a3f"; x.beginPath(); x.moveTo(0, H);
    for (let i = 0; i <= W; i += 8) x.lineTo(i, GROUND - 14 - 14 * Math.sin(i / W * Math.PI * 4) - 6 * Math.sin(i / W * Math.PI * 10));
    x.lineTo(W, H); x.fill();
  });
  const ground = layer(W, H - GROUND, (x) => {
    const gr = x.createLinearGradient(0, 0, 0, H - GROUND); gr.addColorStop(0, "#c8964f"); gr.addColorStop(1, "#8d6430"); x.fillStyle = gr; x.fillRect(0, 0, W, H - GROUND);
    x.fillStyle = "rgba(255,230,170,.35)"; for (let i = 0; i < W; i += 48) x.fillRect(i, 10, 22, 3);
    x.fillStyle = "rgba(90,60,20,.35)"; for (let i = 24; i < W; i += 60) x.fillRect(i, 30, 14, 3);
  });

  /* ---------- Objek ---------- */
  const props = [];   // pohon kurma & lentera (dekorasi)
  const items = [];   // kurma emas dari penonton
  const rocks = [];   // rintangan yang dilompati otomatis
  const fx = [];      // percikan & kembang api
  let speed = 3.2, boostUntil = 0, dist = 0, got = 0, label = "", labelUntil = 0;
  const camel = { x: 130, y: 0, vy: 0, t: 0 };
  let off = { city: 0, dunes: 0, ground: 0 };

  function drawPalm(x, y, s) {
    g.strokeStyle = "#5b3b1c"; g.lineWidth = 6 * s; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 8 * s, y - 50 * s, x + 2 * s, y - 92 * s); g.stroke();
    g.strokeStyle = "#2f8a4f"; g.lineWidth = 5 * s; g.lineCap = "round";
    for (let k = 0; k < 6; k++) { const a = -Math.PI / 2 + (k - 2.5) * .55; g.beginPath(); g.moveTo(x + 2 * s, y - 92 * s); g.quadraticCurveTo(x + 2 * s + Math.cos(a) * 30 * s, y - 92 * s + Math.sin(a) * 30 * s - 8 * s, x + 2 * s + Math.cos(a) * 46 * s, y - 92 * s + Math.sin(a) * 46 * s + 14 * s); g.stroke(); }
    g.fillStyle = "#c98b2b"; g.beginPath(); g.arc(x + 4 * s, y - 86 * s, 4 * s, 0, 7); g.arc(x - 3 * s, y - 84 * s, 4 * s, 0, 7); g.fill();
  }
  function drawLantern(x, y, t) {
    g.strokeStyle = "#e9c46a"; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x, y - 40); g.lineTo(x, y - 22); g.stroke();
    const glow = .55 + .25 * Math.sin(t / 6 + x);
    g.fillStyle = `rgba(255,200,90,${glow * .35})`; g.beginPath(); g.arc(x, y - 10, 18, 0, 7); g.fill();
    g.fillStyle = "#d9a441"; g.fillRect(x - 7, y - 22, 14, 22); g.fillStyle = `rgba(255,236,170,${glow})`; g.fillRect(x - 4, y - 18, 8, 14);
    g.fillStyle = "#b07c22"; g.beginPath(); g.moveTo(x - 9, y - 22); g.lineTo(x, y - 30); g.lineTo(x + 9, y - 22); g.fill();
  }
  function drawCamel(x, base, t, air) {
    const y = base;
    g.save(); g.translate(x, y);
    // kaki (berayun saat lari, terlipat saat melompat)
    g.strokeStyle = "#a8743a"; g.lineWidth = 7; g.lineCap = "round";
    const legs = [[-38, 0], [-22, Math.PI], [22, Math.PI / 2], [38, Math.PI * 1.5]];
    for (const [lx, ph] of legs) {
      const sw = air ? 8 : Math.sin(t * .45 + ph) * 13;
      g.beginPath(); g.moveTo(lx, -44); g.lineTo(lx + sw * .5, -22); g.lineTo(lx + sw, air ? -10 : 0); g.stroke();
    }
    // badan, punuk, ekor
    g.fillStyle = "#d9a560";
    g.beginPath(); g.ellipse(0, -58, 56, 25, 0, 0, 7); g.fill();
    g.beginPath(); g.ellipse(-6, -84, 28, 22, 0, 0, 7); g.fill();
    g.strokeStyle = "#b5823f"; g.lineWidth = 4; g.beginPath(); g.moveTo(-54, -62); g.quadraticCurveTo(-68, -52, -64, -38); g.stroke();
    // pelana hijau-emas
    g.fillStyle = "#1f8a5c"; g.fillRect(-30, -78, 46, 16); g.fillStyle = "#f2c75c"; g.fillRect(-30, -64, 46, 4); g.fillRect(-30, -78, 46, 3);
    // leher & kepala
    g.strokeStyle = "#d9a560"; g.lineWidth = 15; g.beginPath(); g.moveTo(42, -66); g.quadraticCurveTo(58, -92, 66, -112); g.stroke();
    g.fillStyle = "#d9a560"; g.beginPath(); g.ellipse(80, -116, 20, 11, .15, 0, 7); g.fill();
    g.fillStyle = "#b5823f"; g.beginPath(); g.ellipse(66, -126, 5, 3, -.6, 0, 7); g.fill();
    g.fillStyle = "#1a1200"; g.beginPath(); g.arc(80, -119, 2.4, 0, 7); g.fill();
    // tali kekang emas
    g.strokeStyle = "#f2c75c"; g.lineWidth = 2; g.beginPath(); g.moveTo(92, -112); g.lineTo(60, -96); g.stroke();
    g.restore();
  }
  function drawDate(x, y, name, kind) {
    const star = kind === "star";
    g.fillStyle = "rgba(255,210,90,.28)"; g.beginPath(); g.arc(x, y, 17, 0, 7); g.fill();
    if (star) {
      g.fillStyle = "#ffd75e"; g.beginPath();
      for (let k = 0; k < 10; k++) { const r = k % 2 ? 6 : 13, a = -Math.PI / 2 + k * Math.PI / 5; g.lineTo(x + Math.cos(a) * r, y + Math.sin(a) * r); }
      g.fill();
    } else {
      g.fillStyle = "#e0a63a"; g.beginPath(); g.ellipse(x, y, 8, 12, .3, 0, 7); g.fill();
      g.fillStyle = "rgba(255,240,200,.7)"; g.beginPath(); g.ellipse(x - 2, y - 4, 2.5, 4, .3, 0, 7); g.fill();
    }
    if (name) { g.font = "bold 13px sans-serif"; g.textAlign = "center"; g.fillStyle = "#fff"; g.strokeStyle = "rgba(0,0,0,.7)"; g.lineWidth = 3; g.strokeText(name, x, y - 20); g.fillText(name, x, y - 20); }
  }
  function drawRock(r) {
    if (r.cactus) {
      g.fillStyle = "#3f8f4e"; g.fillRect(r.x - 6, GROUND - 40, 12, 40); g.fillRect(r.x - 18, GROUND - 28, 8, 16); g.fillRect(r.x - 18, GROUND - 28, 14, 6);
      g.fillRect(r.x + 10, GROUND - 34, 8, 18); g.fillRect(r.x + 4, GROUND - 22, 14, 6);
    } else { g.fillStyle = "#7a5a37"; g.beginPath(); g.ellipse(r.x, GROUND - 8, 18, 12, 0, Math.PI, 0); g.fill(); }
  }
  function burst(x, y, n, colors, power = 4) {
    for (let k = 0; k < n && fx.length < 90; k++) { const a = rnd(0, Math.PI * 2), v = rnd(1, power); fx.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1, life: rnd(18, 34), c: colors[k % colors.length] }); }
  }

  /* ---------- Loop (±30 fps) ---------- */
  let last = performance.now(), acc = 0, t = 0, nextProp = 0, nextRock = 120;
  function step() {
    const now = performance.now();
    const v = speed * (now < boostUntil ? 1.8 : 1);
    t++; dist += v / 6;
    off.city = (off.city + v * .15) % W; off.dunes = (off.dunes + v * .4) % W; off.ground = (off.ground + v) % W;
    // dekorasi
    if (--nextProp <= 0) { props.push({ x: W + 40, kind: Math.random() < .6 ? "palm" : "lantern", s: rnd(.8, 1.15) }); nextProp = rnd(60, 130); }
    for (const p of props) p.x -= v * .8;
    while (props.length && props[0].x < -80) props.shift();
    // rintangan + lompat otomatis
    if (--nextRock <= 0) { rocks.push({ x: W + 30, cactus: Math.random() < .5 }); nextRock = rnd(90, 190); }
    for (const r of rocks) r.x -= v;
    while (rocks.length && rocks[0].x < -40) rocks.shift();
    const onGround = camel.y >= 0;
    if (onGround && rocks.some((r) => r.x - camel.x > 40 && r.x - camel.x < 40 + v * 9)) camel.vy = -11;
    camel.vy += .62; camel.y = Math.min(0, camel.y + camel.vy); if (camel.y >= 0) camel.vy = 0;
    // kurma
    for (const it of items) { it.x -= v; it.bob += .12; }
    for (let i = items.length - 1; i >= 0; i--) {
      const it = items[i];
      if (Math.abs(it.x - (camel.x + 80)) < 26) {   // diambil oleh unta
        got++; burst(it.x, it.y, 10, ["#ffd75e", "#fff2b0", "#1fbf7a"]);
        items.splice(i, 1);
      } else if (it.x < -30) items.splice(i, 1);
    }
    for (const p of fx) { p.x += p.vx; p.y += p.vy; p.vy += .12; p.life--; }
    for (let i = fx.length - 1; i >= 0; i--) if (fx[i].life <= 0) fx.splice(i, 1);
  }
  function draw() {
    g.drawImage(sky, 0, 0);
    g.drawImage(city, -off.city, 0); g.drawImage(city, W - off.city, 0);
    g.drawImage(dunes, -off.dunes, 0); g.drawImage(dunes, W - off.dunes, 0);
    for (const p of props) p.kind === "palm" ? drawPalm(p.x, GROUND, p.s) : drawLantern(p.x, GROUND - 70, t);
    g.drawImage(ground, -off.ground, GROUND); g.drawImage(ground, W - off.ground, GROUND);
    for (const r of rocks) drawRock(r);
    for (const it of items) drawDate(it.x, it.y + Math.sin(it.bob) * 4, it.name, it.kind);
    // bayangan & unta
    g.fillStyle = "rgba(0,0,0,.25)"; g.beginPath(); g.ellipse(camel.x + 10, GROUND + 4, Math.max(14, 60 + camel.y * .3), 7, 0, 0, 7); g.fill();
    drawCamel(camel.x, GROUND + camel.y, t * (speed / 3.2), camel.y < -2);
    for (const p of fx) { g.globalAlpha = Math.max(0, p.life / 34); g.fillStyle = p.c; g.fillRect(p.x, p.y, 4, 4); }
    g.globalAlpha = 1;
    // HUD
    g.font = "bold 18px sans-serif"; g.textAlign = "left"; g.fillStyle = "rgba(0,0,0,.45)"; g.fillRect(10, 10, 250, 30);
    g.fillStyle = "#ffd75e"; g.fillText(`🌴 ${Math.floor(dist)} m   ⭐ ${got}`, 18, 32);
    if (performance.now() < boostUntil) { g.fillStyle = "#7dffb6"; g.fillText("⚡ x" + (speed * 1.8 / 3.2).toFixed(1), 270, 32); }
    if (label && performance.now() < labelUntil) {
      g.font = "bold 20px sans-serif"; g.textAlign = "right"; const w = g.measureText(label).width + 24;
      g.fillStyle = "rgba(0,0,0,.5)"; g.fillRect(W - 10 - w, 10, w, 30); g.fillStyle = "#fff"; g.fillText(label, W - 22, 32);
    }
  }
  function loop(now) {
    acc += Math.min(200, now - last); last = now;
    let stepped = false;
    try { while (acc >= 33) { step(); acc -= 33; stepped = true; } } catch (e) { acc = 0; }
    try { if (stepped) draw(); } catch (e) { /* jangan sampai animasi berhenti */ }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  /* ---------- Kecepatan mengikuti keramaian penonton ---------- */
  let recent = [];
  setInterval(() => {
    const now = Date.now(); recent = recent.filter((x) => now - x < 30000);
    const target = 3.2 + Math.min(4, recent.length * .25);    // makin banyak jawaban → makin cepat
    speed += (target - speed) * .15;
  }, 1000);

  window.Runner = {
    spawn(name, kind = "date") {
      recent.push(Date.now());
      if (items.length > 14) items.shift();
      items.push({ x: W + 20 + items.filter((i) => i.x > W - 40).length * 46, y: GROUND - rnd(70, 120), bob: rnd(0, 6), name: name ? String(name).slice(0, 12) : "", kind });
    },
    celebrate(text) {
      camel.vy = -14; boostUntil = performance.now() + 4000;
      for (let k = 0; k < 4; k++) setTimeout(() => burst(rnd(200, 680), rnd(40, 120), 26, ["#ffd75e", "#1fbf7a", "#ffffff", "#ff7a59", "#5ec8ff"], 5), k * 260);
      if (text) { label = text; labelUntil = performance.now() + 5000; }
    },
    setLabel(text, ms = 5000) { label = text; labelUntil = performance.now() + ms; },
  };
})();
