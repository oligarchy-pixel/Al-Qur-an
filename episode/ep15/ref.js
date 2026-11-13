// ===== Tambahan gaya referensi: bar bab, latar astrolab garis tipis, garis bercahaya
(() => {
  const st = document.createElement('style'); st.textContent = `.glow svg path,.glow svg circle,.glow svg rect{filter:drop-shadow(0 0 5px rgba(233,242,58,.55))}
  #chap{position:absolute;left:560px;top:22px;width:800px;z-index:55}#chap .tt{font:600 15px 'DejaVu Sans Mono';letter-spacing:.22em;color:#e9f23a;text-align:center}
  #chap .row{display:flex;gap:6px;margin-top:8px}#chap .sg{flex:1}#chap .bar{height:3px;background:rgba(233,242,58,.18);border-radius:2px;overflow:hidden}#chap .bar i{display:block;height:100%;width:0;background:#e9f23a}
  #chap .lb{font:600 11px 'DejaVu Sans Mono';letter-spacing:.12em;margin-top:6px;text-align:center;color:rgba(233,242,58,.45)}#chap .on .lb{color:#e9f23a}`;
  document.head.appendChild(st);
  const CH = [['NUSYUZ', 0, 105.7], ['KHULU\'', 105.7, 202.6], ['PETUNJUK', 202.6, 240.2], ['BERMASYARAKAT', 240.2, 325.7], ['MENCARI REZEKI', 325.7, 426.2], ['4 JENIS RIBA', 426.2, TOTAL]];
  const bar = document.createElement('div'); bar.id = 'chap'; bar.innerHTML = `<div class="tt">هُدًى لِلْمُتَّقِينَ · RUMAH TANGGA, MASYARAKAT &amp; RIBA</div><div class="row">${CH.map(c => `<div class="sg"><div class="bar"><i></i></div><div class="lb">${c[0]}</div></div>`).join('')}</div>`;
  document.getElementById('hud').appendChild(bar);
  // latar astrolab
  let s = 23; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; let g = '';
  [170, 300, 430, 560, 700].forEach((rr, i) => g += `<circle cx="960" cy="560" r="${rr}" fill="none" stroke="rgba(233,242,58,${i % 2 ? .05 : .08})" stroke-width="${i === 2 ? 2 : 1.2}" ${i === 3 ? 'stroke-dasharray="4 10"' : ''}/>`);
  for (let k = 0; k < 72; k++) { const a = k / 72 * Math.PI * 2, l = k % 6 ? 10 : 24; g += `<line x1="${960 + Math.cos(a) * 430}" y1="${560 + Math.sin(a) * 430}" x2="${960 + Math.cos(a) * (430 + l)}" y2="${560 + Math.sin(a) * (430 + l)}" stroke="rgba(233,242,58,.12)" stroke-width="1.5"/>`; }
  for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2; g += `<line x1="960" y1="560" x2="${960 + Math.cos(a) * 700}" y2="${560 + Math.sin(a) * 700}" stroke="rgba(233,242,58,.035)" stroke-width="1"/>`; }
  let st2 = ''; for (let k = 0; k < 70; k++) st2 += `<circle class="sx" data-p="${(r() * 6.28).toFixed(2)}" cx="${(r() * 1920).toFixed(0)}" cy="${(r() * 1080).toFixed(0)}" r="${(.8 + r() * 1.8).toFixed(1)}" fill="#fff8d0"/>`;
  const as = document.createElement('div'); as.id = 'astro'; as.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none';
  as.innerHTML = `<svg width="1920" height="1080"><g class="rot">${g}</g>${st2}</svg>`; document.body.insertBefore(as, document.getElementById('cam'));
  const rot = as.querySelector('.rot'), SX = [...as.querySelectorAll('.sx')], BI = [...bar.querySelectorAll('.bar i')], SG = [...bar.querySelectorAll('.sg')];
  const GLOW = [[37.7, 80.8], [137.3, 172.5], [202.6, 240.2], [373.8, 399.3], [426.2, 431.9], [550.7, 580.7]];
  ITEMS.forEach(it => { if (it.n.querySelector && it.n.querySelector('svg') && GLOW.some(([a, b]) => it.t0 >= a && it.t0 < b)) it.n.classList.add('glow'); });
  const base = window.setTime;
  window.setTime = function (t) { base(t);
    rot.setAttribute('transform', `rotate(${(t * 1.5) % 360} 960 560)`); SX.forEach(c => c.setAttribute('opacity', (.15 + .45 * (.5 + .5 * Math.sin(t * 1.3 + +c.dataset.p))).toFixed(2)));
    CH.forEach((c, i) => { const k = clamp((t - c[1]) / (c[2] - c[1])); BI[i].style.width = (k * 100) + '%'; SG[i].classList.toggle('on', t >= c[1] && t < c[2]); }); };
})();
