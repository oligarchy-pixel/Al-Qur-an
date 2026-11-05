import * as H from 'quran-meta/hafs';
import fs from 'fs';
const Q = JSON.parse(fs.readFileSync('node_modules/quran-json/dist/quran.json'));
const ids = []; Q.forEach(c => c.verses.forEach(v => ids.push([c.id, v.id, v.text])));
const out = {};
for (let p = 1; p <= 604; p++) {
  const m = H.getPageMeta(p); const blocks = [];
  for (let id = m.firstAyahId; id <= m.lastAyahId; id++) {
    const [s, a, txt] = ids[id - 1];
    let b = blocks[blocks.length - 1];
    if (!b || b.s !== s) { b = { s, name: Q[s - 1].name, head: a === 1, v: [] }; blocks.push(b); }
    b.v.push([a, txt]);
  }
  out[p] = blocks;
}
fs.writeFileSync('pub/pages_all.json', JSON.stringify(out));
const ver = {}; for (const [s, a] of [[1, 5], [2, 222], [2, 153], [2, 286], [94, 5], [13, 28], [65, 2], [65, 3]]) ver[s + ':' + a] = H.findPage(s, a);
console.log(ids.length, Object.keys(out).length, JSON.stringify(ver));
