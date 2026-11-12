// node render.js preview t1,t2,... dir | node render.js vid <dari> <sampai> out.mp4 | node render.js sfx out.json
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path');
(async () => {
  const [mode, a, b, c] = process.argv.slice(2);
  const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--disable-gpu'] });
  const pg = await br.newPage({ viewport: { width: 1080, height: 1920 } });
  await pg.goto('file://' + path.resolve(__dirname, 'index.html'));
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(300);
  if (mode === 'sfx') { fs.writeFileSync(a, JSON.stringify(await pg.evaluate(() => getSFX()))); }
  else if (mode === 'preview') {
    fs.mkdirSync(b, { recursive: true });
    for (const t of a.split(',').map(Number)) { await pg.evaluate(t => setTime(t), t); await pg.screenshot({ path: `${b}/f_${t.toFixed(2).padStart(7, '0')}.jpg`, type: 'jpeg', quality: 85 }); }
  } else {
    const t0 = +a, t1 = +b, fps = 30, n = Math.round((t1 - t0) * fps);
    const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', '30', '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', '30', c]);
    for (let i = 0; i < n; i++) {
      await pg.evaluate(t => setTime(t), t0 + i / fps);
      const buf = await pg.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 300 === 0) console.log(c, i, '/', n);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await br.close();
})();
