// Mesin video dokumen investigasi (bangun ulang Ep2) — setTime(t) menggambar frame pada detik t.
const S = document.getElementById('stage'), CAMEL = document.getElementById('cam');
const ITEMS = [], SFX = [], CUTS = [], PUNCH = [], LIGHT = [], CAMS = [];
const TOTAL = 561.2;
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
  // jalur kamera bertahap (tur data di tab pencarian)
  for (const c of CAMS) { if (t >= c.k[0][0] && t < c.k[c.k.length - 1][0]) { let j = 0; while (j < c.k.length - 2 && t >= c.k[j + 1][0]) j++; const A = c.k[j], B = c.k[j + 1], u = eio((t - A[0]) / Math.max(.01, B[0] - A[0])); cx = A[1] + (B[1] - A[1]) * u; cy = A[2] + (B[2] - A[2]) * u; z = A[3] + (B[3] - A[3]) * u; } }
  const HUDK = Math.max(0, Math.min(1, 1 - (z - 1.03) / .12));
  for (const p of PUNCH) { if (t >= p.t0 - .05 && t < p.t1 + .4) { const k = eio((t - p.t0) / .35) * (1 - eio((t - p.t1) / .4)); z = z + (p.k - z) * k; cx = 960 + (p.ox - 960) * k; cy = 540 + (p.oy - 540) * k; } }
  const sh = Math.sin(t * 13.1) * .6 + Math.sin(t * 7.3) * .5;
  const dx = Math.sin(t * .31) * 7 + sh, dy = Math.cos(t * .23) * 5 + Math.cos(t * 11.7) * .5, rot = Math.sin(t * .17) * .28;
  cx = 960 + (cx - 960) * .9; cy = 52 + cy * .9;
  CAMEL.style.transformOrigin = `${cx}px ${cy}px`;
  CAMEL.style.transform = `translate(${960 - cx + dx}px,${540 - cy + dy}px) scale(${z}) rotate(${rot}deg)`;
  // redupkan elemen lain saat punch
  const pk = PUNCH.find(p => t >= p.t0 && t < p.t1 + .4);
  S.querySelectorAll('.dimmable').forEach(e => e.style.filter = pk ? 'brightness(.62)' : '');
  // glitch di setiap potongan
  const c = CUTS.find(c => c.kind !== 'none' && t >= c.t && t < c.t + .22);
  if (c) { rnd = Math.floor(t * 90) + 3; let h = ''; for (let i = 0; i < 7; i++) { const y = rng() * 1080, hh = 4 + rng() * 40, col = rng() < .5 ? 'rgba(0,255,255,.35)' : 'rgba(255,0,90,.35)'; h += `<div style="position:absolute;left:0;right:0;top:${y}px;height:${hh}px;background:${col};transform:translateX(${(rng() - .5) * 120}px)"></div>`; } G.innerHTML = ''; CAMEL.style.transform += ` scale(${1 + (1 - (t - c.t) / .22) * .08})`; }
  else { G.innerHTML = ''; S.style.filter = ''; }
  
  document.getElementById('sweep').style.top = ((t * 160) % 1400 - 200) + 'px';
  document.getElementById('live').style.opacity = (Math.floor(t * 1.6) % 2) ? .8 : 1;
  const s = Math.floor(t); document.getElementById('tc').textContent = `00:${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  document.getElementById('prog').style.width = (t / TOTAL * 1920) + 'px';
  const light = LIGHT.some(([a, b]) => t >= a && t < b);
  document.getElementById('scan').style.opacity = light ? .3 : 1; document.getElementById('vig').style.opacity = light ? .35 : 1; document.getElementById('hud').style.opacity = (light ? .55 : 1) * HUDK;
};
function SC0(t) { let s = { t0: 0, t1: TOTAL }; for (let i = 0; i < CUTS.length; i++) if (t >= CUTS[i].t) s = { t0: CUTS[i].t, t1: CUTS[i + 1] ? CUTS[i + 1].t : TOTAL }; return s; }
window.getSFX = () => SFX.sort((a, b) => a.t - b.t);

// ------------------------------------------------------------------ helper tampilan
const Y = '#e9f23a';
function seg(text, t0, css = 'left:140px;top:380px;width:1640px', opt = {}) { return kin(node('', css + ';font-weight:800;font-size:' + (opt.size || 92) + 'px;line-height:1.05;letter-spacing:-.02em' + (opt.color ? ';color:' + opt.color : ''), 'dimmable'), text, t0, opt); }
function paper(t0, css, inner = '', t1) { const n = node(inner, css, 'paper dimmable'); show(n, t0, 'up', t1); sfx(t0, 'paper', .6); return n; }
function label(text, t0, css, t1) { const n = node(text, css + ';font:600 24px "DejaVu Sans Mono";letter-spacing:.12em;color:#f0f0f0'); show(n, t0, 'fade', t1); return n; }
function chip(text, t0, css, t1, col) { const n = node(`<span class="chip" style="${col ? `border-color:${col};color:${col}` : ''}">${text}</span>`, css); show(n, t0, 'scale', t1); sfx(t0, 'click', .5); return n; }
function block(lbl, val, bg, fg, t0, css, t1) { const n = node(`<div class="blk" style="background:${bg};color:${fg}"><small>${lbl}</small><div>${val}</div></div>`, css); show(n, t0, 'up', t1); sfx(t0, 'beep', .4); return n; }
function steps(list, t0, gap, css, t1) {
  const n = node('<div style="display:flex;align-items:center">' + list.map((s, i) => `<div class="step" data-i="${i}">${s}</div>${i < list.length - 1 ? '<div style="font:800 56px Inter;color:#e9f23a;margin:0 26px">→</div>' : ''}`).join('') + '</div>', css);
  list.forEach((_, i) => sfx(t0 + i * gap, 'click', .6));
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .25); n.querySelectorAll('.step').forEach(e => { const i = +e.dataset.i, on = lt >= i * gap; e.style.borderColor = on ? Y : '#fff'; e.style.color = on ? '#111' : '#fff'; e.style.background = on ? Y : '#151515'; e.style.transform = on && lt - i * gap < .3 ? `scale(${1.08 - .08 * eo((lt - i * gap) / .3)})` : ''; }); });
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
  const n = node(`<div style="width:${o.w || 860}px;background:#141414;border:2px solid #e9f23a;padding:34px 38px 30px 38px;min-height:${o.h || 560}px;position:relative">
    <div class="mono" style="font-size:18px;color:${Y}">● ${o.tag}</div>
    <div style="font:800 46px Inter;margin-top:10px;line-height:1.1">${o.name}</div>
    ${o.ar ? `<div class="ar" style="font-size:40px;color:#ddd;margin-top:6px;text-align:left">${o.ar}</div>` : ''}
    <div style="margin-top:18px;display:grid;grid-template-columns:150px 1fr;row-gap:10px;font:500 22px Inter;color:#fff">${o.rows.map(r => `<div class="mono" style="font-size:16px;color:#e9f23a;padding-top:4px">${r[0]}</div><div class="erow">${r[1]}</div>`).join('')}</div>
    <div style="display:flex;gap:10px;margin-top:22px">${(o.blocks || []).map(b => `<div style="flex:1;padding:12px 14px;background:${b[2]};color:${b[3] || '#111'}"><div class="mono" style="font-size:13px;opacity:.8">${b[0]}</div><div style="font:800 34px Inter">${b[1]}</div></div>`).join('')}</div>
    <div class="mono" style="margin-top:16px;font-size:15px;color:#e6e6e6">SUMBER: ${o.src}</div></div>`, o.css);
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
     <div style="background:#efe7d6;padding:10px 22px;border-radius:10px 10px 0 0;font:600 18px Inter;color:#8a7a60">Kajian · Rahasia Sapi Betina</div>
     <div class="tab2" style="background:${IVORY};padding:10px 22px;border-radius:10px 10px 0 0;font:600 18px Inter">Pencarian kitab</div>
     <div class="plus" style="font:700 30px Inter;color:#8a7a60;padding:0 10px 8px">+</div></div>
   <div style="height:70px;display:flex;align-items:center;padding:0 24px;gap:16px;border-bottom:1px solid #e3d8c2">
     <div style="font:700 20px Inter;color:${GOLD}">◆ pustaka kitab</div>
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
          <div class="ar" style="font-size:26px;margin-top:6px;text-align:right">${r.ar}</div>${r.sub ? `<div style="font:500 16px Inter;color:#6b5d45;margin-top:4px">${r.sub}</div>` : ''}</div>`).join('')}</div></div>
     <div class="det" style="width:470px;border-left:1px solid #e3d8c2;padding:24px;background:#fbf7ee">
       <div class="mono" style="font-size:14px;color:#8a7a60">RINCIAN SUMBER</div>
       <div style="font:800 26px Inter;margin-top:10px">${o.det.title}</div>
       <div class="ar" style="font-size:26px;margin-top:6px;color:${GOLD}">${o.det.ar}</div>
       ${o.det.rows.map(r => `<div class="dr" style="margin-top:${o.det.rows.length > 5 ? 8 : 12}px;font:500 ${o.det.rows.length > 5 ? 16 : 18}px Inter;line-height:1.3"><span class="mono" style="font-size:12px;color:#8a7a60;display:block">${r[0]}</span>${r[1]}</div>`).join('')}
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
