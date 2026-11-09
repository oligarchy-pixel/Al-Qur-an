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
  document.getElementById('scan').style.opacity = light ? .3 : 1; document.getElementById('vig').style.opacity = light ? .35 : 1; document.getElementById('hud').style.opacity = light ? .55 : 1;
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


// ------------------------------------------------------------------ komponen investigasi
const IVORY = '#f7f2e7', GOLD = '#b8913f', ESP = '#2b2219';
// ilustrasi garis (tanpa wajah)
const ILL = {
  cordoba: `<svg viewBox="0 0 300 220"><rect width="300" height="220" fill="#efe4cf"/>${[0,1,2,3].map(i=>`<g transform="translate(${10+i*72},40)"><path d="M0 170 V70 Q0 10 32 10 Q64 10 64 70 V170" fill="none" stroke="#7a2e1d" stroke-width="5"/>${[0,1,2,3,4,5,6].map(k=>`<path d="M${4+k*8} ${14+Math.abs(3-k)*4} L${2+k*9} 40" stroke="${k%2?'#b8452c':'#f3e6c8'}" stroke-width="7"/>`).join('')}</g>`).join('')}<rect y="205" width="300" height="15" fill="#c9b48c"/></svg>`,
  kaaba: `<svg viewBox="0 0 300 220"><rect width="300" height="220" fill="#ece3d0"/><path d="M0 180 H300" stroke="#8b7b5a" stroke-width="3"/><rect x="100" y="70" width="100" height="110" fill="#1c1c1c"/><rect x="100" y="92" width="100" height="12" fill="#c9a24a"/><path d="M40 180 V120 M260 180 V120" stroke="#8b7b5a" stroke-width="4"/>${[0,1,2,3,4,5].map(k=>`<circle cx="${30+k*48}" cy="200" r="5" fill="#6b5a3e"/>`).join('')}</svg>`,
  kitab: `<svg viewBox="0 0 300 220"><rect width="300" height="220" fill="#e9dcc1"/><rect x="80" y="20" width="140" height="185" rx="6" fill="#5b2a1c"/><rect x="92" y="34" width="116" height="157" fill="none" stroke="#c9a24a" stroke-width="3"/><circle cx="150" cy="112" r="34" fill="none" stroke="#c9a24a" stroke-width="3"/><path d="M150 82 L156 106 L180 112 L156 118 L150 142 L144 118 L120 112 L144 106Z" fill="#c9a24a"/></svg>`,
  termez: `<svg viewBox="0 0 300 220"><rect width="300" height="220" fill="#eadfc8"/><path d="M60 190 V110 H240 V190" fill="#d8c29a" stroke="#7a5a32" stroke-width="4"/><path d="M110 110 Q150 40 190 110" fill="#c4a26c" stroke="#7a5a32" stroke-width="4"/><rect x="135" y="140" width="30" height="50" fill="#7a5a32"/><path d="M0 190 H300" stroke="#7a5a32" stroke-width="3"/></svg>`,
};
// polaroid bergantung + foto ilustrasi
function polaroid(kind, cap, css, t0, t1, rot = -5) {
  const n = node(`<div style="width:300px;padding:14px 14px 50px;background:#f4f1ea;box-shadow:0 20px 50px rgba(0,0,0,.6);position:relative">
  <div style="position:absolute;left:50%;top:-30px;width:2px;height:34px;background:#999"></div><div style="position:absolute;left:calc(50% - 9px);top:-40px;width:18px;height:18px;border-radius:50%;background:#c33"></div>
  <div style="height:220px;overflow:hidden">${ILL[kind]}</div>
  <div style="position:absolute;left:14px;bottom:12px;font:600 15px 'DejaVu Sans Mono';color:#555;letter-spacing:.08em">ILUSTRASI · ${cap}</div></div>`, css);
  n.dataset.rot = rot; sfx(t0, 'paper', .7);
  return item(t0, t1, n, (lt, t, it) => { const k = eo(lt / .5), sw = Math.sin(lt * 2.2) * 2.2 * Math.exp(-lt * .6); n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25); n.style.transform = `translateY(${(1 - k) * -120}px) rotate(${rot + sw}deg)`; });
}
// dosier gelap: polaroid + panel biodata + blok angka
function entity(t0, t1, o) {
  const n = node(`<div style="width:${o.w || 860}px;background:#0b0b0b;border:1px solid #2c2c2c;padding:34px 38px 30px 38px;min-height:${o.h || 560}px;position:relative">
    <div class="mono" style="font-size:18px;color:${Y}">● ${o.tag}</div>
    <div style="font:800 46px Inter;margin-top:10px;line-height:1.1">${o.name}</div>
    ${o.ar ? `<div class="ar" style="font-size:40px;color:#ddd;margin-top:6px;text-align:left">${o.ar}</div>` : ''}
    <div style="margin-top:18px;display:grid;grid-template-columns:150px 1fr;row-gap:10px;font:500 22px Inter;color:#cfcfcf">${o.rows.map(r => `<div class="mono" style="font-size:16px;color:#888;padding-top:4px">${r[0]}</div><div class="erow">${r[1]}</div>`).join('')}</div>
    <div style="display:flex;gap:10px;margin-top:22px">${(o.blocks || []).map(b => `<div style="flex:1;padding:12px 14px;background:${b[2]};color:${b[3] || '#111'}"><div class="mono" style="font-size:13px;opacity:.8">${b[0]}</div><div style="font:800 34px Inter">${b[1]}</div></div>`).join('')}</div>
    <div class="mono" style="margin-top:16px;font-size:15px;color:#777">SUMBER: ${o.src}</div></div>`, o.css);
  sfx(t0, 'whoosh', .5);
  item(t0, t1, n, (lt, t, it) => { const k = eo(lt / .45); n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25); n.style.transform = `translateX(${(1 - k) * 80}px)`; n.querySelectorAll('.erow').forEach((e, i) => { e.style.opacity = clamp((lt - .4 - i * .25) / .3); }); });
  (o.rows || []).forEach((_, i) => sfx(t0 + .4 + i * .25, 'tick', .6));
  return n;
}
// jendela browser tema Gading & Emas: tab baru, ketik Arab, pindai rak kitab, hasil, klik, rincian
function searchFind(t0, t1, o) {
  const T = o.times || {};
  const typeAt = t0 + (T.type ?? .5), scanAt = t0 + (T.scan ?? 2.0), resAt = t0 + (T.res ?? 3.2), clickAt = t0 + (T.click ?? 4.4), detAt = t0 + (T.det ?? 4.8);
  const res = o.results;
  const n = node(`<div style="width:1500px;height:860px;background:${IVORY};border-radius:14px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.7);color:${ESP};font-family:Inter">
   <div style="height:58px;background:#e8dfcc;display:flex;align-items:flex-end;padding:0 18px;gap:8px">
     <div style="background:#efe7d6;padding:10px 22px;border-radius:10px 10px 0 0;font:600 18px Inter;color:#8a7a60">Kajian · Hurmatul Qur'an</div>
     <div class="tab2" style="background:${IVORY};padding:10px 22px;border-radius:10px 10px 0 0;font:600 18px Inter">Pencarian kitab</div>
     <div class="plus" style="font:700 30px Inter;color:#8a7a60;padding:0 10px 8px">+</div></div>
   <div style="height:70px;display:flex;align-items:center;padding:0 24px;gap:16px;border-bottom:1px solid #e3d8c2">
     <div style="font:700 20px Inter;color:${GOLD}">◆ maktabah</div>
     <div style="flex:1;height:46px;border:2px solid ${GOLD};border-radius:23px;display:flex;align-items:center;justify-content:flex-end;padding:0 22px"><span class="q ar" style="font-size:30px"></span></div>
     <div style="background:${GOLD};color:#fff;font:700 18px Inter;padding:12px 22px;border-radius:22px">CARI</div></div>
   <div style="display:flex;height:732px">
     <div class="shelf" style="width:330px;border-right:1px solid #e3d8c2;padding:20px;position:relative">
       <div class="mono" style="font-size:14px;color:#8a7a60">RAK KITAB</div>
       ${o.shelf.map((b, i) => `<div class="bk" style="margin-top:12px;padding:12px 14px;border:1px solid #e3d8c2;border-radius:8px;font:600 17px Inter;display:flex;justify-content:space-between"><span>${b[0]}</span><span class="ar" style="font-size:20px;color:#8a7a60">${b[1]}</span></div>`).join('')}
       <div class="scan" style="position:absolute;left:0;right:0;height:60px;background:linear-gradient(transparent,rgba(184,145,63,.25),transparent)"></div></div>
     <div class="list" style="flex:1;padding:20px 28px;overflow:hidden;position:relative">
       <div class="cnt mono" style="font-size:15px;color:#8a7a60"></div>
       <div class="rows">${res.map((r, i) => `<div class="rr" data-i="${i}" style="margin-top:14px;padding:16px 18px;border:1px solid #e6dcc6;border-radius:10px;background:#fffdf8">
          <div style="display:flex;justify-content:space-between"><span style="font:700 19px Inter">${r.title}</span><span class="mono" style="font-size:14px;color:${GOLD}">${r.tag}</span></div>
          <div class="ar" style="font-size:26px;margin-top:6px;text-align:right">${r.ar}</div></div>`).join('')}</div></div>
     <div class="det" style="width:470px;border-left:1px solid #e3d8c2;padding:24px;background:#fbf7ee">
       <div class="mono" style="font-size:14px;color:#8a7a60">RINCIAN SUMBER</div>
       <div style="font:800 26px Inter;margin-top:10px">${o.det.title}</div>
       <div class="ar" style="font-size:26px;margin-top:6px;color:${GOLD}">${o.det.ar}</div>
       ${o.det.rows.map(r => `<div class="dr" style="margin-top:12px;font:500 18px Inter"><span class="mono" style="font-size:13px;color:#8a7a60;display:block">${r[0]}</span>${r[1]}</div>`).join('')}
       <div class="dq ar" style="margin-top:18px;padding:16px;background:#fff;border-right:6px solid ${GOLD};font-size:30px;line-height:1.7">${o.det.quote}</div></div></div></div>
   <div class="curs" style="position:absolute;width:28px;height:28px"><svg width="28" height="28"><path d="M2 2 L2 24 L8 18 L13 27 L17 25 L12 16 L21 16Z" fill="#fff" stroke="#000" stroke-width="2"/></svg></div>`, o.css || 'left:210px;top:110px');
  const q = n.querySelector('.q'), word = o.q, rows = n.querySelectorAll('.rr'), books = n.querySelectorAll('.bk'), det = n.querySelector('.det'), cur = n.querySelector('.curs'), cnt = n.querySelector('.cnt'), tab2 = n.querySelector('.tab2'), scan = n.querySelector('.scan'), dq = n.querySelector('.dq');
  sfx(t0 + .2, 'click', .7); sfx(clickAt, 'click', .9); for (let i = 0; i < word.length; i += 2) sfx(typeAt + i * .05, 'tick', .55); sfx(scanAt, 'draw', .6); sfx(detAt, 'paper', .6);
  const pick = o.pick || 0;
  item(t0, t1, n, (lt, t, it) => {
    const k = eo(lt / .45);
    n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .3);
    n.style.transform = `translateY(${(1 - k) * 60}px) scale(${.96 + .04 * k})`;
    tab2.style.opacity = t > t0 + .2 ? 1 : 0;
    q.textContent = word.slice(0, clamp(Math.floor((t - typeAt) / .05), 0, word.length));
    scan.style.top = (60 + ((t - scanAt) * 520) % 640) + 'px'; scan.style.opacity = t > scanAt && t < resAt + .4 ? 1 : 0;
    books.forEach((b, i) => { const on = t > scanAt + i * .18 && t < resAt + .4; b.style.background = (on && Math.floor((t - scanAt) / .18) === i) ? '#f1e3c2' : (t > resAt && i === (o.shelfPick || 0) ? '#f1e3c2' : ''); b.style.borderColor = t > resAt && i === (o.shelfPick || 0) ? GOLD : '#e3d8c2'; });
    cnt.textContent = t > resAt ? `${o.count || res.length} hasil ditemukan` : (t > scanAt ? 'memindai rak kitab…' : '');
    rows.forEach((r, i) => { const v = clamp((t - resAt - i * .18) / .3); r.style.opacity = v; r.style.transform = `translateY(${(1 - v) * 20}px)`; const sel = t > clickAt && i === pick; r.style.background = sel ? '#fff4d1' : '#fffdf8'; r.style.borderColor = sel ? GOLD : '#e6dcc6'; });
    const ls = t > resAt + 1 ? Math.min(1, (t - resAt - 1) / .8) * (o.scroll || 0) : 0; n.querySelector('.rows').style.transform = `translateY(${-ls}px)`;
    det.style.opacity = clamp((t - detAt) / .35); det.querySelectorAll('.dr').forEach((d, i) => d.style.opacity = clamp((t - detAt - .3 - i * .2) / .3));
    dq.style.opacity = clamp((t - detAt - .8) / .4);
    // kursor: ke tab +, lalu ke hasil terpilih
    const P = [[1490, 40, t0], [1490, 40, t0 + .2], [900, 110, typeAt], [900, 110, resAt], [700, 250 + pick * 130 - ls, clickAt], [1250, 300, detAt + .6]];
    let cx = P[0][0], cy = P[0][1];
    for (let j = 0; j < P.length - 1; j++) if (t >= P[j][2] && t <= P[j + 1][2]) { const u = eio((t - P[j][2]) / Math.max(.01, P[j + 1][2] - P[j][2])); cx = P[j][0] + (P[j + 1][0] - P[j][0]) * u; cy = P[j][1] + (P[j + 1][1] - P[j][1]) * u; } else if (t > P[P.length - 1][2]) { cx = P[P.length - 1][0]; cy = P[P.length - 1][1]; }
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
    const clk = [t0 + .2, clickAt].some(c => t >= c && t < c + .15); cur.style.transform = clk ? 'scale(.8)' : '';
  });
  return n;
}
// peta jaringan kehormatan (kanvas)
function netMap(t0, t1, labels, o = {}) {
  const n = node('<canvas width="1920" height="1080"></canvas>', 'left:0;top:0');
  const cv = n.querySelector('canvas'), g = cv.getContext('2d');
  let r = 7; const R = () => (r = (r * 16807) % 2147483647) / 2147483647;
  const N = 140, P = [];
  for (let i = 0; i < N; i++) { const big = i < labels.length; const a = i / N * Math.PI * 2; P.push({ a, cx: o.cx || 1120, cy: o.cy || 540, x2: (o.cx || 1120) + (R() - .5) * (big ? 760 : 1000), y2: (o.cy || 540) + (R() - .5) * (big ? 640 : 820), c: big ? Y : ['#4aa3ff', '#ff6a3d', '#b58bff', '#7fd6c2', '#888'][Math.floor(R() * 5)], s: big ? 9 : 2 + R() * 3, big, lab: labels[i] }); }
  const L = []; for (let i = 0; i < 260; i++) L.push([Math.floor(R() * N), Math.floor(R() * labels.length)]);
  sfx(t0 + .9, 'impact', .4);
  item(t0, t1, n, (lt, t, it) => {
    g.clearRect(0, 0, 1920, 1080); const A = clamp(lt / .3) * clamp((it.t1 - t) / .3); g.globalAlpha = A;
    const ring = eo(lt / .8), spread = eio((lt - .9) / 1.4), rr = 260;
    if (lt < 1.2) { g.strokeStyle = Y; g.lineWidth = 2; g.beginPath(); g.arc(o.cx || 1120, o.cy || 540, rr * ring, 0, Math.PI * 2 * ring); g.stroke(); }
    const pos = P.map((p, i) => { const sx = p.cx + Math.cos(p.a) * rr, sy = p.cy + Math.sin(p.a) * rr; const wob = Math.sin(t * .7 + i) * 6; return [sx + (p.x2 - sx) * spread + wob, sy + (p.y2 - sy) * spread + Math.cos(t * .6 + i) * 5]; });
    g.lineWidth = 1;
    L.forEach(([a, b], i) => { if (lt < .8 + i * .004) return; g.strokeStyle = 'rgba(255,170,60,.12)'; g.beginPath(); g.moveTo(...pos[a]); g.lineTo(...pos[b]); g.stroke(); });
    P.forEach((p, i) => { if (lt < .5 + i * .006) return; g.fillStyle = p.c; g.beginPath(); g.arc(...pos[i], p.s, 0, Math.PI * 2); g.fill(); if (p.big && spread > .6) { g.globalAlpha = A * clamp((spread - .6) / .3); g.font = '600 20px "DejaVu Sans Mono"'; g.fillStyle = '#ddd'; g.fillText(p.lab, pos[i][0] + 14, pos[i][1] + 5); g.globalAlpha = A; } });
  });
  return n;
}
// ================================================================== ADEGAN EPISODE 02
// --- 0 basmalah
scene(0, 1.5, { cut: 'none' });
arw(node('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'left:0;right:0;top:420px;text-align:center;font-size:110px;color:#fff'), .1, 1.0);

// --- 1 hamdalah + peta jaringan kehormatan
scene(1.5, 8.9, { cut: 'glitch' });
const KEH = ['01 menghadap kiblat', '02 berhenti saat menguap', "03 ta'awwudz", '04 tidak memotong bacaan', '05 tartil & tadabbur', '06 shadaqallahul azhim', '07 menurut tertib', '08 mushaf di tempat tinggi', '09 tidak dihapus air liur', '10 dibakar / dikubur', '11 hak mata', '12 tidak menakwil sendiri', '13 tidak melampaui lagu', '14 tulisan yang bagus', '15 tidak di pasar', '16 khatam lalu mulai lagi'];
netMap(1.5, 8.9, KEH, { cx: 1180, cy: 560 });
arw(node('الْحَمْدُ لِلَّهِ', 'left:140px;top:150px;font-size:70px;color:#fff;text-align:left;width:600px'), 1.6, .5);
label('LANJUTAN KAJIAN · <span class="ar" style="font-size:34px;letter-spacing:0">عُلُومُ الْقُرْآنِ</span>', 3.0, 'left:140px;top:290px');
seg('kehormatan-<br>kehormatan', 5.0, 'left:140px;top:350px;width:760px', { size: 78, iv: .035 });
seg('[Al-Qur\'an Al-Karim]', 6.4, 'left:140px;top:540px;width:760px', { size: 78, iv: .045, marks: [7.7] });
kin(node('', 'left:140px;top:930px;font:500 30px Inter;color:#ddd'), '16 kehormatan. 1 kitab. 3 sumber diperiksa.', 3.4, { iv: .03 });

// --- 2 pencarian: dalil menghadap kiblat
scene(8.9, 14.05, { cut: 'glitch', light: 1 });
searchFind(8.9, 14.05, {
  q: 'أن يستقبل القبلة', count: 3, pick: 0, shelfPick: 0, times: { type: .45, scan: 1.4, res: 2.1, click: 2.9, det: 3.2 },
  shelf: [['Tafsir al-Qurthubi', 'القرطبي'], ['Nawadir al-Ushul', 'نوادر الأصول'], ["At-Tibyan · an-Nawawi", 'التبيان'], ['Ihya Ulumiddin', 'الإحياء']],
  results: [
    { title: 'Muqaddimah Tafsir al-Qurthubi · bab hurmatul Qur\'an', tag: 'COCOK', ar: 'وَمِنْ حُرْمَتِهِ أَنْ يَسْتَقْبِلَ الْقِبْلَةَ لِقِرَاءَتِهِ' },
    { title: "Nawadir al-Ushul · al-Hakim at-Tirmidzi", tag: 'ASAL NUKILAN', ar: 'حُرْمَةُ الْقُرْآنِ' },
    { title: 'At-Tibyan fi Adab Hamalatil Qur\'an', tag: 'TERKAIT', ar: 'وَيُسْتَحَبُّ أَنْ يَسْتَقْبِلَ الْقِبْلَةَ' }],
  det: { title: 'Al-Jami\' li Ahkam al-Qur\'an', ar: 'الْجَامِعُ لِأَحْكَامِ الْقُرْآنِ', rows: [['PENULIS', 'Imam al-Qurthubi (w. 671 H)'], ['BAGIAN', 'Muqaddimah · hurmatul Qur\'an'], ['DINUKIL DARI', 'Nawadir al-Ushul · al-Hakim at-Tirmidzi']], quote: 'وَمِنْ حُرْمَتِهِ أَنْ يَسْتَقْبِلَ الْقِبْلَةَ لِقِرَاءَتِهِ' }
});

// --- 3 kartu dalil
scene(14.05, 18.3, { cut: 'glitch' });
label('KEHORMATAN · 01', 14.1, 'left:160px;top:150px');
paper(14.05, 'left:160px;top:200px;width:1600px;height:640px');
arw(node('أَنْ يَسْتَقْبِلَ [الْقِبْلَةَ]', 'left:220px;width:1480px;top:250px;text-align:center;font-size:110px;color:#151515'), 14.1, .5, { marks: [14.7] });
kin(node('', 'left:260px;top:430px;width:1400px;font:700 44px Inter;color:#222;text-align:center'), 'ketika hendak membaca Al-Qur\'an, [menghadap kiblat]', 14.2, { iv: .02, marks: [15.3] });
arw(node('بِأَنَّهُ أَشْرَفُ [الْجِهَاتِ]', 'left:220px;width:1480px;top:540px;text-align:center;font-size:76px;color:#151515'), 14.4, .9, { marks: [16.6] });
kin(node('', 'left:260px;top:690px;width:1400px;font:600 36px Inter;color:#444;text-align:center'), 'kerana kiblat itu [semulia-mulia arah]', 15.9, { iv: .035, marks: [17.3] });
stamp('ADAB', 'left:1520px;top:230px', 15.0, 18.3);

// --- 4 blueprint: menghadap vs membelakangi kiblat
scene(18.3, 25.7, { cut: 'glitch' });
const bp = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(bp, 18.3, 'fade', 25.7, .3);
label('BLUEPRINT · ARAH MEMBACA', 18.5, 'left:120px;top:110px;color:#cfe0ff');
const kaaba = `<rect x="880" y="190" width="160" height="150" fill="none" stroke="#fff" stroke-width="4" data-d="620"/><line x1="880" y1="230" x2="1040" y2="230" stroke="#e9f23a" stroke-width="6" data-d="160" data-del=".3"/>`;
const fig = (x, flip) => `<g transform="translate(${x},520) scale(${flip ? -1 : 1},1)"><circle cx="0" cy="0" r="38" fill="none" stroke="#fff" stroke-width="4" data-d="240"/><path d="M0 40 L0 190 M0 80 L-60 140 M0 80 L60 130 M0 190 L-50 300 M0 190 L60 300" fill="none" stroke="#fff" stroke-width="4" data-d="600"/><rect x="40" y="110" width="70" height="50" fill="none" stroke="#e9f23a" stroke-width="4" data-d="240" data-del=".4"/></g>`;
svgDraw(`<svg width="1920" height="1080">${kaaba}${fig(600, false)}${fig(1320, true)}
<path d="M640 470 Q760 330 875 290" fill="none" stroke="#2fae5b" stroke-width="6" stroke-dasharray="14 12" data-d="400" data-del=".6"/></svg>`, 'left:0;top:0', 18.4, 1.2);
const ok = node('<div style="font:800 40px Inter;color:#2fae5b">✓ menghadap kiblat</div>', 'left:470px;top:880px'); show(ok, 19.6, 'up');
const no = node('<div style="font:800 40px Inter;color:#ffb3ae">membelakangi kiblat</div>', 'left:1130px;top:880px'); show(no, 21.0, 'up');
seg('lain [pahalanya]', 23.4, 'left:120px;top:180px;width:900px', { size: 70, iv: .05, marks: [24.6] });

// --- 5 kenapa? dua pahala
scene(25.7, 31.3, { cut: 'hard' });
seg('Kenapa?', 25.75, 'left:140px;top:200px;width:1000px', { size: 120, iv: .06 });
block('PAHALA 01', 'membaca<br>Al-Qur\'an', Y, '#111', 26.6, 'left:140px;top:520px', 31.3);
const plus = node('<div style="font:800 110px Inter;color:#888">+</div>', 'left:510px;top:560px'); show(plus, 28.4, 'scale');
block('PAHALA 02', 'duduk menghadap<br>kiblat', '#ebe6d6', '#111', 28.9, 'left:620px;top:520px', 31.3);
const pan = node('<div style="width:620px;height:420px;background:#0e0e0e;border:2px solid #2a2a2a;padding:30px"><div class="mono" style="color:#888;font-size:20px">CATATAN</div><div style="font:700 40px Inter;margin-top:24px;line-height:1.3">ada pahala membaca,<br>ada pula pahala<br><span style="color:#e9f23a">menghadap kiblat</span></div></div>', 'left:1160px;top:360px');
show(pan, 27.2, 'left');

// --- 6 menguap (kartu + dosier Mujahid)
scene(31.3, 42.3, { cut: 'glitch' });
label('KEHORMATAN · 02', 31.4, 'left:120px;top:150px');
paper(31.35, 'left:120px;top:200px;width:1000px;height:680px');
arw(node('أَنْ يُمْسِكَ عَنِ الْقِرَاءَةِ إِذَا [تَثَاءَبَ]', 'left:150px;width:940px;top:250px;text-align:center;font-size:66px;color:#151515'), 31.4, 2.6, { marks: [34.3] });
arw(node('لِأَنَّهُ مِنَ [الشَّيْطَانِ]', 'left:150px;width:940px;top:380px;text-align:center;font-size:62px;color:#7a1f1a'), 34.6, 1.2, { marks: [41.0] });
kin(node('', 'left:170px;top:540px;width:900px;font:700 40px Inter;color:#222;text-align:center'), 'berhenti membaca ketika [menguap]', 36.5, { iv: .04, marks: [38.6] });
kin(node('', 'left:170px;top:640px;width:900px;font:600 32px Inter;color:#444;text-align:center'), 'kerana menguap itu daripada setan', 40.2, { iv: .035 });
stamp('BERHENTI', 'left:820px;top:760px', 37.6, 42.3);
polaroid('kaaba', 'MAKKAH', 'left:1520px;top:150px', 38.0, 42.3, 5);
entity(38.4, 42.3, { css: 'left:1170px;top:470px', w: 700, h: 380, tag: 'SUMBER TERKAIT · ATSAR', name: 'Mujahid bin Jabr', ar: 'مُجَاهِدُ بْنُ جَبْر', rows: [['WAFAT', 'Makkah · ±104 H'], ['GURU', "Ibnu 'Abbas · 30× menyetorkan Al-Qur'an"], ['ATSAR', 'menahan bacaan saat menguap']], src: 'Hilyatul Auliya · at-Tibyan' });

// --- 7 jangan dicampur: merusak huruf
scene(42.3, 49.9, { cut: 'glitch' });
seg('jangan [dicampur]', 42.4, 'left:140px;top:170px;width:1640px', { size: 96, iv: .045, marks: [44.2] });
kin(node('', 'left:140px;top:330px;width:1640px;font:600 44px Inter;color:#bbb'), 'menguap sambil membaca akan [merusak penyebutan huruf]', 45.2, { iv: .03, marks: [47.2] });
steps(['menguap', 'berhenti', 'lanjut membaca'], 46.0, .9, 'left:140px;top:560px', 49.9);
punch(47.2, 48.7, 1190, 360, 1.6);

// --- 8 isti'adzah: kartu + pencarian ayat
scene(49.9, 57.7, { cut: 'glitch' });
label('KEHORMATAN · 03', 50.0, 'left:160px;top:150px');
paper(49.95, 'left:160px;top:200px;width:1600px;height:640px');
arw(node('أَنْ يَسْتَعِيذَ بِاللَّهِ مِنَ الشَّيْطَانِ [عِنْدَ ابْتِدَائِهِ]', 'left:220px;width:1480px;top:300px;text-align:center;font-size:92px;color:#151515'), 50.0, 2.8, { marks: [53.2] });
kin(node('', 'left:260px;top:520px;width:1400px;font:700 46px Inter;color:#222;text-align:center'), 'mengucap [a\'udzubillah] ketika memulai membaca', 53.8, { iv: .035, marks: [55.4] });
arw(node('فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:220px;width:1480px;top:640px;text-align:center;font-size:54px;color:#7a5a12'), 55.4, 1.6);
chip('QS. AN-NAHL : 98', 56.2, 'left:1430px;top:770px', 57.7, '#7a5a12');

// --- 9 dua tingkat bacaan + dosier riwayat
scene(57.7, 70.2, { cut: 'glitch' });
label('BACAAN TA\'AWWUDZ', 57.8, 'left:140px;top:140px');
const lo = node(`<div style="width:820px;padding:40px;background:#0e0e0e;border-left:10px solid #888"><div class="mono" style="color:#888;font-size:22px">KURANG-KURANGNYA</div></div>`, 'left:140px;top:210px'); show(lo, 57.8, 'left');
arw(node('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:180px;width:760px;top:280px;text-align:right;font-size:58px;color:#fff'), 58.2, 1.8);
const hi = node(`<div style="width:820px;padding:40px;background:#0e0e0e;border-left:10px solid #e9f23a"><div class="mono" style="color:#e9f23a;font-size:22px">SELENGKAP-LENGKAPNYA</div></div>`, 'left:140px;top:520px'); show(hi, 61.5, 'left');
arw(node('أَعُوذُ بِاللَّهِ [السَّمِيعِ الْعَلِيمِ] مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:170px;width:780px;top:590px;text-align:right;font-size:52px;color:#fff'), 61.8, 2.6, { marks: [64.8] });
polaroid('kitab', 'SUNAN ABI DAWUD', 'left:1520px;top:110px', 62.6, 70.2, -4);
entity(63.0, 70.2, { css: 'left:1040px;top:430px', w: 820, h: 420, tag: 'JEJAK RIWAYAT · LAFAZ LENGKAP', name: "Abu Sa'id al-Khudri", ar: 'أَبُو سَعِيدٍ الْخُدْرِيُّ', rows: [['DIRIWAYATKAN', 'Abu Dawud 775 · at-Tirmidzi · Ibnu Majah 804'], ['KONTEKS', 'bacaan saat memulai salat malam'], ['CATATAN', 'sanadnya diperbincangkan para ahli hadis']], src: 'Sunan Abi Dawud · Sunan at-Tirmidzi' });
chip('lalu basmalah pun boleh', 66.6, 'left:140px;top:860px');
chip('yang penting: <span class="ar">أَعُوذُ بِاللَّهِ</span>', 68.4, 'left:620px;top:860px');

// ================================================================== MENIT 2 – AKHIR
function bpBg(t0, t1, title) { const b = node('', 'left:0;top:0;width:1920px;height:1080px', 'bp'); show(b, t0, 'fade', t1, .3); label('BLUEPRINT · ' + title, t0 + .1, 'left:120px;top:110px;color:#cfe0ff', t1); }
function keh(t, no, t1) { label('KEHORMATAN · ' + no, t, 'left:160px;top:150px', t1); }
const figS = (x, y, s = 1, extra = '') => `<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="0" r="38" fill="none" stroke="#fff" stroke-width="4" data-d="240"/><path d="M0 40 L0 190 M0 80 L-60 140 M0 80 L60 130 M0 190 L-50 300 M0 190 L60 300" fill="none" stroke="#fff" stroke-width="4" data-d="600"/>${extra}</g>`;

// --- 10 awal surah vs pertengahan surah
scene(70.2, 91.7, { cut: 'glitch' });
seg('kecuali di [awal surah]', 70.3, 'left:140px;top:150px;width:1640px', { size: 84, iv: .04, marks: [73.3] });
const cA = node(`<div style="width:780px;height:520px;background:#0e0e0e;border-top:8px solid ${Y};padding:34px"><div class="mono" style="color:${Y};font-size:22px">AWAL SURAH</div></div>`, 'left:140px;top:330px'); show(cA, 74.2, 'up');
arw(node('أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', 'left:170px;width:720px;top:430px;text-align:center;font-size:44px;color:#fff'), 74.6, 1.6);
arw(node('[بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ]', 'left:170px;width:720px;top:530px;text-align:center;font-size:52px;color:#fff'), 77.2, 1.4, { marks: [79.0] });
kin(node('', 'left:180px;top:680px;width:700px;font:700 32px Inter;color:#ddd;text-align:center'), "ta'awwudz + basmalah", 78.6, { iv: .04 });
const cB = node(`<div style="width:780px;height:520px;background:#0e0e0e;border-top:8px solid #888;padding:34px"><div class="mono" style="color:#aaa;font-size:22px">PERTENGAHAN SURAH</div></div>`, 'left:1000px;top:330px'); show(cB, 80.5, 'up');
kin(node('', 'left:1040px;top:430px;width:700px;font:800 60px Inter;color:#fff;text-align:center'), '[terserah]', 80.9, { iv: .06, marks: [82.0] });
kin(node('', 'left:1040px;top:560px;width:700px;font:600 30px Inter;color:#ccc;text-align:center;line-height:1.4'), "a'udzubillah saja boleh,\ntanpa bismillah pun boleh", 82.9, { iv: .03 });
chip('tidak mengurangi kehormatan Al-Qur\'an', 87.6, 'left:1040px;top:740px');

// --- 11 kehormatan 04: tidak memotong bacaan
scene(91.7, 104.7, { cut: 'glitch' });
keh(91.8, '04');
paper(91.75, 'left:160px;top:200px;width:1600px;height:640px');
arw(node('أَلَّا يَقْطَعَ الْقِرَاءَةَ سَاعَةً سَاعَةً [لِمُكَلِّمٍ آدَمِيٍّ]', 'left:220px;width:1480px;top:300px;text-align:center;font-size:84px;color:#151515'), 91.8, 6.5, { marks: [98.7] });
kin(node('', 'left:260px;top:520px;width:1400px;font:700 44px Inter;color:#222;text-align:center'), 'tidak memotong bacaan [kerana berbicara kepada manusia]', 99.5, { iv: .035, marks: [102.6] });
stamp('JANGAN', 'left:1480px;top:230px', 101.0, 104.7);

// --- 12 blueprint: membaca sambil bercakap
scene(104.7, 118.0, { cut: 'glitch' });
bpBg(104.7, 118.0, 'MEMBACA SAMBIL BERCAKAP');
svgDraw(`<svg width="1920" height="1080">${figS(620, 420, 1, '<rect x="40" y="110" width="80" height="55" fill="none" stroke="#e9f23a" stroke-width="4" data-d="270" data-del=".4"/>')}${figS(1300, 420, 1)}
<path d="M760 380 Q960 260 1160 380" fill="none" stroke="#d7322b" stroke-width="6" stroke-dasharray="14 12" data-d="460" data-del=".8"/>
<rect x="880" y="250" width="160" height="80" rx="16" fill="none" stroke="#fff" stroke-width="4" data-d="480" data-del="1"/></svg>`, 'left:0;top:0', 104.8, 1.3);
const xx = node('<div style="font:900 120px Inter;color:#d7322b">✕</div>', 'left:915px;top:190px'); show(xx, 111.0, 'scale'); sfx(111.0, 'stamp', .8);
kin(node('', 'left:120px;top:880px;width:1680px;font:700 44px Inter;color:#fff'), 'memotong-motong bacaan untuk [bercakap-cakap]', 113.9, { iv: .035, marks: [116.4] });

// --- 13 tanya kabar dulu; selawat & zikir berbeda
scene(118.0, 139.7, { cut: 'glitch' });
steps(['tanya kabar dulu', 'selesai bercakap', 'baru membaca'], 118.2, 1.4, 'left:140px;top:180px', 124.7);
seg('jangan sambil membaca [Al-Qur\'an]', 123.1, 'left:140px;top:380px;width:1640px', { size: 64, iv: .035, marks: [124.4] });
const bd = node('<div style="width:1640px;height:2px;background:#333"></div>', 'left:140px;top:520px'); show(bd, 124.7, 'fade');
label('BEDA HALNYA', 124.8, 'left:140px;top:560px');
block('SELAWAT', 'boleh<br>diselingi', '#ebe6d6', '#111', 125.2, 'left:140px;top:620px');
block('ZIKIR', '<span class="ar" style="font-size:40px">لَا إِلَهَ إِلَّا اللَّهُ</span>', '#ebe6d6', '#111', 127.6, 'left:510px;top:620px');
block("AL-QUR'AN", 'urusannya<br>lain', Y, '#111', 131.0, 'left:880px;top:620px');
arw(node('أَلَّا يَقْطَعَ الْقِرَاءَةَ سَاعَةً سَاعَةً لِمُكَلِّمٍ آدَمِيٍّ', 'left:1260px;width:540px;top:640px;text-align:right;font-size:40px;color:#ddd;line-height:1.6'), 134.8, 4.0);

// --- 14 kehormatan 05: tartil
scene(139.7, 162.4, { cut: 'glitch' });
keh(139.8, '05');
paper(139.75, 'left:160px;top:200px;width:1600px;height:400px');
arw(node('أَنْ يَقْرَأَهُ عَلَى تُؤَدَةٍ وَ[تَرْتِيلٍ] وَتَحْسِينٍ وَ[تَفَهُّمٍ] وَإِسْمَاعِ نَفْسِهِ', 'left:220px;width:1480px;top:290px;text-align:center;font-size:66px;color:#151515'), 139.8, 7.6, { marks: [148.2, 159.0] });
kin(node('', 'left:260px;top:470px;width:1400px;font:700 40px Inter;color:#222;text-align:center'), 'membaca dengan [tartil], perlahan-lahan', 147.5, { iv: .04, marks: [149.3] });
block('01 · HURUF', 'membaguskan<br>sebutan huruf', '#ebe6d6', '#111', 151.4, 'left:160px;top:680px');
block('02 · TAJWID', 'membaguskan<br>tajwidnya', '#ebe6d6', '#111', 153.5, 'left:530px;top:680px');
block('03 · SUARA', 'membaguskan<br>suaranya', '#ebe6d6', '#111', 155.6, 'left:900px;top:680px');
block('04 · PAHAM', 'lebih baik<br>memahaminya', Y, '#111', 159.0, 'left:1270px;top:680px');

// --- 15 memperdengarkan bacaan kepada diri
scene(162.4, 194.3, { cut: 'glitch' });
bpBg(162.4, 194.3, 'TERDENGAR OLEH TELINGA SENDIRI');
arw(node('[وَإِسْمَاعِ نَفْسِهِ]', 'left:120px;width:700px;top:170px;text-align:left;font-size:80px;color:#fff'), 162.5, .9, { marks: [163.4] });
svgDraw(`<svg width="1920" height="1080">${figS(1300, 330, 1.1, '<rect x="40" y="110" width="80" height="55" fill="none" stroke="#e9f23a" stroke-width="4" data-d="270" data-del=".4"/>')}
<path d="M1260 330 Q1180 300 1180 260" fill="none" stroke="#7fd6ff" stroke-width="5" data-d="120" data-del="1"/>
${[0,1,2].map(i=>`<path d="M${1230-i*30} ${300-i*24} q -30 -20 -10 -50" fill="none" stroke="#7fd6ff" stroke-width="4" data-d="90" data-del="${1.2+i*.2}"/>`).join('')}</svg>`, 'left:0;top:0', 163.5, 1.4);
kin(node('', 'left:120px;top:330px;width:880px;font:700 42px Inter;color:#fff;line-height:1.3'), 'memperdengarkan bacaan [kepada dirinya]', 163.6, { iv: .035, marks: [165.3] });
kin(node('', 'left:120px;top:480px;width:880px;font:600 32px Inter;color:#cfe0ff;line-height:1.35'), 'contoh: salat subuh di rumah, bacaan terdengar oleh telinga sendiri', 172.6, { iv: .025 });
chip('walau perlahan', 179.9, 'left:120px;top:660px');
chip('walau sayup-sayup', 181.6, 'left:420px;top:660px');
seg('[terdengar] oleh telinga kita', 183.4, 'left:120px;top:770px;width:1000px', { size: 54, iv: .035, marks: [185.0] });
chip('makmum', 188.8, 'left:120px;top:900px'); chip('imam', 190.6, 'left:340px;top:900px');

// --- 16 shadaqallahul azhim
scene(194.3, 222.6, { cut: 'glitch' });
label('KETIKA BERHENTI MEMBACA', 194.4, 'left:160px;top:150px');
paper(194.35, 'left:160px;top:200px;width:1600px;height:560px');
arw(node('صَدَقَ اللَّهُ [الْعَظِيمُ]', 'left:220px;width:1480px;top:240px;text-align:center;font-size:84px;color:#151515'), 194.6, 1.4, { marks: [211.6] });
arw(node('وَبَلَّغَ الرَّسُولُ الْكَرِيمُ', 'left:220px;width:1480px;top:360px;text-align:center;font-size:70px;color:#151515'), 196.4, 1.4);
arw(node('وَأَنَا عَلَى ذَلِكَ مِنَ الشَّاهِدِينَ وَالشَّاكِرِينَ', 'left:220px;width:1480px;top:470px;text-align:center;font-size:62px;color:#151515'), 198.6, 2.4);
arw(node('وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'left:220px;width:1480px;top:570px;text-align:center;font-size:58px;color:#6b5a3e'), 202.4, 1.6);
stamp('TIDAK WAJIB', 'left:1380px;top:640px', 208.8, 222.6, '#2fae5b');
kin(node('', 'left:160px;top:800px;width:1600px;font:600 34px Inter;color:#ddd'), 'Maha benar Allah Yang Maha Agung · telah menyampaikan Rasul-Nya yang mulia · aku menyaksikannya', 211.2, { iv: .025 });
chip('kebiasaan baik · bukan lafaz hadis', 216.0, 'left:160px;top:900px', null, '#cfcfcf');

// --- 17 kehormatan 07: menurut tertib
scene(222.6, 263.6, { cut: 'glitch' });
keh(222.7, '07');
arw(node('أَنْ يَقْرَأَ الْقُرْآنَ عَلَى [التَّرْتِيبِ]', 'left:160px;width:1600px;top:200px;text-align:center;font-size:84px;color:#fff'), 226.6, 2.0, { marks: [229.0] });
kin(node('', 'left:160px;top:330px;width:1600px;font:600 38px Inter;color:#ccc;text-align:center'), 'membaca menurut tertib susunan mushaf', 229.0, { iv: .03 });
steps(['Al-Fatihah', 'Al-Baqarah', "Ali 'Imran", '…'], 231.7, 1.2, 'left:240px;top:470px', 252.7);
CUTS.push({ t: 236.4, kind: 'none' });
kin(node('', 'left:240px;top:650px;width:1440px;font:600 32px Inter;color:#aaa'), 'boleh juga membaca surah-surah secara terpisah', 236.4, { iv: .03 });
stamp('AFDHAL', 'left:1430px;top:610px', 246.6, 263.6, '#2fae5b');
seg('lebih afdhal: [menuruti susunannya]', 252.7, 'left:160px;top:800px;width:1600px', { size: 60, iv: .035, marks: [259.6] });

// --- 18 kehormatan 08: mushaf di tempat tinggi
scene(263.6, 279.9, { cut: 'glitch' });
keh(263.7, '08');
paper(263.65, 'left:160px;top:200px;width:820px;height:640px');
arw(node('أَنْ يَضَعَ الْمُصْحَفَ عَلَى مَكَانٍ ظَاهِرٍ [رَفِيعٍ]', 'left:190px;width:760px;top:250px;text-align:center;font-size:60px;color:#151515;line-height:1.7'), 263.7, 4.6, { marks: [268.8] });
kin(node('', 'left:200px;top:520px;width:740px;font:700 36px Inter;color:#222;text-align:center;line-height:1.35'), 'di tempat yang [tinggi] dan suci, jangan ditaruh di lantai', 269.2, { iv: .03, marks: [271.0] });
const bp8 = node('', 'left:1040px;top:200px;width:760px;height:640px', 'bp'); show(bp8, 264.0, 'fade');
svgDraw(`<svg width="760" height="640"><path d="M180 470 L380 330 L580 470 M180 470 L380 560 L580 470" fill="none" stroke="#fff" stroke-width="5" data-d="1000"/><path d="M280 400 L380 350 L480 400 L380 450Z" fill="none" stroke="#e9f23a" stroke-width="5" data-d="460" data-del=".6"/><text x="380" y="610" fill="#cfe0ff" font-family="DejaVu Sans Mono" font-size="22" text-anchor="middle">REHAL / ALAS</text></svg>`, 'left:1040px;top:200px', 277.2, 1.2);

// --- 19 wajib mengambil ayat di tempat kotor
scene(279.9, 316.6, { cut: 'hard' });
seg('melihat ayat di [tempat kotor]?', 280.0, 'left:140px;top:160px;width:1640px', { size: 78, iv: .035, marks: [284.0] });
steps(['lihat', 'ambil', 'letakkan di tempat tinggi & suci'], 288.0, 2.8, 'left:140px;top:360px', 316.6);
stamp('WAJIB', 'left:1500px;top:330px', 289.4, 316.6);
const nb = node(`<div style="width:1640px;padding:26px 30px;background:#1a0d0c;border-left:8px solid #d7322b"><div class="mono" style="color:#ff8a80;font-size:20px">MENURUT PENJELASAN NARATOR</div><div style="font:700 34px Inter;margin-top:10px">bila sengaja dibiarkan: hukumnya berat (disebut antara haram atau kafir)</div></div>`, 'left:140px;top:560px'); show(nb, 291.0, 'left', 297.0);
kin(node('', 'left:140px;top:560px;width:1640px;font:700 40px Inter;color:#fff;line-height:1.35'), 'termasuk nama-nama [Allah], ayat Al-Qur\'an, nama nabi dan rasul', 297.2, { iv: .03, marks: [300.0] });
chip('sudah tidak layak dipakai → boleh dibakar', 310.2, 'left:140px;top:820px');

// --- 20 tidak menghapus dengan air liur
scene(316.6, 343.4, { cut: 'glitch' });
bpBg(316.6, 343.4, 'PAPAN TULIS');
svgDraw(`<svg width="1920" height="1080"><rect x="560" y="250" width="800" height="420" fill="none" stroke="#fff" stroke-width="5" data-d="2440"/><path d="M620 330 H1300 M620 410 H1240 M620 490 H1280" stroke="#cfe0ff" stroke-width="4" data-d="680" data-del=".6"/>
${figS(380, 430, .9, '')}</svg>`, 'left:0;top:0', 316.7, 1.4);
arw(node('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'left:600px;width:720px;top:300px;text-align:center;font-size:56px;color:#fff'), 318.0, 1.4);
kin(node('', 'left:120px;top:780px;width:1680px;font:800 50px Inter;color:#fff'), 'tidak boleh dihapus dengan [air liur]', 322.6, { iv: .04, marks: [326.2] });
const xl = node('<div style="font:900 110px Inter;color:#d7322b">✕</div>', 'left:900px;top:460px'); show(xl, 330.0, 'scale'); sfx(330.0, 'stamp', .8);
const wtr = node('<div style="font:800 40px Inter;color:#7fd6ff">✓ hapus dengan air yang suci</div>', 'left:120px;top:900px'); show(wtr, 339.8, 'up');

// --- 21 mushaf rusak: dibakar atau dikubur
scene(343.4, 368.9, { cut: 'glitch' });
seg('mushaf yang sudah [tak terbaca]', 343.5, 'left:140px;top:160px;width:1640px', { size: 74, iv: .035, marks: [346.0] });
kin(node('', 'left:140px;top:290px;width:1640px;font:600 36px Inter;color:#ccc'), 'lama, kabur, lapuk, hancur', 359.9, { iv: .04 });
const o1 = node(`<div style="width:760px;height:400px;background:#0e0e0e;border-top:8px solid #ff8a3d;padding:34px"><div class="mono" style="color:#ff8a3d;font-size:22px">PILIHAN 01</div><div style="font:800 64px Inter;margin-top:40px">dibakar</div></div>`, 'left:140px;top:400px'); show(o1, 345.6, 'up');
const o2 = node(`<div style="width:760px;height:400px;background:#0e0e0e;border-top:8px solid #2fae5b;padding:34px"><div class="mono" style="color:#2fae5b;font-size:22px">PILIHAN 02</div><div style="font:800 64px Inter;margin-top:40px">dikubur</div><div style="font:600 30px Inter;color:#ccc;margin-top:20px;line-height:1.35">di tempat suci, jauh dari<br>diinjak-injak orang</div></div>`, 'left:1020px;top:400px'); show(o2, 350.5, 'up');

// --- 22 kehormatan 11: hak mata
scene(368.9, 415.5, { cut: 'glitch' });
keh(369.0, '11');
seg('memberi [hak mata]', 372.4, 'left:140px;top:200px;width:1640px', { size: 86, iv: .04, marks: [376.6] });
kin(node('', 'left:140px;top:330px;width:1640px;font:600 38px Inter;color:#ccc'), 'walau sudah hafal, lebih baik membaca sambil memandang mushaf', 381.4, { iv: .025 });
const eye = svgDraw(`<svg width="520" height="300"><path d="M20 150 Q260 -20 500 150 Q260 320 20 150Z" fill="none" stroke="#fff" stroke-width="5" data-d="1300"/><circle cx="260" cy="150" r="70" fill="none" stroke="#e9f23a" stroke-width="6" data-d="440" data-del=".6"/><circle cx="260" cy="150" r="24" fill="#e9f23a"/></svg>`, 'left:1260px;top:470px', 386.0, 1.2);
label('APA SEBABNYA?', 397.1, 'left:140px;top:470px');
block('01', 'mensyukuri<br>nikmat mata', '#ebe6d6', '#111', 398.1, 'left:140px;top:540px');
block('02', 'menebus<br>kesalahan mata', Y, '#111', 400.1, 'left:510px;top:540px');
seg('terhapus kesalahan itu, [subhanallah]', 410.0, 'left:140px;top:860px;width:1640px', { size: 54, iv: .035, marks: [414.0] });

// --- 23 pencarian hadis: afdal ibadah umatku
scene(415.5, 429.5, { cut: 'glitch', light: 1 });
searchFind(415.5, 429.5, {
  q: 'أفضل عبادة أمتي قراءة القرآن', count: 4, pick: 0, shelfPick: 0, times: { type: .5, scan: 2.2, res: 3.2, click: 4.6, det: 5.0 },
  shelf: [["Syu'ab al-Iman · al-Baihaqi", 'شعب الإيمان'], ['Al-Jami\' ash-Shaghir', 'الجامع الصغير'], ['Musnad al-Firdaus', 'الديلمي'], ['Al-Ibanah · as-Sijzi', 'الإبانة']],
  results: [
    { title: "Syu'ab al-Iman · al-Baihaqi", tag: 'DIRUJUK', ar: 'أَفْضَلُ عِبَادَةِ أُمَّتِي قِرَاءَةُ الْقُرْآنِ' },
    { title: "Al-Jami' ash-Shaghir · as-Suyuthi", tag: 'DINUKIL', ar: 'عَنِ النُّعْمَانِ بْنِ بَشِيرٍ' },
    { title: 'Musnad al-Firdaus · ad-Dailami', tag: 'TERKAIT', ar: 'قِرَاءَةُ الْقُرْآنِ نَظَرًا' },
    { title: 'Al-Ibanah · as-Sijzi', tag: 'TERKAIT', ar: 'أَفْضَلُ عِبَادَةِ أُمَّتِي' }],
  det: { title: 'Afdal ibadah umatku', ar: 'النُّعْمَانُ بْنُ بَشِيرٍ', rows: [['PERAWI', "an-Nu'man bin Basyir"], ['SUMBER', "al-Baihaqi · Syu'ab al-Iman"], ['DERAJAT', 'tidak dipastikan · dinukil as-Suyuthi']], quote: 'أَفْضَلُ عِبَادَةِ أُمَّتِي قِرَاءَةُ الْقُرْآنِ' }
});

// --- 24 kehormatan 12: tidak menakwil sendiri
scene(429.5, 459.5, { cut: 'hard' });
keh(429.6, '12');
seg('jangan [menakwil] Al-Qur\'an', 432.0, 'left:140px;top:200px;width:1640px', { size: 84, iv: .04, marks: [434.0] });
chip('dengan fikiran sendiri', 432.6, 'left:140px;top:340px'); chip('dengan nafsu sendiri', 439.3, 'left:560px;top:340px');
label('SEBAB · RANTAI PENAFSIR', 447.8, 'left:140px;top:450px');
steps(['Rasulullah ﷺ', 'para sahabat', 'ulama terdahulu'], 448.3, 2.4, 'left:140px;top:510px');
seg('orang awam: [jangan berani] menafsirkan sendiri', 453.0, 'left:140px;top:760px;width:1640px', { size: 52, iv: .025, marks: [455.6] });

// --- 25 pencarian hadis ancaman + dosier al-Qurthubi
scene(459.5, 479.9, { cut: 'glitch', light: 1 });
searchFind(459.5, 472.8, {
  q: 'من قال في القرآن برأيه', count: 3, pick: 0, shelfPick: 0, times: { type: .5, scan: 2.2, res: 3.2, click: 4.6, det: 5.0 },
  shelf: [['Sunan at-Tirmidzi', 'الترمذي'], ['Musnad Ahmad', 'مسند أحمد'], ['Al-Mustadrak · al-Hakim', 'المستدرك'], ['Tafsir al-Qurthubi', 'القرطبي']],
  results: [
    { title: 'Sunan at-Tirmidzi · no. 2951', tag: 'HASAN · AT-TIRMIDZI', ar: 'وَمَنْ قَالَ فِي الْقُرْآنِ بِرَأْيِهِ فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ' },
    { title: 'Sunan at-Tirmidzi · no. 2950', tag: 'BI GHAIRI ILMIN', ar: 'مَنْ قَالَ فِي الْقُرْآنِ بِغَيْرِ عِلْمٍ' },
    { title: 'Muqaddimah Tafsir al-Qurthubi', tag: 'DIBAHAS', ar: 'بَابُ مَا جَاءَ فِي الْوَعِيدِ' }],
  det: { title: "Ibnu 'Abbas radhiyallahu 'anhuma", ar: 'عَبْدُ اللَّهِ بْنُ عَبَّاسٍ', rows: [['PERAWI', "Ibnu 'Abbas · via Sa'id bin Jubair"], ['DERAJAT', 'dihasankan at-Tirmidzi · didhaifkan sebagian ulama'], ['MAKNA', 'ancaman menafsirkan tanpa ilmu']], quote: 'فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ' }
});
polaroid('cordoba', 'CORDOBA', 'left:140px;top:150px', 472.8, 479.9, -5);
entity(473.0, 479.9, { css: 'left:560px;top:180px', w: 1200, h: 620, tag: 'DOSIER · PENULIS KITAB', name: 'Imam al-Qurthubi', ar: 'مُحَمَّدُ بْنُ أَحْمَدَ الْأَنْصَارِيُّ الْقُرْطُبِيُّ', rows: [['ASAL', 'Cordoba, Andalusia'], ['WAFAT', '9 Syawal 671 H · Munyah Bani Khushaib (Minya, Mesir)'], ['KARYA', "Al-Jami' li Ahkam al-Qur'an"], ['PESAN', 'tidak boleh menafsirkan walau sepotong ayat sesuka hati']], blocks: [['WAFAT', '671 H', Y], ['TAFSIR', '±30 thn', '#ebe6d6'], ['MAZHAB', 'Maliki', '#7d8a3a', '#fff']], src: 'Midad · Tarajm · Masrawy' });

// --- 26 kehormatan 13: lagu jangan melampaui batas
scene(479.9, 495.1, { cut: 'glitch' });
keh(480.0, '13');
seg('jangan [melampaui batas] melagukan', 480.0, 'left:140px;top:200px;width:1640px', { size: 72, iv: .035, marks: [482.6] });
const sl = node(`<div style="width:1500px;height:16px;background:#222;border-radius:8px;position:relative"><div style="position:absolute;left:0;width:60%;height:16px;background:#2fae5b;border-radius:8px"></div><div style="position:absolute;left:60%;width:40%;height:16px;background:#d7322b;border-radius:0 8px 8px 0"></div></div>
<div style="display:flex;justify-content:space-between;width:1500px;margin-top:20px;font:700 32px Inter"><span style="color:#2fae5b">berlagu: boleh</span><span style="color:#ff8a80">kelewat panjang: jangan</span></div>`, 'left:210px;top:500px'); show(sl, 485.5, 'fade');
const dot = node(`<div style="width:46px;height:46px;border-radius:50%;background:${Y};box-shadow:0 0 30px ${Y}"></div>`, 'left:210px;top:485px');
item(486.0, 495.1, dot, (lt, t, it) => { const p = Math.min(.9, lt / 6); dot.style.left = (190 + 1500 * p) + 'px'; dot.style.opacity = clamp((it.t1 - t) / .25); });

// --- 27 kehormatan 14: tulisan yang bagus
scene(495.1, 509.7, { cut: 'glitch' });
keh(495.2, '14');
seg('memperbagus [tulisannya]', 497.6, 'left:140px;top:200px;width:1640px', { size: 84, iv: .04, marks: [499.8] });
paper(500.0, 'left:360px;top:400px;width:1200px;height:400px');
arw(node('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ', 'left:400px;width:1120px;top:470px;text-align:center;font-size:110px;color:#151515;font-weight:700'), 500.4, 3.0);
kin(node('', 'left:400px;top:690px;width:1120px;font:700 36px Inter;color:#444;text-align:center'), 'terlihat bagus, terlihat [cantik]', 507.2, { iv: .04, marks: [508.6] });

// --- 28 kehormatan 15: tidak di pasar
scene(509.7, 528.8, { cut: 'glitch' });
bpBg(509.7, 528.8, 'TEMPAT YANG TIDAK SESUAI');
svgDraw(`<svg width="1920" height="1080">${[0,1,2].map(i=>`<path d="M${520+i*300} 640 V420 L${670+i*300} 340 L${820+i*300} 420 V640" fill="none" stroke="#fff" stroke-width="5" data-d="900" data-del="${i*.3}"/><rect x="${570+i*300}" y="500" width="200" height="140" fill="none" stroke="#cfe0ff" stroke-width="3" data-d="680" data-del="${.6+i*.3}"/>`).join('')}<path d="M440 640 H1480" stroke="#fff" stroke-width="5" data-d="1040"/></svg>`, 'left:0;top:0', 509.8, 1.4);
kin(node('', 'left:120px;top:200px;width:1680px;font:800 60px Inter;color:#fff'), 'tidak membaca di [pasar]', 510.0, { iv: .045, marks: [513.0] });
chip('tempat jual beli', 514.0, 'left:120px;top:760px'); chip('tempat ribut', 521.0, 'left:450px;top:760px'); chip('tempat bermain', 523.4, 'left:740px;top:760px');
stamp('TIDAK SESUAI', 'left:1300px;top:740px', 516.0, 528.8);

// --- 29 kehormatan 16: khatam lalu mulai lagi + hadis al-hal al-murtahil
scene(528.8, 546.4, { cut: 'hard' });
keh(528.9, '16');
seg('selesai khatam: [jangan stop]', 529.0, 'left:140px;top:200px;width:1640px', { size: 80, iv: .04, marks: [533.0] });
steps(['khatam', 'Al-Fatihah', '5 ayat Al-Baqarah', 'istirahat'], 539.4, 1.6, 'left:140px;top:480px', 546.4);

scene(546.4, 553.7, { cut: 'glitch', light: 1 });
searchFind(546.4, 553.7, {
  q: 'الحال المرتحل', count: 2, pick: 0, shelfPick: 0, times: { type: .3, scan: 1.2, res: 1.9, click: 2.9, det: 3.2 },
  shelf: [['Sunan at-Tirmidzi', 'الترمذي'], ['At-Tibyan · an-Nawawi', 'التبيان'], ['Al-Itqan · as-Suyuthi', 'الإتقان']],
  results: [
    { title: 'Sunan at-Tirmidzi · no. 2948', tag: 'GHARIB', ar: 'الْحَالُّ الْمُرْتَحِلُ' },
    { title: 'At-Tibyan · bab khatam', tag: 'TERKAIT', ar: 'كُلَّمَا حَلَّ ارْتَحَلَ' }],
  det: { title: 'Al-hal al-murtahil', ar: 'الْحَالُّ الْمُرْتَحِلُ', rows: [['PERAWI', "Ibnu 'Abbas"], ['DERAJAT', 'gharib menurut at-Tirmidzi'], ['MAKNA', 'selesai khatam, langsung memulai lagi']], quote: 'كُلَّمَا حَلَّ ارْتَحَلَ' }
});

// --- 30 rangkuman: syafaat atau celaka
scene(553.7, 574.7, { cut: 'glitch' });
netMap(553.7, 574.7, KEH, { cx: 1180, cy: 560 });
kin(node('', 'left:140px;top:170px;width:820px;font:800 60px Inter;color:#fff;line-height:1.1'), '16 kehormatan [Al-Qur\'an]', 554.0, { iv: .04, marks: [556.4] });
block('JIKA DIHORMATI', 'syafaat &<br>rahmat', '#2fae5b', '#fff', 561.4, 'left:140px;top:420px');
block('JIKA DIREMEHKAN', 'mengutuk &<br>celaka', '#d7322b', '#fff', 567.5, 'left:140px;top:690px');

// --- 31 penutup
scene(574.7, TOTAL, { cut: 'hard' });
kin(node('', 'left:0;right:0;top:330px;text-align:center;font:600 46px Inter;color:#ddd'), 'membaca sesuai kehormatan dan keagungannya', 574.8, { iv: .035 });
arw(node('[إِنْ شَاءَ اللَّهُ]', 'left:0;right:0;top:470px;text-align:center;font-size:110px;color:#fff'), 585.4, .6, { marks: [586.2] });
const fl = node(`<div style="display:flex;align-items:center;gap:20px"><div style="width:70px;height:70px;border-radius:50%;background:${Y}"></div><div style="font:800 44px Inter">@alurziyadahku</div><div style="background:#d7322b;color:#fff;font:800 30px Inter;padding:14px 26px;border-radius:8px">IKUTI</div></div>`, 'left:600px;top:760px'); show(fl, 579.6, 'up'); sfx(582.0, 'click', .9);
