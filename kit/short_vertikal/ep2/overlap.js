// node overlap.js t0 t1 step  -> laporan teks yang saling menimpa
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const [t0, t1, st] = process.argv.slice(2).map(Number);
  const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--disable-gpu'] });
  const pg = await br.newPage({ viewport: { width: 1080, height: 1920 } });
  pg.on('pageerror', e => { console.log('PAGE ERROR', e.message); process.exit(2); });
  await pg.goto('file://' + path.resolve(__dirname, 'index.html')); await pg.evaluate(() => document.fonts.ready);
  const nI = await pg.evaluate(() => ITEMS.length); if (!nI) { console.log('PAGE ERROR: tidak ada ITEMS'); process.exit(2); }
  for (let t = t0; t <= t1; t += st) {
    const r = await pg.evaluate(t => {
      setTime(t);
      const vis = el => { let o = 1; for (let e = el; e && e.nodeType === 1; e = e.parentElement) { const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden') return 0; o *= +cs.opacity; } return o; };
      const boxes = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n; while ((n = walker.nextNode())) {
        if (!n.textContent.trim()) continue; const el = n.parentElement; if (!el || el.closest('script,style')) continue;
        if (vis(el) < .5) continue;
        const rg = document.createRange(); rg.selectNodeContents(n);
        for (const b of rg.getClientRects()) { if (b.width < 4 || b.height < 4) continue; if (b.right < 0 || b.left > 1080 || b.bottom < 0 || b.top > 1920) continue;
          boxes.push({ el, txt: n.textContent.trim().slice(0, 30), x: b.left, y: b.top, w: b.width, h: b.height }); }
      }
      const out = [];
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
        const A = boxes[i], B = boxes[j]; if (A.el === B.el || A.el.contains(B.el) || B.el.contains(A.el)) continue;
        const ix = Math.min(A.x + A.w, B.x + B.w) - Math.max(A.x, B.x), iy = Math.min(A.y + A.h, B.y + B.h) - Math.max(A.y, B.y);
        if (ix > 6 && iy > Math.min(A.h, B.h) * .35) out.push(`"${A.txt}" x "${B.txt}"`);
      }
      return out;
    }, t);
    if (r.length) console.log(t.toFixed(1), r.slice(0, 4).join(' | '));
  }
  await br.close();
})();
