const { chromium } = require('playwright'); const path = require('path');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  p.on('pageerror', e => console.log('[err]', e.message));
  await p.route('http://vid.local/**', r => { const f = path.join(__dirname, 'pub', new URL(r.request().url()).pathname); r.fulfill({ path: f }); });
  for (let i = 0; i < 8; i++) { await p.goto(`http://vid.local/carousel.html?i=${i}`); await p.waitForFunction('window.DONE===true'); await p.screenshot({ path: `car/slide_${i + 1}.png` }); }
  await b.close(); })();
