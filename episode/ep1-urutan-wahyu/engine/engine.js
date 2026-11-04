// Ep1 "Urutan Wahyu 3D" — render(t) murni. 720x1280 logis, skala ?s= (default 1.5 -> 1080x1920)
import * as THREE from 'three';

const W = 720, H = 1280;
const SC = parseFloat(new URLSearchParams(location.search).get('s') || '1.5');
export const END = 55.0;

// ---------- util ----------
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, u) => a + (b - a) * u;
const ss = (a, b, t) => { const u = clamp((t - a) / (b - a)); return u * u * (3 - 2 * u); };
const eio = u => u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
const eoBack = u => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(u - 1, 3) + c1 * Math.pow(u - 1, 2); };
const win = (t, a, b, fi = .35, fo = .3) => Math.min(ss(a, a + fi, t), 1 - ss(b - fo, b, t));
function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const AR = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

const GOLD = '#E4C47B', GOLD2 = '#AF9A69', WHITE = '#F0EEEC', GREY = '#8A8780';
const SANS = '"Inter Display", Inter, sans-serif';

// ---------- canvases ----------
const bg = document.getElementById('bg'), ov = document.getElementById('ov'), gl = document.getElementById('gl');
for (const c of [bg, ov]) { c.width = W * SC; c.height = H * SC; }
const bx = bg.getContext('2d'), ox = ov.getContext('2d');
bx.setTransform(SC, 0, 0, SC, 0, 0); ox.setTransform(SC, 0, 0, SC, 0, 0);

// ---------- data ----------
const PAGES = await (await fetch('pages.json')).json();
const SUR = (await (await fetch('surah114.json')).json()).surah;
await document.fonts.load('40px Sch'); await document.fonts.load('40px SchB');
await document.fonts.load(`bold 30px ${SANS}`);

// ---------- mushaf page textures ----------
const PW = 640, PH = 910;
const layoutCache = {};
function layoutPage(p) {
  if (layoutCache[p]) return layoutCache[p];
  const c = document.createElement('canvas').getContext('2d');
  const FS = 29, LH = 49, X0 = 52, X1 = PW - 52; let y = 88;
  const items = []; // {type, ...}
  for (const blk of PAGES[p]) {
    if (blk.head) {
      items.push({ type: 'head', y, name: blk.name }); y += 58;
      if (blk.s !== 1 && blk.s !== 9) { items.push({ type: 'basm', y }); y += LH; }
    }
    // tokens
    const toks = [];
    for (const [a, txt] of blk.v) { for (const w of txt.split(' ')) toks.push({ w, a }); toks.push({ m: a, a }); }
    c.font = `${FS}px Sch`;
    const meas = tk => tk.m ? 30 : c.measureText(tk.w).width;
    let line = [], lw = 0; const sp = 9;
    const flush = (last) => { if (!line.length) return; items.push({ type: 'line', y, toks: line, just: !last, s: blk.s }); y += LH; line = []; lw = 0; };
    for (const tk of toks) {
      const w = meas(tk);
      if (lw + w + (line.length ? sp : 0) > X1 - X0 && line.length) flush(false);
      line.push({ ...tk, wd: w }); lw += w + (line.length > 1 ? sp : 0);
    }
    flush(true);
    y += 4;
  }
  // position words (RTL)
  for (const it of items) if (it.type === 'line') {
    const tot = it.toks.reduce((s, k) => s + k.wd, 0);
    const gap = it.just && it.toks.length > 1 ? (X1 - X0 - tot) / (it.toks.length - 1) : 9;
    let x = X1; for (const k of it.toks) { k.x1 = x; k.x0 = x - k.wd; x -= k.wd + gap; }
  }
  return (layoutCache[p] = { items, FS, LH, X0, X1 });
}
function hlFrac(p, ayas) { // pusat vertikal baris sorotan (0..1 dari atas)
  const L = layoutPage(p); let ys = [];
  for (const it of L.items) if (it.type === 'line' && it.toks.some(k => ayas.includes(it.s + ':' + k.a))) ys.push(it.y);
  const m = ys.length ? (Math.min(...ys) + Math.max(...ys)) / 2 : PH / 2;
  return m / PH;
}
function drawPage(p, hl = [], amt = 0) {
  const cv = document.createElement('canvas'); cv.width = PW; cv.height = PH; const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, PW, 0); g.addColorStop(0, '#F3E6C8'); g.addColorStop(.5, '#FBF1D8'); g.addColorStop(1, '#F1E2C2');
  c.fillStyle = g; c.fillRect(0, 0, PW, PH);
  c.strokeStyle = '#B99A5B'; c.lineWidth = 3; c.strokeRect(30, 40, PW - 60, PH - 92);
  c.strokeStyle = '#D6BE86'; c.lineWidth = 1.2; c.strokeRect(38, 48, PW - 76, PH - 108);
  c.fillStyle = '#7d6a45'; c.font = '18px Sch'; c.textAlign = 'center'; c.direction = 'rtl';
  c.fillText(AR(p), PW / 2, PH - 22);
  const L = layoutPage(p);
  // sorotan
  if (amt > 0) for (const it of L.items) if (it.type === 'line') {
    const ks = it.toks.filter(k => hl.includes(it.s + ':' + k.a)); if (!ks.length) continue;
    const x0 = Math.min(...ks.map(k => k.x0)) - 6, x1 = Math.max(...ks.map(k => k.x1)) + 6;
    c.save(); c.shadowColor = `rgba(255,200,80,${.9 * amt})`; c.shadowBlur = 26;
    c.fillStyle = `rgba(255,214,96,${.62 * amt})`; c.beginPath(); c.roundRect(x0, it.y - 33, x1 - x0, 42, 8); c.fill(); c.restore();
  }
  for (const it of L.items) {
    if (it.type === 'head') {
      c.save(); c.fillStyle = '#EFDDAF'; c.strokeStyle = '#B99A5B'; c.lineWidth = 2;
      c.beginPath(); c.roundRect(70, it.y - 10, PW - 140, 46, 23); c.fill(); c.stroke();
      c.fillStyle = '#4a3a1e'; c.font = '26px SchB'; c.textAlign = 'center'; c.direction = 'rtl';
      c.fillText('سُورَةُ ' + it.name, PW / 2, it.y + 22); c.restore();
    } else if (it.type === 'basm') {
      c.fillStyle = '#222'; c.font = `${L.FS}px Sch`; c.textAlign = 'center'; c.direction = 'rtl';
      c.fillText('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ', PW / 2, it.y);
    } else {
      for (const k of it.toks) {
        if (k.m) {
          const cx = (k.x0 + k.x1) / 2, cy = it.y - 10;
          c.strokeStyle = '#A88A4E'; c.lineWidth = 1.6; c.beginPath(); c.arc(cx, cy, 13, 0, 7); c.stroke();
          c.fillStyle = '#5a4824'; c.font = '17px Sch'; c.textAlign = 'center'; c.direction = 'rtl'; c.fillText(AR(k.m), cx, cy + 6);
        } else {
          c.fillStyle = '#1d1a16'; c.font = `${L.FS}px Sch`; c.textAlign = 'right'; c.direction = 'rtl'; c.fillText(k.w, k.x1, it.y);
        }
      }
    }
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
const texCache = {};
function pageTex(p, hl = [], amt = 0) {
  const q = Math.round(amt * 8) / 8, key = p + '|' + (q > 0 ? hl.join(',') + q : '');
  return texCache[key] || (texCache[key] = drawPage(p, hl, q));
}
const HL597 = ['96:1', '96:2', '96:3', '96:4', '96:5'], HL47 = ['2:278'];

// ---------- three ----------
const renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(SC); renderer.setSize(W, H, false);
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(48, W / H, 0.03, 100);
scene.add(new THREE.AmbientLight(0xfff1dc, 0.55));
const key = new THREE.DirectionalLight(0xfff0d8, 1.6); key.position.set(-2, 5, 4); scene.add(key);
const orbLight = new THREE.PointLight(0xffc56a, 0, 6, 1.6); scene.add(orbLight);

// mushaf
const PGW = 1.0, PGH = 1.42;
const bend = x => 0.07 * Math.sin(Math.min(Math.abs(x) / 0.28, 1) * Math.PI / 2) - 0.012 * Math.abs(x);
function pageGeom(side) { // side +1 kanan, -1 kiri
  const g = new THREE.PlaneGeometry(PGW, PGH, 40, 1); g.rotateX(-Math.PI / 2); g.translate(side * PGW / 2, 0, 0);
  const pos = g.attributes.position; for (let i = 0; i < pos.count; i++) pos.setY(i, bend(pos.getX(i))); pos.needsUpdate = true; g.computeVertexNormals(); return g;
}
const mushaf = new THREE.Group(); scene.add(mushaf);
const pmat = () => new THREE.MeshStandardMaterial({ roughness: .92, metalness: 0, transparent: true });
const leftM = new THREE.Mesh(pageGeom(-1), pmat()), rightM = new THREE.Mesh(pageGeom(1), pmat());
mushaf.add(leftM, rightM);
const blockMat = new THREE.MeshStandardMaterial({ color: 0xe9dcbc, roughness: .9, transparent: true });
const coverMat = new THREE.MeshStandardMaterial({ color: 0x2a1d12, roughness: .6, metalness: .2, transparent: true });
for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(PGW * .99, .07, PGH * .99), blockMat); b.position.set(s * PGW / 2, -.04, 0); mushaf.add(b); }
const cover = new THREE.Mesh(new THREE.BoxGeometry(PGW * 2.08, .025, PGH * 1.04), coverMat); cover.position.y = -.09; mushaf.add(cover);
// lembar balik (+ 2 bayangan motion blur)
const flippers = [];
for (let k = 0; k < 3; k++) {
  const piv = new THREE.Group(); const U = new THREE.Mesh(pageGeom(1), pmat()); const D = new THREE.Mesh(pageGeom(-1).rotateZ(Math.PI), pmat());
  U.position.y = .003; D.position.y = -.003; piv.add(U, D); piv.position.y = .004; mushaf.add(piv); flippers.push({ piv, U, D });
}
const FWD = [[1.6, .42, 1, 165], [2.3, .42, 165, 459], [3.0, .45, 459, 597]];
const BWD = [[11.1, .45, 597, 529], [11.8, .45, 529, 229], [12.5, .5, 229, 47]];

