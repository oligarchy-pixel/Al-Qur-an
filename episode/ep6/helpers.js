// helper dari Ep3
function mePol(css, t0, t1, rot = -4, w = 360) {
  const n = node(`<div style="width:${w}px;padding:14px 14px 54px;background:#f4f1ea;box-shadow:0 24px 60px rgba(0,0,0,.7);position:relative">
  <div style="position:absolute;left:50%;top:-30px;width:2px;height:34px;background:#999"></div><div style="position:absolute;left:calc(50% - 9px);top:-40px;width:18px;height:18px;border-radius:50%;background:#c33"></div>
  <img src="user_photo.jpg" style="display:block;width:${w - 28}px;height:${w - 28}px;object-fit:cover">
  <div style="position:absolute;left:14px;right:14px;bottom:16px;font:600 12px 'DejaVu Sans Mono';color:#444;letter-spacing:.03em;text-align:center;white-space:nowrap">FILE N° 06 · PENYAMPAI · @alurziyadahku</div></div>`, css);
  n.dataset.rot = rot; sfx(t0, 'paper', .8);
  return item(t0, t1, n, (lt, t, it) => { const k = eo(lt / .55), sw = Math.sin(lt * 2.2) * 2.4 * Math.exp(-lt * .6); n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25); n.style.transform = `translateY(${(1 - k) * -140}px) rotate(${rot + sw}deg)`; });
}
ILL.madinah = `<svg viewBox="0 0 300 220"><rect width="300" height="220" fill="#e6eadb"/><path d="M0 190 H300" stroke="#5b6b3a" stroke-width="3"/><rect x="95" y="120" width="110" height="70" fill="#d9d2bc" stroke="#5b6b3a" stroke-width="3"/><path d="M110 120 Q150 50 190 120Z" fill="#2f7d4a" stroke="#1f5a33" stroke-width="3"/><path d="M150 52 V36" stroke="#c9a24a" stroke-width="3"/><rect x="40" y="60" width="16" height="130" fill="#d9d2bc" stroke="#5b6b3a" stroke-width="3"/><rect x="244" y="60" width="16" height="130" fill="#d9d2bc" stroke="#5b6b3a" stroke-width="3"/><path d="M40 60 L48 40 L56 60 M244 60 L252 40 L260 60" fill="#2f7d4a" stroke="#1f5a33" stroke-width="2"/></svg>`;


function counter(t0, t1, val, css, lbl, col = Y, dur = 1.4) {
  const n = node(`<div><div class="mono" style="font-size:20px;color:#f0f0f0">${lbl}</div><div class="cv" style="font:900 120px Inter;color:${col};letter-spacing:-.02em"></div></div>`, css, 'dimmable');
  for (let i = 0; i < 10; i++) sfx(t0 + i * dur / 10, 'tick', .5); sfx(t0 + dur, 'beep', .6);
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .2) * clamp((it.t1 - t) / .25); n.querySelector('.cv').textContent = Math.round(val * eo(lt / dur)).toLocaleString('id-ID'); });
  return n;
}
function sub2(css, t0, t1) { // profil bulat (foto) + SUBSCRIBE diklik
  const n = node(`<div style="display:flex;align-items:center;gap:22px"><div style="width:110px;height:110px;border-radius:50%;background:url(user_photo.jpg) 45% 54%/150% auto no-repeat;border:5px solid ${Y};box-shadow:0 0 0 3px #111"></div>
  <div style="font:800 52px Inter">@alurziyadahku</div><div class="sb" style="position:relative;background:#d7322b;color:#fff;font:900 46px Inter;padding:18px 34px;border-radius:12px">SUBSCRIBE
  <svg class="cs" style="position:absolute;right:-30px;bottom:-56px" width="64" height="64" viewBox="0 0 28 28"><path d="M2 2 L2 24 L8 18 L13 27 L17 25 L12 16 L21 16Z" fill="#fff" stroke="#000" stroke-width="2"/></svg></div></div>`, css);
  const tc = t0 + 1.2; sfx(tc, 'click', 1);
  item(t0, t1, n, (lt, t, it) => { n.style.opacity = clamp(lt / .3) * clamp((it.t1 - t) / .3); const sb = n.querySelector('.sb'), on = t > tc; sb.style.background = on ? '#2fae5b' : '#d7322b'; sb.firstChild.textContent = on ? 'SUBSCRIBED ✓' : 'SUBSCRIBE'; sb.style.transform = t > tc && t < tc + .15 ? 'scale(.92)' : ''; n.querySelector('.cs').style.transform = `translate(${(1 - eo(lt / 1.1)) * 120}px,${(1 - eo(lt / 1.1)) * 80}px)`; });
}


// kartu krem: label + Arab + terjemah
function card(t0, t1, lab, ar, tr, o = {}) {
  label(lab, t0 + .05, 'left:160px;top:140px', t1);
  paper(t0, `left:160px;top:190px;width:1600px;height:${o.h || 660}px`, '', t1);
  arw(node(ar, `left:220px;width:1480px;top:${o.at || 250}px;text-align:center;font-size:${o.fs || 80}px;line-height:1.7;color:#151515`), t0 + .1, o.ad || 2.0, { marks: o.am || [], t1 });
  if (tr) kin(node('', `left:260px;top:${o.tt || 560}px;width:1400px;font:700 ${o.tfs || 42}px Inter;color:#222;text-align:center`), tr, o.tr0 || t0 + 2.2, { iv: o.iv || .028, marks: o.tm || [], t1 });
  if (o.chip) chip(o.chip, t0 + 1.0, `left:200px;top:${(o.h || 660) + 110}px`, t1, '#7a5a12');
}
