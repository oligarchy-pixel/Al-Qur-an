// 15 kode visual + tab pencarian per poin (Ep2 v3). Dimuat setelah app.js; semua elemen bertanggal eksplisit.
const KAL = "font-family:Kalam,cursive";

// ------------------------------------------------------------------ label kode di pojok
function codeTag(t0, t1, no, code) {
  const n = node(`<div style="display:flex;align-items:center;gap:12px;padding:8px 18px;border:2px solid #4f7cff;border-radius:10px;background:#0b1022"><span class="mono" style="color:#7fa0ff;font-size:20px">${no}</span><span style="font:800 26px Inter;color:#fff">${code}</span></div>`, 'left:56px;top:76px;z-index:40'); document.getElementById('hud').appendChild(n);
  sfx(t0 + .1, 'beep', .5);
  return item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .25) * clamp((it.t1 - t) / .25); n.style.transform = `translateX(${(1 - eo(lt / .35)) * -30}px)`; });
}
// ------------------------------------------------------------------ svg: [data-d] digambar, [data-f] muncul
function sv(t0, t1, inner, css, w = 1920, h = 1080, dur = 1.0) {
  const n = node(`<svg width="${w}" height="${h}" style="overflow:visible">${inner}</svg>`, css);
  sfx(t0, 'draw', .55);
  return item(t0, t1, n, (lt, t, it) => {
    n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25);
    n.querySelectorAll('[data-d]').forEach(p => { const L = +p.dataset.d, del = +(p.dataset.del || 0), k = eio((lt - del) / (+(p.dataset.dur || dur))); p.style.strokeDasharray = L; p.style.strokeDashoffset = L * (1 - k); });
    n.querySelectorAll('[data-f]').forEach(p => { const k = eo((lt - +p.dataset.f) / .35); p.style.opacity = k; });
  });
}
const T = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" data-f="${o.f ?? 0}" font-family="${o.ff || 'Inter'}" font-weight="${o.fw || 700}" font-size="${o.fs || 30}" fill="${o.c || '#fff'}" text-anchor="${o.a || 'middle'}" ${o.rtl ? 'direction="rtl"' : ''}>${txt}</text>`;
const BOX = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || 'none'}" stroke="${o.s || '#fff'}" stroke-width="${o.sw || 4}" data-d="${2 * (w + h)}" data-del="${o.del || 0}"/>`;
const LN = (pts, o = {}) => { let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return `<path d="M${pts.map(p => p.join(' ')).join(' L')}" fill="none" stroke="${o.s || '#fff'}" stroke-width="${o.sw || 4}" ${o.dash ? 'stroke-dasharray="12 10"' : ''} data-d="${Math.ceil(L)}" data-del="${o.del || 0}" ${o.arrow ? 'marker-end="url(#ah)"' : ''}/>`; };
const DEFS = `<defs><marker id="ah" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0 0 L12 6 L0 12Z" fill="#e9f23a"/></marker></defs>`;