// kitab hitam bersampul bintang
function coverTex() {
  const cv = document.createElement('canvas'); cv.width = 800; cv.height = 1080; const c = cv.getContext('2d');
  const g = c.createRadialGradient(400, 540, 50, 400, 540, 700); g.addColorStop(0, '#221c16'); g.addColorStop(1, '#0d0b09');
  c.fillStyle = g; c.fillRect(0, 0, 800, 1080);
  c.strokeStyle = '#C99A3B'; c.lineWidth = 7; c.strokeRect(70, 70, 660, 940);
  c.translate(400, 540); c.fillStyle = '#C9952F'; c.shadowColor = 'rgba(230,170,60,.5)'; c.shadowBlur = 20;
  for (const r of [0, Math.PI / 4]) { c.save(); c.rotate(r); c.fillRect(-105, -105, 210, 210); c.restore(); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
const ring = new THREE.Group(); scene.add(ring);
const BOOK = { w: 1.0, h: .2, d: 1.35 };
const book = new THREE.Group(); ring.add(book);
{
  const side = new THREE.MeshStandardMaterial({ color: 0x14100c, roughness: .55, metalness: .25 });
  const top = new THREE.MeshStandardMaterial({ map: coverTex(), roughness: .5, metalness: .2 });
  const m = new THREE.Mesh(new THREE.BoxGeometry(BOOK.w, BOOK.h, BOOK.d), [side, side, top, side, side, side]); m.position.y = BOOK.h / 2; book.add(m);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(BOOK.w * .96, BOOK.h * .7, .01), new THREE.MeshStandardMaterial({ color: 0x3a2a1a })); edge.position.set(0, BOOK.h / 2, BOOK.d / 2 + .002); book.add(edge);
}
const R = 2.35;
const disk = new THREE.Mesh(new THREE.CylinderGeometry(3.05, 3.05, .04, 160), new THREE.MeshStandardMaterial({ color: 0x0c0a08, roughness: .35, metalness: .5 }));
disk.position.y = -.025; ring.add(disk);
const ticks = new THREE.InstancedMesh(new THREE.BoxGeometry(.012, .01, .16), new THREE.MeshBasicMaterial({ color: 0x9a9284 }), 120); ring.add(ticks);
const rimLine = new THREE.Mesh(new THREE.TorusGeometry(2.72, .006, 6, 200), new THREE.MeshBasicMaterial({ color: 0x5a5245 })); rimLine.rotation.x = Math.PI / 2; ring.add(rimLine);
// 114 batang
const bars = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, .5, 0), new THREE.MeshStandardMaterial({ roughness: .45, metalness: .15 }), 114);
bars.instanceMatrix.setUsage(THREE.DynamicDrawUsage); ring.add(bars);
const bw = 2 * Math.PI * R / 114 * .62;
const SURx = SUR.map((s, i) => ({ ...s, hgt: .1 + 1.55 * Math.sqrt(s.ayat / 286), rnd: rng(i + 7)() }));
const thR = r => -0.35 + 2 * Math.PI * (r - .5) / 114;          // sudut urutan turun
const thM = n => Math.PI - 0.55 + 2 * Math.PI * (n - .5) / 114;  // sudut urutan mushaf
const polar = (th, r = R) => new THREE.Vector3(r * Math.sin(th), 0, -r * Math.cos(th));
const COL_MAK = new THREE.Color('#EDE5D3'), COL_MAD = new THREE.Color('#8C6A2C'), COL_HOT = new THREE.Color('#FFE2A0');
// orb
function glowTex() { const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'); const g = c.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,248,225,1)'); g.addColorStop(.18, 'rgba(255,214,130,.9)'); g.addColorStop(.5, 'rgba(255,170,60,.25)'); g.addColorStop(1, 'rgba(255,150,40,0)'); c.fillStyle = g; c.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(cv); }
const GT = glowTex();
const orb = new THREE.Sprite(new THREE.SpriteMaterial({ map: GT, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); scene.add(orb);
// lembar terbang
const flyMat = new THREE.MeshStandardMaterial({ color: 0xf3e8cc, roughness: .9, side: THREE.DoubleSide, transparent: true });
const flys = []; { const r = rng(11); for (let k = 0; k < 34; k++) { const m = new THREE.Mesh(new THREE.PlaneGeometry(.24, .34), flyMat.clone()); m.userData = { a0: r() * 6.28, d: r() * .5, sp: .8 + r() * .6, h: .6 + r() * 1.2 }; scene.add(m); flys.push(m); } }
// lempeng ayat (makro)
const slab = new THREE.Mesh(new THREE.BoxGeometry(bw * 1.25, .035, .2), new THREE.MeshBasicMaterial({ color: 0xffe9b0 })); scene.add(slab);
const slabGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: GT, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); scene.add(slabGlow);

// ---------- waktu-ke-keadaan ----------
const F597 = hlFrac(597, HL597), F47 = hlFrac(47, HL47);
const zOf = f => -PGH / 2 + PGH * f;
const Z597 = zOf(F597), Z47 = zOf(F47);
const BQ = polar(thM(2)), BQout = BQ.clone().normalize();
const CAM = [
  [0, [0, 3.75, 3.65], [0, -.5, .2]],
  [4.3, [.1, 3.35, 3.25], [.05, -.45, .15]],
  [5.3, [.48, 1.05, Z597 + 1.0], [.5, 0, Z597]],
  [6.15, [.5, .32, Z597 + .22], [.5, 0, Z597]],
  [10.35, [.48, .9, Z597 + .85], [.5, 0, Z597]],
  [11.05, [0, 3.7, 3.6], [0, -.5, .2]],
  [13.25, [0, 3.55, 3.45], [0, -.48, .2]],
  [14.25, [.45, 1.5, Z47 + 1.35], [.45, -.12, Z47]],
  [17.9, [.3, 1.75, Z47 + 1.6], [.4, -.14, Z47]],
  [19.9, [0, 6.4, 10.2], [0, .2, 0]],
  [25.9, [2.0, 5.4, 9.6], [0, .35, 0]],
  [30.2, [-1.4, 5.3, 9.4], [0, .35, 0]],
  [32.3, [0, 7.4, 8.4], [0, 0, 0]],
  [34.7, [.3, 7.0, 8.9], [0, .1, 0]],
  [35.8, BQ.clone().addScaledVector(BQout, 2.5).add(new THREE.Vector3(.5, .75, 0)).toArray(), BQ.clone().add(new THREE.Vector3(0, .95, 0)).toArray()],
  [40.0, BQ.clone().addScaledVector(BQout, 2.9).add(new THREE.Vector3(.2, 1.0, 0)).toArray(), BQ.clone().add(new THREE.Vector3(0, .9, 0)).toArray()],
  [41.3, [0, 5.8, 9.9], [0, .35, 0]],
  [46.8, [-2.6, 5.4, 9.3], [0, .35, 0]],
  [49.7, [0, 3.3, 2.2], [0, .75, -.1]],
  [END, [0, 3.1, 2.05], [0, .78, -.1]],
];
function camAt(t) {
  let i = 0; while (i < CAM.length - 2 && t > CAM[i + 1][0]) i++;
  const [t0, p0, q0] = CAM[i], [t1, p1, q1] = CAM[i + 1]; const u = eio(clamp((t - t0) / (t1 - t0)));
  const P = p0.map((v, k) => lerp(v, p1[k], u)), Q = q0.map((v, k) => lerp(v, q1[k], u));
  // drift halus supaya kamera tidak pernah diam
  P[0] += .03 * Math.sin(t * .7); P[1] += .02 * Math.sin(t * .53 + 1);
  cam.position.set(...P); cam.lookAt(...Q);
}
function spreadAt(t) { // {L,R,flip:{phi,U,D}|null}
  const fl = t < 10 ? FWD : BWD; let cur = t < 10 ? 1 : 597;
  for (const [t0, d, a, b] of fl) {
    if (t < t0) break;
    if (t < t0 + d) {
      const u = eio((t - t0) / d);
      if (t < 10) return { L: b + 1, R: a, flip: { phi: Math.PI * (1 - u), U: b, D: a + 1, u }, num: Math.round(lerp(a, b, u)) };
      return { L: a + 1, R: b, flip: { phi: Math.PI * u, U: a, D: b + 1, u }, num: Math.round(lerp(a, b, u)) };
    }
    cur = b;
  }
  return { L: cur + 1, R: cur, flip: null, num: cur };
}
function revYear(rk) { return rk <= 86 ? 610 + 12 * rk / 86 : 622 + 10 * (rk - 86) / 28; }
const GROW0 = 20.5, GROW1 = 29.0;
const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e4 = new THREE.Euler(), s4 = new THREE.Vector3(), v4 = new THREE.Vector3(), c4 = new THREE.Color();
const barTop = []; // posisi puncak batang (untuk label)

function update3D(t) {
  camAt(t);
  // --- mushaf ---
  const showM = t < 20.2 && !(t > 6.08 && t < 10.33);
  mushaf.visible = showM;
  if (showM) {
    const sp = spreadAt(t);
    const hlA = t < 10 ? ss(4.7, 5.3, t) : 0, hlB = ss(13.6, 14.2, t) * (1 - ss(16.6, 17.6, t));
    leftM.material.map = pageTex(sp.L); rightM.material.map = pageTex(sp.R, sp.R === 597 ? HL597 : HL47, sp.R === 597 ? hlA : hlB);
    leftM.material.needsUpdate = rightM.material.needsUpdate = true;
    flippers.forEach((f, k) => {
      f.piv.visible = !!sp.flip; if (!sp.flip) return;
      const dir = t < 10 ? 1 : -1; const phi = clamp(sp.flip.phi + dir * k * .16, 0, Math.PI);
      f.piv.rotation.z = phi; f.U.material.map = pageTex(sp.flip.U); f.D.material.map = pageTex(sp.flip.D);
      const op = k === 0 ? 1 : .28 / k; f.U.material.opacity = f.D.material.opacity = op; f.U.material.needsUpdate = f.D.material.needsUpdate = true;
    });
    // mushaf -> kitab (18.1-19.8)
    const u = ss(18.1, 19.6, t); const fade = 1 - ss(18.6, 19.7, t);
    mushaf.scale.setScalar(lerp(1, .55, u)); mushaf.position.y = lerp(0, .12, u);
    for (const m of [leftM.material, rightM.material, blockMat, coverMat]) m.opacity = fade;
  }
  // lembar terbang
  for (const m of flys) {
    const d = m.userData; const u = clamp((t - 18.1 - d.d) / 1.9 * d.sp);
    m.visible = u > 0 && u < 1; if (!m.visible) continue;
    const a = d.a0 + u * 4.2, r = .25 + u * 2.9; m.position.set(r * Math.sin(a), .15 + d.h * Math.sin(u * Math.PI) + u * .4, -r * Math.cos(a));
    m.rotation.set(-Math.PI / 2 + u * 2.4 * d.sp, a, u * 3);
    m.material.opacity = (1 - ss(.55, 1, u)) * ss(0, .1, u);
  }
  // --- cincin ---
  const showR = t > 18.3; ring.visible = showR;
  const bookIn = ss(18.5, 19.7, t); book.scale.setScalar(lerp(.6, 1, bookIn)); book.visible = bookIn > 0;
  disk.material.opacity = bookIn; disk.material.transparent = true;
  for (let i = 0; i < 120; i++) {
    const th = 2 * Math.PI * i / 120, on = ss(18.6 + i / 120 * 1.2, 18.9 + i / 120 * 1.2, t);
    m4.compose(polar(th, 2.86), q4.setFromEuler(e4.set(0, -th, 0)), s4.set(1, 1, i % 10 === 0 ? on * 1.8 : on)); ticks.setMatrixAt(i, m4);
  }
  ticks.instanceMatrix.needsUpdate = true;
  rimLine.scale.setScalar(.6 + .4 * bookIn); rimLine.material.opacity = bookIn; rimLine.material.transparent = true;
  // batang
  const Pr = 114 * clamp((t - GROW0) / (GROW1 - GROW0));
  const sweep = (a0, a1) => (t > a0 && t < a1) ? -0.35 + 2 * Math.PI * (t - a0) / (a1 - a0) : null;
  const sw = [sweep(40.3, 42.1), sweep(42.6, 44.5), sweep(44.7, 46.6)].filter(x => x !== null);
  let orbPos = null;
  for (let i = 0; i < 114; i++) {
    const s = SURx[i], rk = s.urutan_turun;
    let g = eoBack(clamp((Pr - (rk - 1)) / 2.5)); if (t > GROW1) g = 1;
    // susun ulang 32.4-34.6
    const ru = clamp((t - 32.45 - s.rnd * .85) / 1.05), re = eio(ru);
    let th = lerp(thR(rk), thM(s.no), re);
    const pos = polar(th); pos.y = .9 * Math.sin(Math.PI * ru) * (.6 + s.rnd);
    const rot = Math.sin(Math.PI * ru) * (s.rnd - .5) * 5;
    // penutup: rebah masuk kitab 47.0-49.2
    const cu = eio(clamp((t - 47.0 - ((th % 6.283 + 6.283) % 6.283) / 6.283 * 1.2) / .9));
    pos.multiplyScalar(lerp(1, .12, cu)); pos.y += 0;
    const hgt = s.hgt * g * lerp(1, .05, cu);
    // makro: ayat masuk ke Al-Baqarah
    e4.set(rot * .3 + cu * 1.4, -th, rot * .2); q4.setFromEuler(e4);
    m4.compose(pos, q4, s4.set(bw * lerp(1, .5, cu), Math.max(hgt, .0001), .16 * lerp(1, .5, cu))); bars.setMatrixAt(i, m4);
    // warna
    c4.copy(s.jenis === 'madaniyah' ? COL_MAD : COL_MAK);
    let hot = 0;
    if (t > GROW0 && t < GROW1 + .6) hot = Math.max(0, 1 - Math.abs(Pr - rk) / 3) * .9;
    for (const a of sw) { let d = ((th - a) % 6.283 + 6.283 + 3.1416) % 6.283 - 3.1416; hot = Math.max(hot, Math.exp(-((d / .32) ** 2))); }
    c4.lerp(COL_HOT, hot * .85).multiplyScalar(1 + hot * 1.2); bars.setColorAt(i, c4);
    barTop[s.no] = pos.clone().add(new THREE.Vector3(0, hgt + .06, 0));
  }
  bars.instanceMatrix.needsUpdate = true; bars.instanceColor.needsUpdate = true; bars.visible = t > GROW0 - .1 && t < 49.6;
  // orb
  let orbOn = 0;
  if (t > GROW0 && t < GROW1 + .5) { orbPos = polar(thR(clamp(Pr, .5, 113.5)), R + .02).setY(.55); orbOn = win(t, GROW0, GROW1 + .5, .3, .5); }
  else if (sw.length) { orbPos = polar(sw[sw.length - 1], R + .02).setY(.7); orbOn = 1; }
  else if (t > 47.5) { orbPos = new THREE.Vector3(0, .95, -.35); orbOn = ss(47.8, 49.0, t); }
  else if (t > 34.8 && t < 40.4) { orbPos = BQ.clone().add(new THREE.Vector3(-.75, .55, .35)); orbOn = win(t, 34.9, 40.3, .6, .4); }
  orb.visible = !!orbPos && orbOn > 0.01;
  if (orb.visible) { orb.position.copy(orbPos); orb.scale.setScalar(.75); orb.material.opacity = orbOn; orbLight.position.copy(orbPos); orbLight.intensity = 3 * orbOn; } else orbLight.intensity = 0;
  // lempeng ayat
  const su = clamp((t - 36.0) / 1.5); slab.visible = slabGlow.visible = t > 35.6 && t < 40.4;
  if (slab.visible) {
    const top = barTop[2]; const p = top.clone().add(new THREE.Vector3(0, lerp(1.1, -.12, eio(su)), 0));
    slab.position.copy(p); slab.rotation.y = -thM(2); slabGlow.position.copy(p); slabGlow.scale.setScalar(.55 + .5 * ss(1, 1.0, su));
    slabGlow.material.opacity = win(t, 35.6, 40.4, .4, .4); slab.material.opacity = slabGlow.material.opacity; slab.material.transparent = true;
  }
  renderer.render(scene, cam);
}

// ---------- latar 2D ----------
const STARS = (() => { const r = rng(3); return Array.from({ length: 260 }, () => ({ x: r() * W, y: r() * H, s: .3 + r() * 1.3, p: r() * 6.28, f: .4 + r() * 1.6, d: r() })); })();
function drawBg(t) {
  bx.clearRect(0, 0, W, H);
  const g = bx.createRadialGradient(W / 2, H * .45, 40, W / 2, H * .5, 900); g.addColorStop(0, '#16110c'); g.addColorStop(.55, '#0a0807'); g.addColorStop(1, '#030303');
  bx.fillStyle = g; bx.fillRect(0, 0, W, H);
  for (const s of STARS) {
    const y = (s.y - t * 4 * s.d + H * 4) % H; const a = .25 + .55 * (.5 + .5 * Math.sin(t * s.f + s.p));
    bx.globalAlpha = a * (.35 + .65 * s.d); bx.fillStyle = '#fff'; bx.beginPath(); bx.arc(s.x, y, s.s, 0, 7); bx.fill();
  }
  bx.globalAlpha = 1;
}

// ---------- overlay ----------
function proj(v) { const p = v.clone().project(cam); return [(p.x + 1) / 2 * W, (1 - p.y) / 2 * H, p.z < 1]; }
function txt(s, x, y, { font = `bold 30px ${SANS}`, col = WHITE, al = 'left', a = 1, ls = '0px', blur = 0, sh = 0 } = {}) {
  ox.save(); ox.globalAlpha = a; ox.font = font; ox.fillStyle = col; ox.textAlign = al; ox.letterSpacing = ls; if (blur > .1) ox.filter = `blur(${blur}px)`;
  if (sh) { ox.shadowColor = col; ox.shadowBlur = sh; } ox.fillText(s, x, y); ox.restore();
}
function label(s, x, y, a, col = GREY, al = 'left', size = 10) { txt(s.toUpperCase(), x, y, { font: `600 ${size}px ${SANS}`, col, al, a, ls: '1.6px' }); }
// judul: [t0,t1,[[seg..],[seg..]],opts]; seg = 'teks' | ['teks','g'] | ['teks','ar']
const TITLES = [
  [0.25, 4.45, [['Wahyu pertama'], ['bukan di halaman ', ['1.', 'g']]]],
  [4.75, 6.0, [['Ia ada di'], ['halaman ', ['597.', 'g']]]],
  [10.75, 13.45, [['Lalu ayat yang'], ['terakhir turun?']]],
  [13.6, 15.0, [['Halaman ', ['47.', 'g']]]],
  [15.15, 18.0, [['Kenapa tidak'], [['berurutan?', 'g']]]],
  [18.25, 20.4, [['Al-Qur\'an tidak turun'], ['sebagai kitab ', ['jadi.', 'g']]]],
  [20.65, 22.9, [['Ia turun selama'], [['23', 'g'], ' tahun.']]],
  [23.1, 25.8, [['Sedikit demi sedikit,'], ['mengikuti peristiwa.']]],
  [30.3, 32.25, [['Urutan'], ['ia ', ['turun.', 'g']]]],
  [32.4, 34.7, [['Urutan'], ['yang kamu ', ['baca.', 'g']]]],
  [34.95, 40.0, [['Tempat setiap ayat ditetapkan'], ['oleh ', ['Rasulullah', 'g'], ' sallallahu'], ['\'alaihi wa sallam.']], { size: 27 }],
  [40.25, 41.95, [['Setiap Ramadan, Jibril \'alaihissalam'], ['memuraja\'ah semuanya.']], { size: 26 }],
  [42.1, 46.8, [['Di tahun terakhir,'], [['dua kali.', 'g']]]],
  [47.05, 51.3, [['Diturunkan untuk ', ['saatnya.', 'g']], ['Disusun untuk ', ['sepanjang masa.', 'g']]], { center: true, y: 150 }],
];
function drawTitle(T, t) {
  const [t0, t1, lines, o = {}] = T; if (t < t0 || t > t1) return;
  const ai = ss(t0, t0 + .35, t), ao = 1 - ss(t1 - .3, t1, t), a = Math.min(ai, ao); if (a <= 0) return;
  const blur = 8 * (1 - a), dy = 6 * (1 - ai);
  const size = o.size || 31, lh = size * 1.12, y0 = (o.y || 118) + dy;
  lines.forEach((ln, li) => {
    const segs = ln.map(s => typeof s === 'string' ? [s, ''] : s);
    ox.font = `bold ${size}px ${SANS}`; ox.letterSpacing = '-0.6px';
    const wid = segs.reduce((w, [s]) => w + ox.measureText(s).width, 0);
    let x = o.center ? W / 2 - wid / 2 : 30;
    for (const [s, k] of segs) { txt(s, x, y0 + li * lh, { font: `bold ${size}px ${SANS}`, col: k === 'g' ? GOLD : WHITE, a, blur, ls: '-0.6px' }); ox.font = `bold ${size}px ${SANS}`; ox.letterSpacing = '-0.6px'; x += ox.measureText(s).width; }
  });
}
function counter(t, num, suffix, gold, a, lab, y = 760) {
  if (a <= 0) return;
  label(lab, W / 2, y - 58, a * .8, GREY, 'center', 9);
  ox.font = `bold 66px ${SANS}`; ox.letterSpacing = '-2px'; const w = ox.measureText(String(num)).width;
  txt(String(num), W / 2 - 18, y, { font: `bold 66px ${SANS}`, col: gold ? GOLD : WHITE, al: 'center', a, ls: '-2px' });
  txt(suffix, W / 2 - 18 + w / 2 + 4, y, { font: `600 19px ${SANS}`, col: GREY, a });
}
function pill(x, y, l1, l2, a) {
  if (a <= 0) return; ox.save(); ox.globalAlpha = a; ox.font = `600 13px ${SANS}`; const w = Math.max(ox.measureText(l1).width, 92) + 24;
  ox.fillStyle = 'rgba(14,12,10,.82)'; ox.strokeStyle = 'rgba(255,255,255,.22)'; ox.lineWidth = 1; ox.beginPath(); ox.roundRect(x, y, w, 40, 7); ox.fill(); ox.stroke(); ox.restore();
  txt(l1, x + w / 2, y + 17, { font: `600 13px ${SANS}`, al: 'center', a }); label(l2, x + w / 2, y + 32, a, GOLD2, 'center', 8);
}
function glassCard(x, y, w, h, lab, q, a) {
  if (a <= 0) return; ox.save(); ox.globalAlpha = a; ox.fillStyle = 'rgba(20,18,14,.62)'; ox.strokeStyle = 'rgba(255,255,255,.12)'; ox.beginPath(); ox.roundRect(x, y, w, h, 14); ox.fill(); ox.stroke(); ox.restore();
  label(lab, x + 20, y + 28, a, GOLD2, 'left', 9);
  q.forEach((l, i) => txt(l, x + 20, y + 58 + i * 25, { font: `500 19px ${SANS}`, a }));
}
function calli(t) { // adegan Iqra' (6.0-10.4)
  const A = win(t, 6.0, 10.4, .25, .25); if (A <= 0) return;
  ox.save(); ox.globalAlpha = A;
  // gunung
  const gy = 1010; const mg = ox.createLinearGradient(0, gy - 200, 0, H); mg.addColorStop(0, '#1a140d'); mg.addColorStop(1, '#070605');
  ox.beginPath(); ox.moveTo(0, gy + 120); ox.bezierCurveTo(200, gy + 90, 290, gy - 30, W / 2, gy - 150); ox.bezierCurveTo(430, gy - 30, 520, gy + 80, W, gy + 100); ox.lineTo(W, H); ox.lineTo(0, H); ox.closePath();
  ox.fillStyle = mg; ox.fill(); ox.strokeStyle = 'rgba(228,196,123,.55)'; ox.lineWidth = 1.4; ox.shadowColor = GOLD; ox.shadowBlur = 10; ox.stroke(); ox.shadowBlur = 0;
  ox.beginPath(); ox.moveTo(60, gy + 170); ox.bezierCurveTo(250, gy + 120, 420, gy + 60, W - 20, gy + 150); ox.strokeStyle = 'rgba(175,154,105,.25)'; ox.stroke();
  const pa = .7 + .3 * Math.sin(t * 3); const gx = W / 2, gyy = gy - 118; const rg = ox.createRadialGradient(gx, gyy, 0, gx, gyy, 90);
  rg.addColorStop(0, `rgba(255,240,200,${pa})`); rg.addColorStop(.12, `rgba(255,200,110,${.7 * pa})`); rg.addColorStop(1, 'rgba(255,160,60,0)'); ox.fillStyle = rg; ox.fillRect(gx - 90, gyy - 90, 180, 180);
  ox.restore();
  label('Gua Hira', W / 2, gy - 70, A * ss(7.0, 7.6, t), GOLD2, 'center', 9);
  label('Wahyu pertama', 30, 90, A, GOLD, 'left', 9);
  txt("Iqra'. Bacalah.", 30, 124, { font: `bold 26px ${SANS}`, a: A * ss(6.3, 6.7, t), ls: '-0.5px' });
  // kaligrafi: garis luar tergambar lalu terisi
  const word = 'اقْرَأْ', fy = 560; ox.save(); ox.globalAlpha = A; ox.font = '210px SchB'; ox.textAlign = 'center'; ox.direction = 'rtl';
  const dr = ss(6.35, 7.5, t); ox.setLineDash([2400 * dr, 2400]); ox.lineWidth = 2.2; ox.strokeStyle = GOLD; ox.shadowColor = 'rgba(228,196,123,.8)'; ox.shadowBlur = 12; ox.strokeText(word, W / 2, fy);
  const fl = ss(7.2, 8.0, t); if (fl > 0) { const fg = ox.createLinearGradient(0, fy - 190, 0, fy + 30); fg.addColorStop(0, '#FFE7A8'); fg.addColorStop(.6, '#E4B85E'); fg.addColorStop(1, '#9C7330'); ox.globalAlpha = A * fl; ox.setLineDash([]); ox.fillStyle = fg; ox.shadowBlur = 30; ox.fillText(word, W / 2, fy); }
  ox.restore();
  const a2 = A * ss(7.7, 8.2, t);
  txt('ٱقۡرَأۡ بِٱسۡمِ رَبِّكَ ٱلَّذِي خَلَقَ ١', W / 2, 668, { font: '40px Sch', al: 'center', a: a2 });
  txt('"Bacalah dengan nama Tuhanmu yang menciptakan."', W / 2, 712, { font: `500 19px ${SANS}`, al: 'center', a: A * ss(8.0, 8.5, t) });
  label("QS. Al-'Alaq 96:1 · Sahih al-Bukhari 3", W / 2, 1222, A * ss(8.2, 8.7, t), GREY, 'center', 9);
}
function bloom(t) {
  const a = Math.max(win(t, 5.55, 6.6, .5, .55) * (t < 6.05 ? 1 : 1), win(t, 9.95, 10.95, .4, .6));
  if (a <= 0) return; const k = Math.max(1 - Math.abs(t - 6.05) / .5, 1 - Math.abs(t - 10.38) / .5, 0);
  const g = ox.createRadialGradient(W / 2, H * .45, 10, W / 2, H * .45, 900);
  g.addColorStop(0, `rgba(255,246,222,${a})`); g.addColorStop(.4, `rgba(251,237,204,${a * (.6 + .4 * k)})`); g.addColorStop(1, `rgba(214,170,90,${a * k * .9})`);
  ox.fillStyle = g; ox.fillRect(0, 0, W, H);
}
function subFollow(t) { // kad Subscribe & Follow 0.2-3.5 dtk
  const a = win(t, .2, 3.5, .3, .35); if (a <= 0) return;
  const x = 150, y = 1060 + 14 * (1 - ss(.2, .5, t)), w = 420, h = 74;
  ox.save(); ox.globalAlpha = a; ox.fillStyle = '#fff'; ox.shadowColor = 'rgba(0,0,0,.4)'; ox.shadowBlur = 20; ox.beginPath(); ox.roundRect(x, y, w, h, 16); ox.fill(); ox.shadowBlur = 0;
  ox.fillStyle = '#1b1712'; ox.beginPath(); ox.arc(x + 38, y + 37, 22, 0, 7); ox.fill();
  ox.translate(x + 38, y + 37); ox.fillStyle = '#C9952F'; for (const r of [0, Math.PI / 4]) { ox.save(); ox.rotate(r); ox.fillRect(-8, -8, 16, 16); ox.restore(); } ox.setTransform(SC, 0, 0, SC, 0, 0); ox.globalAlpha = a;
  ox.fillStyle = '#111'; ox.font = `bold 17px ${SANS}`; ox.fillText('alurziyadahku', x + 72, y + 32); ox.fillStyle = '#777'; ox.font = `500 12px ${SANS}`; ox.fillText('Kajian Al-Qur\'an', x + 72, y + 52);
  const s1 = t > 1.25, s2 = t > 2.25;
  const btn = (bx_, txt_, on, pulse) => { ox.fillStyle = on ? '#E8E4DC' : '#1b1712'; ox.beginPath(); ox.roundRect(bx_, y + 20, 92, 34, 17); ox.fill(); ox.fillStyle = on ? '#3a3328' : '#fff'; ox.font = `600 13px ${SANS}`; ox.textAlign = 'center'; ox.fillText(txt_, bx_ + 46, y + 42); ox.textAlign = 'left';
    if (pulse > 0) { ox.strokeStyle = `rgba(228,196,123,${pulse})`; ox.lineWidth = 2; ox.beginPath(); ox.roundRect(bx_ - 6 * (1 - pulse), y + 20 - 6 * (1 - pulse), 92 + 12 * (1 - pulse), 34 + 12 * (1 - pulse), 20); ox.stroke(); } };
  btn(x + 214, s1 ? 'Subscribed' : 'Subscribe', s1, s1 ? 1 - ss(1.25, 1.7, t) : 0); btn(x + 316, s2 ? 'Following' : 'Follow', s2, s2 ? 1 - ss(2.25, 2.7, t) : 0);
  // kursor
  const P = [[x + 430, y + 120, .3], [x + 262, y + 40, 1.15], [x + 262, y + 40, 1.6], [x + 362, y + 40, 2.15], [x + 362, y + 40, 3.5]];
  let cx = P[0][0], cy = P[0][1]; for (let i = 0; i < P.length - 1; i++) { const u = eio(clamp((t - P[i][2]) / (P[i + 1][2] - P[i][2]))); if (t >= P[i][2]) { cx = lerp(P[i][0], P[i + 1][0], u); cy = lerp(P[i][1], P[i + 1][1], u); } }
  const press = (Math.abs(t - 1.25) < .08 || Math.abs(t - 2.25) < .08) ? .85 : 1;
  ox.translate(cx, cy); ox.scale(press, press); ox.fillStyle = '#fff'; ox.strokeStyle = '#000'; ox.lineWidth = 1.5; ox.beginPath(); ox.moveTo(0, 0); ox.lineTo(0, 22); ox.lineTo(6, 17); ox.lineTo(10, 26); ox.lineTo(14, 24); ox.lineTo(10, 15); ox.lineTo(17, 15); ox.closePath(); ox.fill(); ox.stroke();
  ox.restore();
}
function followCard(t) {
  const a = ss(51.4, 51.9, t); if (a <= 0) return;
  ox.fillStyle = `rgba(3,3,3,${.55 * a})`; ox.fillRect(0, 0, W, H);
  const y = 470 + 20 * (1 - a);
  ox.save(); ox.globalAlpha = a; ox.fillStyle = 'rgba(20,18,14,.85)'; ox.strokeStyle = 'rgba(228,196,123,.35)'; ox.beginPath(); ox.roundRect(90, y, 540, 300, 22); ox.fill(); ox.stroke(); ox.restore();
  txt('Jangan lupa follow ya', W / 2, y + 74, { font: `bold 34px ${SANS}`, al: 'center', a, ls: '-0.6px' });
  txt('@alurziyadahku', W / 2, y + 122, { font: `bold 30px ${SANS}`, al: 'center', col: GOLD, a, ls: '-0.4px' });
  ['Follow', 'Simpan', 'Kongsi'].forEach((s, i) => {
    const x = 140 + i * 152, on = i === 0; ox.save(); ox.globalAlpha = a * ss(51.9 + i * .2, 52.3 + i * .2, t);
    ox.fillStyle = on ? GOLD : 'rgba(255,255,255,.08)'; ox.strokeStyle = 'rgba(228,196,123,.5)'; ox.beginPath(); ox.roundRect(x, y + 180, 136, 52, 26); ox.fill(); if (!on) ox.stroke();
    ox.fillStyle = on ? '#16110a' : WHITE; ox.font = `bold 19px ${SANS}`; ox.textAlign = 'center'; ox.fillText(s, x + 68, y + 213); ox.restore();
  });
}
function vignette() { const g = ox.createRadialGradient(W / 2, H / 2, 380, W / 2, H / 2, 900); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.6)'); ox.fillStyle = g; ox.fillRect(0, 0, W, H); }

function drawOverlay(t) {
  ox.clearRect(0, 0, W, H);
  vignette();
  calli(t);
  // penghitung halaman
  const sp = spreadAt(t);
  const pa = Math.max(win(t, .3, 5.9, .4, .4), win(t, 10.7, 16.9, .4, .5));
  counter(t, sp.num, '/604', (t > 4.6 && t < 6 && sp.num === 597) || (t > 13.4 && sp.num === 47), pa, 'Halaman');
  if (t > 13.6 && t < 15.1) label("Ibnu 'Abbas: ayat riba · QS. Al-Baqarah 2:278 · Sahih al-Bukhari 4544", 30, 152, win(t, 13.7, 15.0), GOLD2, 'left', 9);
  // tahun
  const ya = win(t, 20.6, 26.0, .4, .4);
  if (ya > 0) { const Pr = 114 * clamp((t - GROW0) / (GROW1 - GROW0)); counter(t, Math.floor(revYear(clamp(Pr, 0, 114))), 'M', false, ya, '', 1130);
    label('Setiap batang satu surah · makin tinggi makin panjang', W / 2, 1165, ya, GREY, 'center', 9); }
  // label 3D cincin
  if (t > 18.6 && t < 32) {
    const la = win(t, 18.8, 31.8, .5, .5);
    const L3 = (rk, s, col, a0) => { const [x, y, vis] = proj(polar(thR(rk), 2.98).setY(.02)); if (vis) label(s, x, y, la * ss(a0, a0 + .5, t), col, 'center', 9); };
    L3(.5, '610 M', GREY, 18.9); L3(86.5, 'Hijrah 622 M', GOLD, 24.0); L3(114, '632 M', GREY, 26.5);
    const L4 = (rk, s, a0) => { const [x, y, vis] = proj(polar(thR(rk), 1.7).setY(.02)); if (vis) label(s, x, y, la * ss(a0, a0 + .5, t), GOLD2, 'center', 9); };
    L4(40, 'Makkah', 21.5); L4(100, 'Madinah', 25.0);
  }
  glassCard(30, 1000, 660, 128, "Kenapa tidak sekaligus? · QS. Al-Furqan 25:32", ['"...demikianlah, agar Kami meneguhkan hatimu', 'dengannya."'], win(t, 26.0, 30.2, .5, .4));
  // callout
  const ca = win(t, 30.4, 34.8, .4, .3);
  if (ca > 0) {
    const rev = t < 32.45 + .9;
    for (const [no, a1, b1, a2, b2] of [[96, "Al-'Alaq", 'ke-1 turun', "Al-'Alaq", 'ke-96 di mushaf'], [1, 'Al-Fatihah', 'ke-5 turun', 'Al-Fatihah', 'ke-1 di mushaf']]) {
      const tp = barTop[no]; if (!tp) continue; const [x, y] = proj(tp);
      const k = rev ? 1 - ss(32.9, 33.3, t) : ss(33.35, 33.8, t); pill(clamp(x - 60 + (no === 1 ? 70 : -40), 10, W - 150), Math.max(y - 62 - (no === 1 ? 0 : 52), 175), rev ? a1 : a2, rev ? b1 : b2, ca * k);
      ox.save(); ox.globalAlpha = ca * k * .6; ox.strokeStyle = GOLD2; ox.beginPath(); ox.moveTo(x, y - 22); ox.lineTo(x, y); ox.stroke(); ox.restore();
    }
  }
  // makro
  const ma = win(t, 36.4, 40.1, .4, .35);
  if (ma > 0 && barTop[2]) { const [x, y] = proj(barTop[2].clone().add(new THREE.Vector3(0, .25, 0))); pill(clamp(x + 30, 10, W - 190), clamp(y - 20, 250, 900), 'Al-Baqarah 2:278', 'antara ayat terakhir turun', ma); }
  const qa = win(t, 37.6, 40.1, .4, .35);
  txt('"Aku tidak akan memindahkan sesuatu pun', W / 2, 960, { font: `500 21px ${SANS}`, al: 'center', a: qa });
  txt('darinya dari tempatnya."', W / 2, 988, { font: `500 21px ${SANS}`, al: 'center', a: qa });
  label("'Utsman radhiyallahu 'anhu · Sahih al-Bukhari 4530", W / 2, 1018, qa, GOLD2, 'center', 9);
  label('Sahih al-Bukhari 4998', W / 2, 1200, win(t, 40.3, 46.8, .4, .4), GOLD2, 'center', 9);
  for (const T of TITLES) drawTitle(T, t);
  subFollow(t);
  bloom(t);
  followCard(t);
}

window.renderFrame = (t) => { drawBg(t); update3D(t); drawOverlay(t); };
window.READY = true;
