const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: 1.5 });
  await p.route('http://vid.local/**', r => { const f = path.join(__dirname, 'pub', new URL(r.request().url()).pathname); r.fulfill({ path: f, contentType: f.endsWith('.js') ? 'text/javascript' : undefined }); });
  await p.goto('http://vid.local/ep2.html?cfg=ep4_baqarah.json&s=1.5&clean=1'); await p.waitForFunction('window.READY === true');
  for (const t of process.argv.slice(2)) { await p.evaluate(t => window.renderFrame(t), parseFloat(t)); await p.screenshot({ path: `car/ep4bg_${t}.png` }); }
  await b.close();
})();
