/* Qasidah instrumental ORISINAL (dibuat langsung oleh game, bebas hak cipta).
 * Irama rebana/darbuka pola "maqsum" + melodi ala seruling ney di maqam Hijaz (D–Eb–F#–G–A–Bb–C–D)
 * dengan dengung nada dasar. Frasa melodi dibuat acak-terarah sehingga tidak pernah persis sama.
 * API: Qasidah.start(audioContext, volume) · Qasidah.stop() · Qasidah.setVolume(v) · Qasidah.playing
 */
(() => {
  "use strict";
  const BPM = 92, EIGHTH = 60 / BPM / 2;
  // maqam Hijaz pada D (MIDI): D4 Eb4 F#4 G4 A4 Bb4 C5 D5 Eb5 F#5 G5
  const SCALE = [62, 63, 66, 67, 69, 70, 72, 74, 75, 78, 79];
  const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
  // maqsum 8 ketukan: D=dum, T=tak, k=kecil (cincin rebana)
  const MAQSUM = ["D", "k", "T", "T", "k", "D", "T", "k"];
  let ctx = null, out = null, rev = null, noise = null, timer = null, next = 0, step = 0, bar = 0;
  let phrase = [], vol = 0.3;

  function setup(c) {
    ctx = c;
    out = ctx.createGain(); out.gain.value = vol;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3;
    out.connect(comp); comp.connect(ctx.destination);
    // gema ruang (impuls buatan)
    rev = ctx.createConvolver();
    const len = ctx.sampleRate * 2.2, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    rev.buffer = ir; const rg = ctx.createGain(); rg.gain.value = 0.28; rev.connect(rg); rg.connect(out);
    noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noise.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  }
  const env = (g, t, a, peak, d) => { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); };
  function noiseHit(t, type, freq, q, peak, dur) {
    const s = ctx.createBufferSource(); s.buffer = noise;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); env(g, t, 0.002, peak, dur);
    s.connect(f); f.connect(g); g.connect(out); g.connect(rev); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  }
  function dum(t) {   // pukulan tengah rebana: dentum rendah
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine";
    o.frequency.setValueAtTime(115, t); o.frequency.exponentialRampToValueAtTime(58, t + 0.18);
    env(g, t, 0.004, 0.75, 0.35); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.45);
    noiseHit(t, "lowpass", 300, 0.7, 0.25, 0.12);
  }
  function tak(t, soft) { // pukulan pinggir: tajam
    noiseHit(t, "bandpass", 2300, 1.3, soft ? 0.18 : 0.42, 0.07);
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "triangle"; o.frequency.value = 520;
    env(g, t, 0.002, soft ? 0.05 : 0.12, 0.05); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.08);
  }
  function jingle(t) { noiseHit(t, "highpass", 7000, 0.6, 0.07, 0.12); }   // kerincing rebana
  function ney(t, midi, dur, peak) {  // seruling ney: sinus + segitiga, nafas, vibrato pelan
    const f = mtof(midi);
    const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), lfo = ctx.createOscillator(), lg = ctx.createGain();
    o1.type = "sine"; o2.type = "triangle"; o1.frequency.value = f; o2.frequency.value = f * 2.001;
    lfo.frequency.value = 5.2; lg.gain.value = f * 0.006; lfo.connect(lg); lg.connect(o1.frequency); lg.connect(o2.frequency);
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2200;
    const g = ctx.createGain(), g2 = ctx.createGain(); g2.gain.value = 0.22;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.09);
    g.gain.setValueAtTime(peak, t + Math.max(0.1, dur - 0.12)); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.25);
    o1.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(out); g.connect(rev);
    for (const o of [o1, o2, lfo]) { o.start(t); o.stop(t + dur + 0.3); }
    noiseHit(t, "bandpass", f * 2, 4, peak * 0.15, Math.min(0.3, dur));   // desah nafas
  }
  function drone(t, dur) {  // dengung nada dasar D3 + A3
    for (const m of [50, 57]) {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sawtooth"; o.frequency.value = mtof(m);
      const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 420;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.045, t + 0.8);
      g.gain.setValueAtTime(0.045, t + dur - 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.3);
      o.connect(lp); lp.connect(g); g.connect(out); g.connect(rev); o.start(t); o.stop(t + dur + 0.4);
    }
  }
  // frasa 2 birama (16 ketukan seperdelapan): langkah kecil di tangga nada, berakhir di nada dasar/kelima
  function makePhrase() {
    const notes = []; let idx = 4 + Math.floor(Math.random() * 3); let pos = 0;
    while (pos < 16) {
      const len = [1, 2, 2, 3, 4][Math.floor(Math.random() * 5)];
      const end = pos + len >= 16;
      if (end) idx = Math.random() < 0.6 ? 0 : 4;             // pulang ke D atau A
      notes.push({ at: pos, len: Math.min(len, 16 - pos), midi: SCALE[idx] });
      pos += len;
      idx = Math.max(0, Math.min(SCALE.length - 1, idx + [-2, -1, -1, 1, 1, 2, 0][Math.floor(Math.random() * 7)]));
    }
    return notes;
  }
  function schedule(t) {
    const hit = MAQSUM[step % 8];
    if (hit === "D") dum(t); else if (hit === "T") tak(t, false); else { jingle(t); if (bar % 4 === 3 && step % 8 === 7) tak(t, true); }
    if (step % 16 === 0) {
      if (bar % 8 === 0) drone(t, EIGHTH * 16 * 4);
      // melodi: 2 frasa dimainkan, 2 frasa istirahat (hanya rebana) supaya tidak ramai
      const sect = Math.floor(bar / 2) % 4;
      if (sect !== 3) {
        if (sect === 0 || !phrase.length) phrase = makePhrase();
        for (const n of phrase) ney(t + n.at * EIGHTH, n.midi + (sect === 2 ? 12 : 0) * (Math.random() < 0.3 ? 1 : 0), n.len * EIGHTH * 0.95, 0.16);
      }
    }
    step++; if (step % 8 === 0) bar++;
  }
  function loop() {
    if (!ctx || ctx.state !== "running") { next = ctx ? ctx.currentTime + 0.1 : 0; return; }
    if (next < ctx.currentTime) next = ctx.currentTime + 0.05;
    while (next < ctx.currentTime + 0.25) { schedule(next); next += EIGHTH; }
  }
  window.Qasidah = {
    playing: false,
    start(c, v) {
      if (this.playing) return;
      if (typeof v === "number") vol = v;
      if (!ctx) setup(c);
      out.gain.value = vol;
      next = ctx.currentTime + 0.1; step = 0; bar = 0;
      timer = setInterval(loop, 40); this.playing = true;
    },
    stop() { clearInterval(timer); this.playing = false; },
    setVolume(v) { vol = v; if (out) out.gain.setTargetAtTime(v, ctx.currentTime, 0.2); },
  };
})();
