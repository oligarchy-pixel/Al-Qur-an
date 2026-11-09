// Tab pencarian Maktabah Syamilah (tangkapan layar asli shamela.ws). Pakai: shamelaSearch(t0, t1, 'kata kunci', 'sh/q1', {pick:0})
function shamelaSearch(t0, t1, q, pre, o = {}) {
  const tType = t0 + 1.4, tGo = tType + Math.min(2.2, q.length * .07) + .3, tRes = tGo + .5, tPick = tRes + 1.3;
  const pick = o.pick || 0, py = 170 + pick * 146;
  const n = node(`<div style="width:1500px;background:#dee1e6;border-radius:14px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.7)">
   <div style="height:50px;display:flex;align-items:flex-end;padding:0 14px;gap:6px">
     <div style="background:#f1f3f4;padding:9px 18px;border-radius:10px 10px 0 0;font:600 16px Inter;color:#444">Kajian · @alurziyadahku</div>
     <div class="nt" style="background:#fff;padding:9px 18px;border-radius:10px 10px 0 0;font:600 16px Inter;color:#222;display:flex;gap:8px;align-items:center"><span style="width:16px;height:16px;border-radius:4px;background:#a3845a"></span><span class="ar" style="font-size:18px">المكتبة الشاملة</span></div>
     <div style="font:700 26px Inter;color:#555;padding:0 8px 6px">+</div></div>
   <div style="height:48px;background:#fff;display:flex;align-items:center;padding:0 16px;gap:12px;border-bottom:1px solid #ddd"><span style="font:700 18px Inter;color:#888">← →</span>
     <div style="flex:1;height:34px;border-radius:17px;background:#f1f3f4;display:flex;align-items:center;padding:0 16px;font:500 17px Inter;color:#222">🔒&nbsp;<span class="url"></span></div></div>
   <div style="position:relative;width:1500px;height:860px;background:#fff;overflow:hidden">
     <img class="hm" src="${pre}_home.png" style="position:absolute;inset:0;width:1500px;height:860px">
     <div class="qq ar" style="position:absolute;left:510px;width:560px;top:416px;height:34px;font-size:24px;color:#222;text-align:right;white-space:nowrap;overflow:hidden;background:#fff;opacity:0"></div>
     <img class="rs" src="${pre}_res.png" style="position:absolute;inset:0;width:1500px;height:860px;opacity:0">
     <div class="hl" style="position:absolute;left:918px;width:540px;top:${py - 30}px;height:146px;border:4px solid #e9f23a;border-radius:6px;opacity:0;box-shadow:0 0 0 2000px rgba(0,0,0,.18)"></div></div></div>
  <div class="curs" style="position:absolute;width:30px;height:30px"><svg width="30" height="30"><path d="M2 2 L2 24 L8 18 L13 27 L17 25 L12 16 L21 16Z" fill="#fff" stroke="#000" stroke-width="2"/></svg></div>`, o.css || 'left:210px;top:60px');
  const url = n.querySelector('.url'), qq = n.querySelector('.qq'), rs = n.querySelector('.rs'), hl = n.querySelector('.hl'), cur = n.querySelector('.curs'), nt = n.querySelector('.nt');
  const U1 = 'shamela.ws', U2 = 'shamela.ws/search?q=' + q;
  sfx(t0 + .3, 'click', .8); for (let i = 0; i < 10; i += 2) sfx(t0 + .5 + i * .05, 'tick', .5); for (let i = 0; i < q.length; i += 2) sfx(tType + i * .07, 'tick', .6);
  sfx(tGo, 'click', .9); sfx(tRes, 'paper', .7); sfx(tPick, 'click', .9);
  item(t0, t1, n, (lt, t) => {
    const k = eo(lt / .45); n.style.opacity = clamp(lt / .2) * clamp((t1 - t) / .3); n.style.transform = `translateY(${(1 - k) * 50}px)`;
    nt.style.opacity = t > t0 + .3 ? 1 : 0;
    url.textContent = t < tGo ? U1.slice(0, clamp(Math.floor((t - t0 - .5) / .05), 0, U1.length)) : U2;
    qq.textContent = t < tRes ? q.slice(0, clamp(Math.floor((t - tType) / .07), 0, q.length)) : ''; qq.style.opacity = t >= tType && t < tRes ? 1 : 0;
    rs.style.opacity = clamp((t - tRes) / .35); hl.style.opacity = clamp((t - tPick) / .25);
    const P = [[1460, 30, t0], [1460, 30, t0 + .3], [860, 540, tType], [860, 540, tGo - .4], [452, 540, tGo], [452, 540, tRes], [1180, py + 110, tPick], [1180, py + 110, t1]];
    let cx = P[0][0], cy = P[0][1];
    for (let j = 0; j < P.length - 1; j++) if (t >= P[j][2] && t <= P[j + 1][2]) { const u = eio((t - P[j][2]) / Math.max(.01, P[j + 1][2] - P[j][2])); cx = P[j][0] + (P[j + 1][0] - P[j][0]) * u; cy = P[j][1] + (P[j + 1][1] - P[j][1]) * u; }
    cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; cur.style.transform = [t0 + .3, tGo, tPick].some(c => t >= c && t < c + .15) ? 'scale(.8)' : '';
  });
  CUTS.push({ t: t1, kind: 'glitch' });
}
