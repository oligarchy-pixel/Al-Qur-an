const { chromium } = require('playwright'); const path = require('path');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  p.on('pageerror', e => console.log('[err]', e.message));
  await p.route('http://vid.local/**', r => { const f = path.join(__dirname, 'pub', new URL(r.request().url()).pathname); r.fulfill({ path: f, contentType: f.endsWith('.js') ? 'text/javascript' : undefined }); });
  await p.goto('http://vid.local/cover.html'); await p.waitForFunction('window.DONE===true'); await p.screenshot({ path: 'cover/cover.png' }); await b.close(); })();
