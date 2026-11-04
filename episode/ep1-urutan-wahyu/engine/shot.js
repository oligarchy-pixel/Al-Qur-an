// node shot.js stills <outdir> t1 t2 ...   |  node shot.js video <out.mp4> <f0> <f1> [scale]
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const PUB = path.join(__dirname, 'pub');
(async () => {
  const [mode, out, ...rest] = process.argv.slice(2);
  const scale = mode === 'video' ? (rest[2] || '1.5') : '1';
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: parseFloat(scale) });
  p.on('console', m => console.log('[page]', m.text())); p.on('pageerror', e => console.log('[err]', e.message));
  await p.route('http://vid.local/**', r => { const f = path.join(PUB, new URL(r.request().url()).pathname); r.fulfill({ path: f, contentType: f.endsWith('.js') ? 'text/javascript' : undefined }); });
  await p.goto(`http://vid.local/index.html?s=${scale}`); await p.waitForFunction('window.READY === true', null, { timeout: 20000 });
  if (mode === 'stills') {
    fs.mkdirSync(out, { recursive: true });
    for (const t of rest) { await p.evaluate(t => window.renderFrame(t), parseFloat(t)); await p.screenshot({ path: `${out}/s_${String(t).padStart(5, '0')}.png` }); }
  } else {
    const [f0, f1] = rest.map(Number);
    const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', '30', '-i', '-', '-c:v', 'libx264', '-crf', '16', '-preset', 'medium', '-pix_fmt', 'yuv420p', out], { stdio: ['pipe', 'inherit', 'inherit'] });
    for (let f = f0; f < f1; f++) { await p.evaluate(t => window.renderFrame(t), f / 30); const buf = await p.screenshot({ type: 'jpeg', quality: 95 }); if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r)); if (f % 60 === 0) console.log('frame', f); }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await b.close();
})();
