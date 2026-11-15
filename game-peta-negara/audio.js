/* Musik latar & efek suara — semuanya disintesis dengan Web Audio
 * (tanpa file rekaman → aman dari klaim hak cipta musik di TikTok).
 * Bisa juga memakai file mp3 sendiri lewat config (MUSIK_FILE / EFEK_FILE).
 */
(() => {
  "use strict";
  const CFG = window.GAME_CONFIG;
  const AC = window.AudioContext || window.webkitAudioContext;
  let ctx = null, master, musicBus, sfxBus, reverb, revSend, delay, delaySend, noiseBuf;
  let musicOn = CFG.MUSIK !== false, sfxOn = CFG.SUARA !== false;
  let musicEl = null; // <audio> bila memakai file mp3 sendiri
  const VM = CFG.VOLUME_MUSIK ?? 0.45, VE = CFG.VOLUME_EFEK ?? 0.8;
  const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

  function init() {
    if (ctx || !AC) return;
    ctx = new AC();
    master = ctx.createDynamicsCompressor();
    master.threshold.value = -14; master.ratio.value = 4; master.attack.value = 0.005; master.release.value = 0.2;
    master.connect(ctx.destination);
    musicBus = ctx.createGain(); musicBus.gain.value = musicOn && !CFG.MUSIK_FILE ? VM : 0; musicBus.connect(master);
    sfxBus = ctx.createGain(); sfxBus.gain.value = sfxOn ? VE : 0; sfxBus.connect(master);

    // reverb buatan (impuls noise yang meluruh)
    reverb = ctx.createConvolver();
    const len = ctx.sampleRate * 2.6, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    }
    reverb.buffer = ir;
    revSend = ctx.createGain(); revSend.gain.value = 0.35;
    revSend.connect(reverb); reverb.connect(master);

    // delay untuk arpeggio
    delay = ctx.createDelay(1); delay.delayTime.value = (60 / BPM) * 0.75;
    const fb = ctx.createGain(); fb.gain.value = 0.32;
    const dlp = ctx.createBiquadFilter(); dlp.type = "lowpass"; dlp.frequency.value = 2500;
    delay.connect(dlp); dlp.connect(fb); fb.connect(delay);
    delaySend = ctx.createGain(); delaySend.gain.value = 0.25;
    delaySend.connect(delay); dlp.connect(musicBus);

    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;

    if (CFG.MUSIK_FILE) {
      musicEl = new Audio(CFG.MUSIK_FILE);
      musicEl.loop = true; musicEl.volume = musicOn ? VM : 0;
    }
    startScheduler();
    updateUnlock();
    ctx.onstatechange = updateUnlock;
  }

  /* ---------- Tombol "aktifkan suara" (kebijakan autoplay browser) ---------- */
  let unlockEl = null;
  function updateUnlock() {
    const running = ctx && ctx.state === "running";
    if (running && musicEl && musicOn) musicEl.play().catch(() => {});
    if (!unlockEl) {
      unlockEl = document.createElement("button");
      unlockEl.id = "soundUnlock";
      unlockEl.textContent = CFG.BAHASA === "id" ? "🔊 Ketuk layar untuk menyalakan suara" : "🔊 Tap the screen to turn on sound";
      unlockEl.onclick = resume;
      (document.getElementById("stage") || document.body).append(unlockEl);
    }
    unlockEl.classList.toggle("hidden", !!running || (!musicOn && !sfxOn));
  }
  function resume() {
    init();
    if (ctx.state !== "running") ctx.resume().then(updateUnlock).catch(() => {});
    if (musicEl && musicOn) musicEl.play().catch(() => {});
  }
  addEventListener("pointerdown", resume);
  addEventListener("keydown", resume);

  /* ---------- Bahan dasar suara ---------- */
  function env(g, t, a, peak, d, sustain = 0.0001) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(sustain, 0.0001), t + a + d);
  }
  function osc(type, freq, t, stop, dest) {
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    o.connect(dest); o.start(t); o.stop(stop); return o;
  }
  function noise(t, dur, dest) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf;
    s.connect(dest); s.start(t, Math.random() * 1.5); s.stop(t + dur); return s;
  }
  function gainTo(dest, v = 1, rev = 0) {
    const g = ctx.createGain(); g.gain.value = v; g.connect(dest);
    if (rev) { const r = ctx.createGain(); r.gain.value = rev; g.connect(r); r.connect(revSend); }
    return g;
  }
  function bell(t, freq, dur, vol, dest = sfxBus, rev = 0.6) {
    const out = gainTo(dest, 1, rev);
    [[1, 1], [2.76, 0.4], [5.4, 0.18], [8.9, 0.08]].forEach(([r, a]) => {
      const g = ctx.createGain(); g.connect(out);
      env(g, t, 0.004, vol * a, dur / r);
      osc("sine", freq * r, t, t + dur + 0.05, g);
    });
  }
  function brass(t, midi, dur, vol, dest = sfxBus) {
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.Q.value = 2;
    f.frequency.setValueAtTime(400, t);
    f.frequency.exponentialRampToValueAtTime(3200, t + 0.08);
    f.frequency.exponentialRampToValueAtTime(1300, t + dur);
    const g = gainTo(dest, 1, 0.5); const ge = ctx.createGain(); ge.connect(g); f.connect(ge);
    ge.gain.setValueAtTime(0.0001, t);
    ge.gain.exponentialRampToValueAtTime(vol, t + 0.05);
    ge.gain.setValueAtTime(vol, t + dur * 0.7);
    ge.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.25);
    for (const det of [-8, 0, 8]) { const o = osc("sawtooth", mtof(midi), t, t + dur + 0.3, f); o.detune.value = det; }
  }
  function whoosh(t, dur, vol, from = 300, to = 5000) {
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 1.2;
    f.frequency.setValueAtTime(from, t); f.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = gainTo(sfxBus, 1, 0.4); const ge = ctx.createGain(); f.connect(ge); ge.connect(g);
    ge.gain.setValueAtTime(0.0001, t);
    ge.gain.exponentialRampToValueAtTime(vol, t + dur * 0.8);
    ge.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.08);
    noise(t, dur + 0.1, f);
  }
  function boom(t, vol, dest = sfxBus) {
    const g = gainTo(dest, 1, 0.3); const ge = ctx.createGain(); ge.connect(g);
    env(ge, t, 0.005, vol, 0.9);
    const o = osc("sine", 110, t, t + 1, ge); o.frequency.exponentialRampToValueAtTime(32, t + 0.8);
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 500;
    const gn = ctx.createGain(); env(gn, t, 0.003, vol * 0.6, 0.4); lp.connect(gn); gn.connect(g);
    noise(t, 0.5, lp);
  }
  function kick(t, vol) {
    const g = ctx.createGain(); g.connect(musicBus); env(g, t, 0.003, vol, 0.32);
    const o = osc("sine", 140, t, t + 0.4, g); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
  }
  function hat(t, vol) {
    const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 7500;
    const g = ctx.createGain(); hp.connect(g); g.connect(musicBus); env(g, t, 0.002, vol, 0.05);
    noise(t, 0.08, hp);
  }
  function tom(t, vol, f0 = 120) {
    const g = gainTo(musicBus, 1, 0.3); const ge = ctx.createGain(); ge.connect(g); env(ge, t, 0.004, vol, 0.45);
    const o = osc("sine", f0, t, t + 0.55, ge); o.frequency.exponentialRampToValueAtTime(f0 * 0.55, t + 0.4);
  }

  /* ---------- Musik latar prosedural (D minor, nuansa "strategi/epik") ---------- */
  const BPM = 96, STEP = 60 / BPM / 4;
  // [nada pad], nada bass — Dm Bb F C | Dm Bb Gm A
  const PROG = [
    [[50, 53, 57], 38], [[46, 50, 53], 34], [[53, 57, 60], 41], [[48, 52, 55], 36],
    [[50, 53, 57], 38], [[46, 50, 53], 34], [[43, 46, 50], 31], [[45, 49, 52], 33],
  ];
  const ARP = [0, 1, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 4, 3];
  let step = 0, bar = 0, nextT = 0, intensity = 0, schedTimer = null;

  function pad(t, notes, dur) {
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 700 + intensity * 900; f.Q.value = 0.6;
    const g = gainTo(musicBus, 1, 0.8); const ge = ctx.createGain(); f.connect(ge); ge.connect(g);
    ge.gain.setValueAtTime(0.0001, t);
    ge.gain.exponentialRampToValueAtTime(0.07, t + 0.7);
    ge.gain.setValueAtTime(0.07, t + dur - 0.2);
    ge.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.6);
    for (const n of notes) for (const det of [-7, 7]) {
      const o = osc("sawtooth", mtof(n), t, t + dur + 0.7, f); o.detune.value = det;
    }
  }
  function bass(t, midi, dur) {
    const g = ctx.createGain(); g.connect(musicBus); env(g, t, 0.01, 0.22, dur);
    osc("triangle", mtof(midi), t, t + dur + 0.05, g);
    const g2 = ctx.createGain(); g2.connect(musicBus); env(g2, t, 0.01, 0.18, dur);
    osc("sine", mtof(midi - 12), t, t + dur + 0.05, g2);
  }
  function pluck(t, midi, vol) {
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 2400;
    const g = ctx.createGain(); f.connect(g); g.connect(musicBus); g.connect(delaySend);
    env(g, t, 0.004, vol, 0.22);
    osc("square", mtof(midi), t, t + 0.3, f);
  }
  function scheduleStep(t) {
    const [notes, root] = PROG[bar % 8];
    const section = Math.floor(bar / 8) % 4; // 0: pad+bass+arp, 1-2: +drum, 3: semua (arp rapat)
    const drums = section >= 1 || intensity > 0.25;
    const arp = true;
    if (step === 0) pad(t, notes, STEP * 16);
    if (step === 0 || step === 8 || step === 14) bass(t, root, step === 14 ? STEP * 1.5 : STEP * 5);
    if (arp && step % 2 === 0 || (section === 3 && arp)) {
      const ext = [...notes, notes[0] + 12, notes[1] + 12];
      pluck(t, ext[ARP[step]] + 12, section === 3 ? 0.035 : 0.045);
    }
    if (drums) {
      if (step === 0 || step === 8 || (bar % 2 && step === 10)) kick(t, 0.55 + intensity * 0.3);
      if (step % 4 === 2) hat(t, 0.05 + intensity * 0.04);
      if (bar % 8 === 7 && step >= 12) tom(t, 0.25, 140 - (step - 12) * 15);
    }
  }
  function startScheduler() {
    nextT = ctx.currentTime + 0.1;
    clearInterval(schedTimer);
    schedTimer = setInterval(() => {
      if (!ctx || ctx.state !== "running") { nextT = ctx ? ctx.currentTime + 0.1 : 0; return; }
      intensity = Math.max(0, intensity - 0.0025);
      if (!musicOn || CFG.MUSIK_FILE) { nextT = ctx.currentTime + 0.1; return; }
      if (nextT < ctx.currentTime) nextT = ctx.currentTime + 0.05;
      while (nextT < ctx.currentTime + 0.2) {
        scheduleStep(nextT);
        nextT += STEP;
        if (++step === 16) { step = 0; bar++; }
      }
    }, 25);
  }

  /* ---------- Ducking: kecilkan musik saat efek besar ---------- */
  let duckT = null;
  function duck(sec) {
    if (!ctx) return;
    const t = ctx.currentTime;
    if (musicOn && !CFG.MUSIK_FILE) {
      musicBus.gain.cancelScheduledValues(t);
      musicBus.gain.setTargetAtTime(VM * 0.25, t, 0.05);
      musicBus.gain.setTargetAtTime(VM, t + sec, 0.4);
    }
    if (musicEl && musicOn) {
      musicEl.volume = VM * 0.25;
      clearTimeout(duckT);
      duckT = setTimeout(() => { if (musicOn) musicEl.volume = VM; }, sec * 1000);
    }
  }

  /* ---------- Efek suara ---------- */
  const PENTA = [74, 76, 78, 81, 83, 86, 88, 90, 93, 95]; // D mayor pentatonik
  const lastPlay = {};
  function throttle(name, ms) {
    const now = performance.now();
    if (lastPlay[name] && now - lastPlay[name] < ms) return false;
    lastPlay[name] = now; return true;
  }
  function fileSfx(name) {
    const f = CFG.EFEK_FILE && CFG.EFEK_FILE[name];
    if (!f) return false;
    try { const a = new Audio(f); a.volume = Math.min(1, VE); a.play().catch(() => {}); } catch (e) { /* */ }
    return true;
  }
  const SFX = {
    gabung(t) { // pop + kilau
      const g = ctx.createGain(); g.connect(sfxBus); env(g, t, 0.005, 0.35, 0.12);
      const o = osc("sine", 380, t, t + 0.18, g); o.frequency.exponentialRampToValueAtTime(980, t + 0.09);
      bell(t + 0.07, mtof(86), 0.6, 0.12);
    },
    giftKecil(t, n = 1) { // denting lonceng naik, jumlah nada mengikuti combo
      const k = Math.min(8, Math.max(2, n));
      for (let i = 0; i < k; i++) bell(t + i * 0.07, mtof(PENTA[i % PENTA.length]), 0.9, 0.16);
    },
    giftSedang(t) { // hujan koin + akor
      for (let i = 0; i < 10; i++) bell(t + i * 0.045 + Math.random() * 0.02, 1700 + Math.random() * 1700, 0.35, 0.09, sfxBus, 0.3);
      [74, 78, 81, 86].forEach((m, i) => bell(t + 0.45 + i * 0.05, mtof(m), 1.4, 0.13));
    },
    giftBesar(t) { // whoosh → boom → fanfare
      duck(3.2);
      whoosh(t, 0.55, 0.5);
      boom(t + 0.55, 0.9);
      [[62, 0.18], [66, 0.18], [69, 0.18]].forEach(([m], i) => brass(t + 0.6 + i * 0.12, m, 0.14, 0.11));
      [62, 66, 69, 74].forEach((m) => brass(t + 0.98, m, 1.1, 0.09));
      for (let i = 0; i < 12; i++) bell(t + 0.9 + i * 0.06, mtof(PENTA[(i * 3) % PENTA.length] + 12), 0.8, 0.06);
      intensity = Math.min(1, intensity + 0.5);
    },
    giftMega(t) { // untuk gift sangat besar: gulungan drum + fanfare panjang
      duck(5);
      for (let i = 0; i < 12; i++) tomSfx(t + i * 0.05, 0.12 + i * 0.03);
      whoosh(t + 0.1, 0.5, 0.5);
      boom(t + 0.62, 1);
      const seq = [[62, 0.15], [66, 0.15], [69, 0.15], [74, 0.45], [69, 0.15], [74, 1.3]];
      let tt = t + 0.65;
      for (const [m, d] of seq) { brass(tt, m, d, 0.12); brass(tt, m - 12, d, 0.06); tt += d + 0.03; }
      [62, 66, 69, 74, 78].forEach((m) => brass(tt - 1.33, m, 1.3, 0.05));
      for (let i = 0; i < 20; i++) bell(t + 0.7 + i * 0.08, mtof(PENTA[i % PENTA.length] + 12), 0.9, 0.05);
      intensity = 1;
    },
    follow(t) { bell(t, mtof(81), 1, 0.16); bell(t + 0.16, mtof(86), 1.3, 0.16); },
    share(t) { whoosh(t, 0.35, 0.25, 600, 6000); bell(t + 0.3, mtof(88), 0.8, 0.1); },
    like(t) { const g = ctx.createGain(); g.connect(sfxBus); env(g, t, 0.003, 0.05, 0.07); osc("sine", 1300 + Math.random() * 300, t, t + 0.1, g); },
    pemimpin(t) { duck(1.8); brass(t, 69, 0.18, 0.1); brass(t + 0.22, 74, 0.9, 0.11); brass(t + 0.22, 62, 0.9, 0.07); },
    tik(t) { const g = ctx.createGain(); g.connect(sfxBus); env(g, t, 0.002, 0.25, 0.06); osc("square", 1500, t, t + 0.08, g); },
    tikAkhir(t) { const g = ctx.createGain(); g.connect(sfxBus); env(g, t, 0.002, 0.3, 0.12); osc("square", 2000, t, t + 0.15, g); },
    menang(t) {
      duck(6);
      boom(t, 0.8);
      const seq = [[62, 0.2], [62, 0.1], [62, 0.1], [66, 0.35], [69, 0.35], [74, 1.6]];
      let tt = t + 0.1;
      for (const [m, d] of seq) { brass(tt, m, d, 0.12); brass(tt, m + 7, d, 0.05); tt += d + 0.04; }
      [50, 57, 62, 66, 69].forEach((m) => brass(tt - 1.64, m, 1.6, 0.05));
      for (let i = 0; i < 24; i++) bell(t + 1 + i * 0.07, mtof(PENTA[i % PENTA.length] + 12), 1, 0.05);
    },
  };
  function tomSfx(t, vol) {
    const g = gainTo(sfxBus, 1, 0.3); const ge = ctx.createGain(); ge.connect(g); env(ge, t, 0.003, vol, 0.25);
    const o = osc("sine", 130, t, t + 0.3, ge); o.frequency.exponentialRampToValueAtTime(75, t + 0.2);
  }

  const MIN_GAP = { gabung: 180, giftKecil: 110, giftSedang: 300, like: 1500, follow: 250, share: 250, tik: 500, tikAkhir: 500 };
  function play(name, arg) {
    if (!sfxOn) return;
    init();
    if (!ctx || ctx.state !== "running") return;
    if (!throttle(name, MIN_GAP[name] || 0)) return;
    if (fileSfx(name)) return;
    try { SFX[name] && SFX[name](ctx.currentTime + 0.01, arg); } catch (e) { console.warn("sfx", name, e); }
  }
  function gift(coins, count) {
    const big = CFG.GIFT_BESAR_KOIN || 30;
    if (coins >= big * 30) play("giftMega");
    else if (coins >= big) play("giftBesar");
    else if (coins >= 10) play("giftSedang");
    else play("giftKecil", count);
    intensity = Math.min(1, intensity + Math.min(0.3, coins / 200));
  }
  function toggleMusic() {
    musicOn = !musicOn; init();
    if (musicBus) musicBus.gain.setTargetAtTime(musicOn && !CFG.MUSIK_FILE ? VM : 0, ctx.currentTime, 0.2);
    if (musicEl) { if (musicOn) { musicEl.volume = VM; musicEl.play().catch(() => {}); } else musicEl.pause(); }
    updateUnlock();
    return musicOn;
  }
  function toggleSfx() {
    sfxOn = !sfxOn; init();
    if (sfxBus) sfxBus.gain.setTargetAtTime(sfxOn ? VE : 0, ctx.currentTime, 0.05);
    updateUnlock();
    return sfxOn;
  }
  function boost(v) { intensity = Math.min(1, Math.max(intensity, v)); }

  // tap(): aliran audio master (untuk merekam/uji)
  function tap() { init(); const d = ctx.createMediaStreamDestination(); master.connect(d); return d.stream; }
  window.GameAudio = { init, resume, play, gift, toggleMusic, toggleSfx, boost, tap, get ctx() { return ctx; } };
  if (musicOn || sfxOn) init();
})();
