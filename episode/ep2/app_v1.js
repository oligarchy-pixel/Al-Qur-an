// Mesin video dokumen investigasi (bangun ulang Ep2) — setTime(t) menggambar frame pada detik t.
const S = document.getElementById('stage'), CAMEL = document.getElementById('cam');
const ITEMS = [], SFX = [], CUTS = [], PUNCH = [], LIGHT = [];
const TOTAL = 588.1;
let SC = null;
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const eo = x => 1 - Math.pow(1 - clamp(x), 3);
const eio = x => { x = clamp(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const sfx = (t, type, g = 1) => SFX.push({ t: +t.toFixed(3), type, g });

function scene(t0, t1, opt = {}) { SC = { t0, t1 }; CUTS.push({ t: t0, kind: opt.cut || 'glitch' }); if (opt.light) LIGHT.push([t0, t1]); if (opt.cut !== 'none') sfx(t0, opt.cut === 'hard' ? 'impact' : 'whoosh', .7); }
function node(html, css = '', cls = '') { const d = document.createElement('div'); d.className = 'ab ' + cls; d.style.cssText = css; d.innerHTML = html; d.style.display = 'none'; S.appendChild(d); return d; }
function item(t0, t1, n, fn) { ITEMS.push({ t0, t1: t1 ?? SC.t1, n, fn }); return n; }
// muncul: fade | up | scale | left
function show(n, t0, kind = 'up', t1, dur = .45) {
  return item(t0, t1, n, (lt, t, it) => {
    const k = eo(lt / dur), out = clamp((it.t1 - t) / .25);
    let tr = '';
    if (kind === 'up') tr = `translateY(${(1 - k) * 40}px)`;
    if (kind === 'scale') tr = `scale(${.85 + .15 * k})`;
    if (kind === 'left') tr = `translateX(${(1 - k) * -60}px)`;
    if (kind === 'drop') tr = `translateY(${(1 - k) * -80}px) rotate(${(1 - k) * -6}deg)`;
    n.style.opacity = k * out; n.style.transform = tr + (n.dataset.rot ? ` rotate(${n.dataset.rot}deg)` : '');
  });
}
// ketik Latin huruf demi huruf, [kata] = bisa distabilo
function kin(n, text, t0, opt = {}) {
  const iv = opt.iv || .045, plain = text.replace(/[\[\]]/g, ''), dur = plain.length * iv;
  for (let i = 0; i < plain.length; i += 2) if (plain[i] !== ' ') sfx(t0 + i * iv, 'tick', .5);
  const marks = []; let html = '', ci = 0, mi = 0;
  const segs = text.split(/(\[[^\]]+\])/).filter(Boolean);
  const build = c => {
    let out = '', idx = 0, m = 0;
    for (const s of segs) {
      const isM = s.startsWith('['), w = isM ? s.slice(1, -1) : s;
      const part = w.slice(0, clamp(c - idx, 0, w.length));
      if (isM) out += `<span class="mk" data-m="${m++}">${part}</span>`; else out += part;
      idx += w.length;
    }
    return out;
  };
  const mt = opt.marks || [];
  item(t0, opt.t1, n, (lt, t, it) => {
    const c = Math.floor(lt / iv); n.innerHTML = build(c) + (lt < dur + .6 ? '<span class="cur"></span>' : '');
    n.querySelectorAll('.mk').forEach((e, i) => { const tm = mt[i]; if (tm === undefined) return; const k = eo((t - tm) / .35); e.style.backgroundSize = `${k * 100}% 92%`; if (k > .5) e.classList.add('on'); });
    n.style.opacity = clamp((it.t1 - t) / .25);
  });
  mt.forEach(tm => sfx(tm, 'mark', .6));
  return n;
}
// Arab: wipe kanan->kiri per kata; [kata] bisa distabilo
function arw(n, text, t0, dur, opt = {}) {
  if (typeof text === 'number') { opt = dur || {}; dur = t0; t0 = text; text = n.innerHTML; }
  const segs = text.split(/(\[[^\]]+\])/).filter(Boolean); let m = 0;
  n.innerHTML = segs.map(s => s.startsWith('[') ? `<span class="mk" data-m="${m++}" style="background-position:right 60%">${s.slice(1, -1)}</span>` : s).join('');
  n.classList.add('ar');
  const nw = text.replace(/[\[\]]/g, '').trim().split(/\s+/).length, mt = opt.marks || [];
  for (let i = 0; i < nw; i++) sfx(t0 + i * dur / nw, 'tick', .55);
  mt.forEach(tm => sfx(tm, 'mark', .6));
  item(t0, opt.t1, n, (lt, t, it) => {
    const p = clamp(Math.floor(clamp(lt / dur) * nw + .999) / nw), sm = eo(lt / dur);
    const pp = Math.min(p, sm + 1 / nw);
    n.style.clipPath = `inset(-20% 0 -20% ${(1 - pp) * 100}%)`;
    n.style.opacity = clamp((it.t1 - t) / .25);
    n.querySelectorAll('.mk').forEach((e, i) => { const tm = mt[i]; if (tm === undefined) return; const k = eo((t - tm) / .35); e.style.backgroundSize = `${k * 100}% 92%`; if (k > .5) e.classList.add('on'); });
  });
  return n;
}
// garis SVG tumbuh
function svgDraw(svgHtml, css, t0, dur = 1.2, t1) {
  const n = node(svgHtml, css);
  const paths = () => n.querySelectorAll('[data-d]');
  sfx(t0, 'draw', .5);
  item(t0, t1, n, (lt, t, it) => {
    n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25);
    paths().forEach(p => { const L = +p.dataset.d, del = +(p.dataset.del || 0); const k = eio((lt - del) / dur); p.style.strokeDasharray = L; p.style.strokeDashoffset = L * (1 - k); });
  });
  return n;
}
function stamp(text, css, t0, t1, col) {
  const n = node(`<div class="stamp" style="${col ? `border-color:${col};color:${col}` : ''}">${text}</div>`, css);
  sfx(t0, 'stamp', .9);
  return item(t0, t1, n, (lt, t, it) => { const k = eo(lt / .22); n.style.opacity = Math.min(1, lt / .08) * clamp((it.t1 - t) / .25); n.style.transform = `scale(${2.2 - 1.2 * k})`; });
}
function punch(t0, t1, ox, oy, k = 1.9) { PUNCH.push({ t0, t1, ox, oy, k }); sfx(t0, 'impact', .55); }