// ------------------------------------------------------------------ tab pencarian per poin
function tabSearch(t0, no, q, res, dur = 4.4) {
  const t1 = t0 + dur;
  const n = node(`<div class="bk" style="position:absolute;left:0;top:0;width:1920px;height:1080px;background:rgba(0,0,0,.72)"></div>
  <div class="win" style="position:absolute;left:330px;top:150px;width:1260px;height:720px;background:${IVORY};border-radius:14px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.8);color:${ESP}">
   <div style="height:56px;background:#e8dfcc;display:flex;align-items:flex-end;padding:0 16px;gap:8px">
     <div style="background:#efe7d6;padding:10px 20px;border-radius:10px 10px 0 0;font:600 17px Inter;color:#8a7a60">Pencarian kitab</div>
     <div class="nt" style="background:${IVORY};padding:10px 20px;border-radius:10px 10px 0 0;font:700 17px Inter">${no}</div>
     <div style="font:700 30px Inter;color:#8a7a60;padding:0 10px 8px">+</div></div>
   <div style="height:70px;display:flex;align-items:center;padding:0 24px;gap:16px;border-bottom:1px solid #e3d8c2">
     <div style="font:700 20px Inter;color:${GOLD}">◆ maktabah</div>
     <div style="flex:1;height:46px;border:2px solid ${GOLD};border-radius:23px;display:flex;align-items:center;padding:0 22px;font:600 24px Inter"><span class="q"></span><span class="cr" style="display:inline-block;width:2px;height:28px;background:${ESP};margin-left:3px"></span></div>
     <div style="background:${GOLD};color:#fff;font:700 18px Inter;padding:12px 22px;border-radius:22px">CARI</div></div>
   <div style="padding:22px 30px">
     <div class="cnt mono" style="font-size:16px;color:#8a7a60;height:22px"></div>
     ${res.map((r, i) => `<div class="rr" style="margin-top:14px;padding:16px 20px;border:1px solid #e6dcc6;border-radius:10px;background:#fffdf8">
       <div style="display:flex;justify-content:space-between;align-items:center"><span style="font:700 22px Inter">${r[0]}</span><span class="mono" style="font-size:15px;color:${GOLD};border:1px solid ${GOLD};padding:3px 10px;border-radius:12px">${r[1]}</span></div>
       <div class="ar" style="font-size:30px;margin-top:6px;text-align:right">${r[2]}</div></div>`).join('')}
   </div></div>
  <div class="curs" style="position:absolute;width:28px;height:28px"><svg width="28" height="28"><path d="M2 2 L2 24 L8 18 L13 27 L17 25 L12 16 L21 16Z" fill="#fff" stroke="#000" stroke-width="2"/></svg></div>`, 'left:0;top:0;width:1920px;height:1080px;z-index:30');
  const qq = n.querySelector('.q'), rows = n.querySelectorAll('.rr'), win = n.querySelector('.win'), cur = n.querySelector('.curs'), nt = n.querySelector('.nt'), cnt = n.querySelector('.cnt'), cr = n.querySelector('.cr');
  const tType = t0 + .55, iv = Math.min(.045, 1.3 / q.length), tRes = tType + q.length * iv + .25, tClick = tRes + 1.0;
  sfx(t0 + .25, 'click', .8); sfx(tClick, 'click', .9); for (let i = 0; i < q.length; i += 2) sfx(tType + i * iv, 'tick', .6); sfx(tRes, 'beep', .5);
  item(t0, t1, n, (lt, t) => {
    const op = clamp(lt / .2) * clamp((t1 - t) / .35); n.style.opacity = op;
    const k = eo(lt / .4); win.style.transform = `translateY(${(1 - k) * 50}px) scale(${.95 + .05 * k - .06 * eio((t - t1 + .45) / .45)})`;
    nt.style.opacity = t > t0 + .3 ? 1 : 0; nt.style.transform = t < t0 + .5 ? `translateY(${(1 - clamp((t - t0 - .3) / .2)) * 20}px)` : '';
    qq.textContent = q.slice(0, clamp(Math.floor((t - tType) / iv), 0, q.length)); cr.style.opacity = Math.floor(t * 3) % 2 ? 1 : .2;
    cnt.textContent = t > tRes ? `${res.length} sumber ditemukan` : (t > tType ? 'mengetik…' : '');
    rows.forEach((r, i) => { const v = clamp((t - tRes - i * .15) / .25); r.style.opacity = v; r.style.transform = `translateY(${(1 - v) * 16}px)`; const sel = t > tClick && i === 0; r.style.background = sel ? '#fff4d1' : '#fffdf8'; r.style.borderColor = sel ? GOLD : '#e6dcc6'; });
    const P = [[1430, 170, t0], [1430, 170, t0 + .25], [960, 240, tType], [960, 240, tRes], [900, 370, tClick], [900, 370, t1]];
    let cx = P[0][0], cy = P[0][1];
    for (let j = 0; j < P.length - 1; j++) if (t >= P[j][2] && t <= P[j + 1][2]) { const u = eio((t - P[j][2]) / Math.max(.01, P[j + 1][2] - P[j][2])); cx = P[j][0] + (P[j + 1][0] - P[j][0]) * u; cy = P[j][1] + (P[j + 1][1] - P[j][1]) * u; }
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; cur.style.transform = [t0 + .25, tClick].some(c => t >= c && t < c + .15) ? 'scale(.8)' : '';
  });
  CUTS.push({ t: t1, kind: 'glitch' }); sfx(t1, 'whoosh', .5);
}