// ------------------------------------------------------------------ frame
let rnd = 1; const rng = () => (rnd = (rnd * 16807) % 2147483647) / 2147483647;
const noiseC = document.getElementById('noise').getContext('2d'), NI = noiseC.createImageData(480, 270);
function drawNoise(t) { rnd = 1 + Math.floor(t * 30) * 7919; for (let i = 0; i < NI.data.length; i += 4) { const v = rng() * 255; NI.data[i] = NI.data[i + 1] = NI.data[i + 2] = v; NI.data[i + 3] = 255; } noiseC.putImageData(NI, 0, 0); }
const G = document.getElementById('glitch');
window.setTime = function (t) {
  for (const it of ITEMS) { const on = t >= it.t0 && t < it.t1; if (on) { it.n.style.display = ''; it.fn(t - it.t0, t, it); } else it.n.style.display = 'none'; }
  // kamera hidup
  let sc = SC0(t), cx = 960, cy = 540, z = 1.02 + .035 * clamp((t - sc.t0) / Math.max(1, sc.t1 - sc.t0));
  for (const p of PUNCH) { if (t >= p.t0 - .05 && t < p.t1 + .4) { const k = eio((t - p.t0) / .35) * (1 - eio((t - p.t1) / .4)); z = z + (p.k - z) * k; cx = 960 + (p.ox - 960) * k; cy = 540 + (p.oy - 540) * k; } }
  const sh = Math.sin(t * 13.1) * .6 + Math.sin(t * 7.3) * .5;
  const dx = Math.sin(t * .31) * 7 + sh, dy = Math.cos(t * .23) * 5 + Math.cos(t * 11.7) * .5, rot = Math.sin(t * .17) * .28;
  CAMEL.style.transformOrigin = `${cx}px ${cy}px`;
  CAMEL.style.transform = `translate(${960 - cx + dx}px,${540 - cy + dy}px) scale(${z}) rotate(${rot}deg)`;
  // redupkan elemen lain saat punch
  const pk = PUNCH.find(p => t >= p.t0 && t < p.t1 + .4);
  S.querySelectorAll('.dimmable').forEach(e => e.style.filter = pk ? 'brightness(.35)' : '');
  // glitch di setiap potongan
  const c = CUTS.find(c => c.kind !== 'none' && t >= c.t && t < c.t + .22);
  if (c) { rnd = Math.floor(t * 90) + 3; let h = ''; for (let i = 0; i < 7; i++) { const y = rng() * 1080, hh = 4 + rng() * 40, col = rng() < .5 ? 'rgba(0,255,255,.35)' : 'rgba(255,0,90,.35)'; h += `<div style="position:absolute;left:0;right:0;top:${y}px;height:${hh}px;background:${col};transform:translateX(${(rng() - .5) * 120}px)"></div>`; } G.innerHTML = h; S.style.filter = `drop-shadow(${(rng() - .5) * 16}px 0 rgba(255,0,80,.7)) drop-shadow(${(rng() - .5) * 16}px 0 rgba(0,255,255,.7))`; CAMEL.style.transform += ` scale(${1 + (1 - (t - c.t) / .22) * .08})`; }
  else { G.innerHTML = ''; S.style.filter = ''; }
  drawNoise(t);
  document.getElementById('sweep').style.top = ((t * 160) % 1400 - 200) + 'px';
  document.getElementById('live').style.opacity = (Math.floor(t * 1.6) % 2) ? .45 : 1;
  const s = Math.floor(t); document.getElementById('tc').textContent = `00:${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  document.getElementById('prog').style.width = (t / TOTAL * 1920) + 'px';
  const light = LIGHT.some(([a, b]) => t >= a && t < b);
  document.getElementById('scan').style.opacity = light ? .3 : 1; document.getElementById('hud').style.opacity = light ? .55 : 1;
};
function SC0(t) { let s = { t0: 0, t1: TOTAL }; for (let i = 0; i < CUTS.length; i++) if (t >= CUTS[i].t) s = { t0: CUTS[i].t, t1: CUTS[i + 1] ? CUTS[i + 1].t : TOTAL }; return s; }
window.getSFX = () => SFX.sort((a, b) => a.t - b.t);

// ------------------------------------------------------------------ helper tampilan
const Y = '#e9f23a';
function seg(text, t0, css = 'left:140px;top:380px;width:1640px', opt = {}) { return kin(node('', css + ';font-weight:800;font-size:' + (opt.size || 92) + 'px;line-height:1.05;letter-spacing:-.02em' + (opt.color ? ';color:' + opt.color : ''), 'dimmable'), text, t0, opt); }
function paper(t0, css, inner = '', t1) { const n = node(inner, css, 'paper dimmable'); show(n, t0, 'up', t1); sfx(t0, 'paper', .6); return n; }
function label(text, t0, css, t1) { const n = node(text, css + ';font:600 24px "DejaVu Sans Mono";letter-spacing:.12em;color:#9a9a9a'); show(n, t0, 'fade', t1); return n; }
function chip(text, t0, css, t1, col) { const n = node(`<span class="chip" style="${col ? `border-color:${col};color:${col}` : ''}">${text}</span>`, css); show(n, t0, 'scale', t1); sfx(t0, 'click', .5); return n; }
function block(lbl, val, bg, fg, t0, css, t1) { const n = node(`<div class="blk" style="background:${bg};color:${fg}"><small>${lbl}</small><div>${val}</div></div>`, css); show(n, t0, 'up', t1); sfx(t0, 'beep', .4); return n; }
function steps(list, t0, gap, css, t1) {
  const n = node('<div style="display:flex;align-items:center">' + list.map((s, i) => `<div class="step" data-i="${i}">${s}</div>${i < list.length - 1 ? '<div style="font:800 56px Inter;color:#666;margin:0 26px">→</div>' : ''}`).join('') + '</div>', css);
  list.forEach((_, i) => sfx(t0 + i * gap, 'click', .6));
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .25); n.querySelectorAll('.step').forEach(e => { const i = +e.dataset.i, on = lt >= i * gap; e.style.borderColor = on ? Y : '#444'; e.style.color = on ? '#111' : '#bbb'; e.style.background = on ? Y : '#111'; e.style.transform = on && lt - i * gap < .3 ? `scale(${1.08 - .08 * eo((lt - i * gap) / .3)})` : ''; }); });
  return n;
}

// ================================================================== ADEGAN EPISODE 02
// --- 0 basmalah
scene(0, 1.5, { cut: 'none' });
arw(node('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'left:0;right:0;top:420px;text-align:center;font-size:110px;color:#fff'), .1, 1.0);

// --- 1 hamdalah + judul file
scene(1.5, 8.9, { cut: 'glitch' });
arw(node('الْحَمْدُ لِلَّهِ', 'left:0;right:0;top:150px;text-align:center;font-size:84px;color:#fff'), 1.6, .5);
label('LANJUTAN KAJIAN · <span class="ar" style="font-size:34px;letter-spacing:0">عُلُومُ الْقُرْآنِ</span>', 3.0, 'left:140px;top:360px');
seg('kehormatan-kehormatan', 5.2, 'left:140px;top:430px;width:1640px', { size: 104, iv: .04 });
seg('[Al-Qur\'an Al-Karim]', 6.4, 'left:140px;top:560px;width:1640px', { size: 104, iv: .05, marks: [7.6] });
chip('FILE 02 · <span class="ar">حُرْمَةُ الْقُرْآنِ</span>', 3.0, 'left:140px;top:760px');
chip('<span class="ar">مقدمة تفسير القرطبي</span>', 7.0, 'left:620px;top:760px', null, '#cfcfcf');

// --- 2 kehormatan: menghadap kiblat (kartu dalil)
scene(8.9, 18.3, { cut: 'glitch' });
label('KEHORMATAN · 01', 9.0, 'left:160px;top:150px');
const k1 = paper(8.95, 'left:160px;top:200px;width:1600px;height:640px');
k1.innerHTML = `<div class="hd ab" style="left:60px;top:40px">DALIL · <span class="ar" style="letter-spacing:0;font-size:30px">مِنْ حُرْمَةِ الْقُرْآنِ</span></div>`;
arw(node('أَنْ يَسْتَقْبِلَ [الْقِبْلَةَ]', 'left:220px;width:1480px;top:290px;text-align:center;font-size:120px;color:#151515'), 9.0, 1.2, { marks: [10.4] });
kin(node('', 'left:260px;top:500px;width:1400px;font:700 46px Inter;color:#222;text-align:center'), 'ketika hendak membaca Al-Qur\'an, [menghadap kiblat]', 10.5, { iv: .035, marks: [12.6] });
arw(node('بِأَنَّهُ أَشْرَفُ [الْجِهَاتِ]', 'left:220px;width:1480px;top:600px;text-align:center;font-size:76px;color:#151515'), 14.1, 1.0, { marks: [16.6] });
kin(node('', 'left:260px;top:730px;width:1400px;font:600 36px Inter;color:#444;text-align:center'), 'kerana kiblat itu [semulia-mulia arah]', 15.9, { iv: .035, marks: [17.3] });
stamp('ADAB', 'left:1520px;top:230px', 12.0, 18.3);

// --- 3 blueprint: menghadap vs membelakangi kiblat
scene(18.3, 25.7, { cut: 'glitch' });
const bp = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(bp, 18.3, 'fade', 25.7, .3);
label('BLUEPRINT · ARAH MEMBACA', 18.5, 'left:120px;top:110px;color:#cfe0ff');
const kaaba = `<rect x="880" y="190" width="160" height="150" fill="none" stroke="#fff" stroke-width="4" data-d="620"/><line x1="880" y1="230" x2="1040" y2="230" stroke="#e9f23a" stroke-width="6" data-d="160" data-del=".3"/>`;
const fig = (x, flip) => `<g transform="translate(${x},520) scale(${flip ? -1 : 1},1)"><circle cx="0" cy="0" r="38" fill="none" stroke="#fff" stroke-width="4" data-d="240"/><path d="M0 40 L0 190 M0 80 L-60 140 M0 80 L60 130 M0 190 L-50 300 M0 190 L60 300" fill="none" stroke="#fff" stroke-width="4" data-d="600"/><rect x="40" y="110" width="70" height="50" fill="none" stroke="#e9f23a" stroke-width="4" data-d="240" data-del=".4"/></g>`;
svgDraw(`<svg width="1920" height="1080">${kaaba}${fig(600, false)}${fig(1320, true)}
<path d="M640 470 Q760 330 875 290" fill="none" stroke="#2fae5b" stroke-width="6" stroke-dasharray="14 12" data-d="400" data-del=".6"/>
</svg>`, 'left:0;top:0', 18.4, 1.2);
const ok = node('<div style="font:800 40px Inter;color:#2fae5b">✓ menghadap kiblat</div>', 'left:470px;top:880px'); show(ok, 19.6, 'up');
const no = node('<div style="font:800 40px Inter;color:#ffb3ae">membelakangi kiblat</div>', 'left:1130px;top:880px'); show(no, 21.0, 'up');
seg('lain [pahalanya]', 23.4, 'left:120px;top:180px;width:900px', { size: 70, iv: .05, marks: [24.6] });

// --- 4 kenapa? dua pahala
scene(25.7, 31.3, { cut: 'hard' });
seg('Kenapa?', 25.75, 'left:140px;top:200px;width:1000px', { size: 120, iv: .06 });
block('PAHALA 01', 'membaca<br>Al-Qur\'an', Y, '#111', 26.6, 'left:140px;top:520px', 31.3);
const plus = node('<div style="font:800 110px Inter;color:#888">+</div>', 'left:500px;top:540px'); show(plus, 28.4, 'scale');
block('PAHALA 02', 'duduk menghadap<br>kiblat', '#ebe6d6', '#111', 28.9, 'left:620px;top:520px', 31.3);
const pan = node('<div style="width:620px;height:420px;background:#0e0e0e;border:2px solid #2a2a2a;padding:30px"><div class="mono" style="color:#888;font-size:20px">CATATAN</div><div style="font:700 40px Inter;margin-top:24px;line-height:1.3">ada pahala membaca,<br>ada pula pahala<br><span style="color:#e9f23a">menghadap kiblat</span></div></div>', 'left:1160px;top:360px');
show(pan, 27.2, 'left');

// --- 5 menguap
scene(31.3, 42.3, { cut: 'glitch' });
label('KEHORMATAN · 02', 31.4, 'left:160px;top:150px');
paper(31.35, 'left:160px;top:200px;width:1600px;height:640px');
arw(node('أَنْ يُمْسِكَ عَنِ الْقِرَاءَةِ إِذَا [تَثَاءَبَ]', 'left:220px;width:1480px;top:280px;text-align:center;font-size:96px;color:#151515'), 31.4, 2.6, { marks: [34.3] });
arw(node('لِأَنَّهُ مِنَ [الشَّيْطَانِ]', 'left:220px;width:1480px;top:430px;text-align:center;font-size:76px;color:#7a1f1a'), 34.6, 1.2, { marks: [41.0] });
kin(node('', 'left:260px;top:600px;width:1400px;font:700 46px Inter;color:#222;text-align:center'), 'berhenti membaca ketika [menguap]', 36.5, { iv: .04, marks: [38.6] });
kin(node('', 'left:260px;top:700px;width:1400px;font:600 36px Inter;color:#444;text-align:center'), 'kerana menguap itu daripada setan', 40.2, { iv: .035 });
stamp('BERHENTI', 'left:1440px;top:220px', 37.6, 42.3);

// --- 6 jangan dicampur: merusak huruf
scene(42.3, 49.9, { cut: 'glitch' });
seg('jangan [dicampur]', 42.4, 'left:140px;top:170px;width:1640px', { size: 96, iv: .045, marks: [44.2] });
kin(node('', 'left:140px;top:330px;width:1640px;font:600 44px Inter;color:#bbb'), 'menguap sambil membaca akan [merusak penyebutan huruf]', 45.2, { iv: .03, marks: [47.2] });
steps(['menguap', 'berhenti', 'lanjut membaca'], 46.0, .9, 'left:140px;top:560px', 49.9);
punch(47.2, 48.7, 1190, 360, 1.6);

// --- 7 isti'adzah
scene(49.9, 57.7, { cut: 'glitch' });
label('KEHORMATAN · 03', 50.0, 'left:160px;top:150px');
paper(49.95, 'left:160px;top:200px;width:1600px;height:640px');
arw(node('أَنْ يَسْتَعِيذَ بِاللَّهِ مِنَ الشَّيْطَانِ [عِنْدَ ابْتِدَائِهِ]', 'left:220px;width:1480px;top:300px;text-align:center;font-size:92px;color:#151515'), 50.0, 2.8, { marks: [53.2] });
kin(node('', 'left:260px;top:520px;width:1400px;font:700 46px Inter;color:#222;text-align:center'), 'mengucap [a\'udzubillah] ketika memulai membaca', 53.8, { iv: .035, marks: [55.4] });
arw(node('أَعُوذُ بِاللَّهِ', 'left:220px;width:1480px;top:640px;text-align:center;font-size:84px;color:#7a5a12'), 55.6, .8);

// --- 8 dua tingkat bacaan (dosier)
scene(57.7, 70.2, { cut: 'glitch' });
label('BACAAN TA\'AWWUDZ', 57.8, 'left:140px;top:140px');
const lo = node(`<div style="width:820px;padding:40px;background:#0e0e0e;border-left:10px solid #888"><div class="mono" style="color:#888;font-size:22px">KURANG-KURANGNYA</div></div>`, 'left:140px;top:210px'); show(lo, 57.8, 'left');
arw(node('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:180px;width:760px;top:280px;text-align:right;font-size:58px;color:#fff'), 58.2, 1.8);
const hi = node(`<div style="width:820px;padding:40px;background:#0e0e0e;border-left:10px solid #e9f23a"><div class="mono" style="color:#e9f23a;font-size:22px">SELENGKAP-LENGKAPNYA</div></div>`, 'left:140px;top:520px'); show(hi, 61.5, 'left');
arw(node('أَعُوذُ بِاللَّهِ [السَّمِيعِ الْعَلِيمِ] مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:170px;width:780px;top:590px;text-align:right;font-size:52px;color:#fff'), 61.8, 2.6, { marks: [64.8] });
kin(node('', 'left:1060px;top:300px;width:720px;font:700 40px Inter;color:#ddd;line-height:1.3'), 'lalu dilanjutkan dengan [basmalah] pun boleh', 66.6, { iv: .035, marks: [68.6] });
chip('yang penting: <span class="ar">أَعُوذُ بِاللَّهِ</span>', 68.4, 'left:1060px;top:520px');
