// Ep1 "Urutan Wahyu 3D" — render(t) murni. 720x1280 logis, skala ?s= (default 1.5 -> 1080x1920)
import * as THREE from 'three';

const W = 720, H = 1280;
const SC = parseFloat(new URLSearchParams(location.search).get('s') || '1.5');
export const END = 173.0;

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

// ---------- mushaf page textures (gaya Mushaf Madinah 15 baris) ----------
const PW = 640, PH = 910;
const FX0 = 30, FY0 = 36, FX1 = PW - 30, FY1 = PH - 44;           // bingkai luar
const TX0 = 56, TX1 = PW - 56, TY0 = 62, TY1 = PH - 66, NL = 15; // area teks
const SLOT = (TY1 - TY0) / NL;
const juzOf = p => p < 22 ? 1 : Math.min(30, Math.floor((p - 2) / 20) + 1);
const layoutCache = {};
const mctx = document.createElement('canvas').getContext('2d');
function wrap(toks, FS, width) {
  mctx.font = `${FS}px Sch`; const sp = FS * .28; const lines = []; let line = [], lw = 0;
  for (const tk of toks) {
    const w = tk.m ? FS * 1.05 : mctx.measureText(tk.w).width;
    if (line.length && lw + sp + w > width) { lines.push({ toks: line, lw }); line = []; lw = 0; }
    lw += (line.length ? sp : 0) + w; line.push({ ...tk, wd: w });
  }
  if (line.length) lines.push({ toks: line, lw }); return lines;
}
function layoutPage(p) {
  if (layoutCache[p]) return layoutCache[p];
  const blocks = PAGES[p].map(blk => { const toks = []; for (const [a, txt] of blk.v) { for (const w of txt.split(' ')) toks.push({ w, a }); toks.push({ m: a, a }); } return { ...blk, toks }; });
  const special = p <= 2;
  let FS, L = [];
  if (special) {
    FS = 31; const width = 330; let y = 330;
    for (const blk of blocks) {
      L.push({ type: 'head', y: 262, name: blk.name, special: true });
      if (blk.s !== 1) { L.push({ type: 'basm', y, FS }); y += 47; }
      for (const ln of wrap(blk.toks, FS, width)) { L.push({ type: 'line', y, toks: ln.toks, lw: ln.lw, x0: PW / 2 - width / 2, x1: PW / 2 + width / 2, center: true, s: blk.s, FS }); y += 47; }
    }
  } else {
    for (FS = 34; FS >= 17; FS--) {
      let n = 0; for (const blk of blocks) { if (blk.head) n += (blk.s !== 9 ? 2 : 1); n += wrap(blk.toks, FS, TX1 - TX0).length; }
      if (n <= NL) break;
    }
    let slot = 0;
    for (const blk of blocks) {
      if (blk.head) { L.push({ type: 'head', y: TY0 + SLOT * slot, name: blk.name }); slot++; if (blk.s !== 9) { L.push({ type: 'basm', y: TY0 + SLOT * (slot + .72), FS }); slot++; } }
      const lines = wrap(blk.toks, FS, TX1 - TX0);
      lines.forEach((ln, i) => { L.push({ type: 'line', y: TY0 + SLOT * (slot + .72), toks: ln.toks, lw: ln.lw, x0: TX0, x1: TX1, center: i === lines.length - 1 && ln.lw < (TX1 - TX0) * .62, s: blk.s, FS }); slot++; });
    }
  }
  for (const it of L) if (it.type === 'line') {
    const tot = it.toks.reduce((s, k) => s + k.wd, 0), n = it.toks.length;
    let gap = it.center || n < 2 ? it.FS * .28 : (it.x1 - it.x0 - tot) / (n - 1);
    let x = it.center ? (it.x0 + it.x1) / 2 + (tot + gap * (n - 1)) / 2 : it.x1;
    for (const k of it.toks) { k.x1 = x; k.x0 = x - k.wd; x -= k.wd + gap; }
  }
  return (layoutCache[p] = { items: L, special });
}
function hlFrac(p, ayas) {
  const L = layoutPage(p); const ys = [];
  for (const it of L.items) if (it.type === 'line' && it.toks.some(k => ayas.includes(it.s + ':' + k.a))) ys.push(it.y - it.FS * .3);
  return (ys.length ? (Math.min(...ys) + Math.max(...ys)) / 2 : PH / 2) / PH;
}
function marker(c, cx, cy, n, FS) {
  const r = FS * .42; c.save(); c.strokeStyle = '#B08D48'; c.lineWidth = 1.3; c.beginPath(); c.arc(cx, cy, r, 0, 7); c.stroke();
  c.beginPath(); c.arc(cx, cy, r - 2.6, 0, 7); c.lineWidth = .7; c.stroke();
  c.fillStyle = '#3b2f18'; c.font = `${Math.round(FS * .5)}px Sch`; c.textAlign = 'center'; c.direction = 'rtl'; c.fillText(AR(n), cx, cy + FS * .17); c.restore();
}
function banner(c, cx, y, w, name) {
  c.save(); const h = 36;
  const g = c.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, '#F3E7C6'); g.addColorStop(1, '#E6D3A1');
  c.fillStyle = g; c.strokeStyle = '#B99A5B'; c.lineWidth = 1.6; c.beginPath(); c.roundRect(cx - w / 2, y, w, h, h / 2); c.fill(); c.stroke();
  c.lineWidth = .7; c.beginPath(); c.roundRect(cx - w / 2 + 4, y + 4, w - 8, h - 8, (h - 8) / 2); c.stroke();
  c.fillStyle = '#3e3018'; c.font = '22px Sch'; c.textAlign = 'center'; c.direction = 'rtl'; c.fillText('سُورَةُ ' + name, cx, y + 25); c.restore();
}
function drawPage(p, hl = [], amt = 0) {
  const cv = document.createElement('canvas'); cv.width = PW; cv.height = PH; const c = cv.getContext('2d');
  const odd = p % 2 === 1; // halaman kanan
  const g = c.createLinearGradient(0, 0, PW, 0);
  const sh = ['#E9E3D6', '#F8F5EE', '#FBF9F3']; // bayang lipatan dekat punggung
  if (odd) { g.addColorStop(0, sh[0]); g.addColorStop(.08, sh[1]); g.addColorStop(1, sh[2]); } else { g.addColorStop(0, sh[2]); g.addColorStop(.92, sh[1]); g.addColorStop(1, sh[0]); }
  c.fillStyle = g; c.fillRect(0, 0, PW, PH);
  // bingkai emas ganda
  c.strokeStyle = '#C2A262'; c.lineWidth = 2.4; c.strokeRect(FX0, FY0, FX1 - FX0, FY1 - FY0);
  c.strokeStyle = '#D9C38F'; c.lineWidth = 1; c.strokeRect(FX0 + 6, FY0 + 6, FX1 - FX0 - 12, FY1 - FY0 - 12);
  // baris kepala
  const L = layoutPage(p);
  c.fillStyle = '#6e6250'; c.font = '15px Sch'; c.direction = 'rtl';
  const sname = PAGES[p][0].name;
  c.textAlign = 'right'; c.fillText(odd ? 'سُورَةُ ' + sname : 'الجُزْءُ ' + AR(juzOf(p)), FX1, FY0 - 9);
  c.textAlign = 'left'; c.fillText(odd ? 'الجُزْءُ ' + AR(juzOf(p)) : 'سُورَةُ ' + sname, FX0, FY0 - 9);
  // nomor halaman
  c.strokeStyle = '#B99A5B'; c.lineWidth = 1.2; c.beginPath(); c.arc(PW / 2, PH - 22, 12, 0, 7); c.stroke();
  c.fillStyle = '#4a3c22'; c.font = '15px Sch'; c.textAlign = 'center'; c.fillText(AR(p), PW / 2, PH - 17);
  if (L.special) { // bingkai lengkung halaman 1-2
    c.save(); c.strokeStyle = '#C2A262'; c.lineWidth = 2;
    const ax0 = 120, ax1 = PW - 120, ay = 250, ab = 690;
    c.beginPath(); c.moveTo(ax0, ab); c.lineTo(ax0, ay); c.quadraticCurveTo(PW / 2, 150, ax1, ay); c.lineTo(ax1, ab); c.closePath(); c.stroke();
    c.lineWidth = .8; c.beginPath(); c.moveTo(ax0 + 7, ab - 7); c.lineTo(ax0 + 7, ay + 4); c.quadraticCurveTo(PW / 2, 162, ax1 - 7, ay + 4); c.lineTo(ax1 - 7, ab - 7); c.closePath(); c.stroke(); c.restore();
  }
  for (const it of L.items) {
    if (it.type === 'head') banner(c, PW / 2, it.special ? it.y - 30 : it.y + 7, it.special ? 300 : TX1 - TX0 - 40, it.name);
    else if (it.type === 'basm') { c.fillStyle = '#1f1b16'; c.font = `${it.FS}px Sch`; c.textAlign = 'center'; c.direction = 'rtl'; c.fillText('بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ', PW / 2, it.y); }
    else for (const k of it.toks) {
      if (k.m) marker(c, (k.x0 + k.x1) / 2, it.y - it.FS * .28, k.m, it.FS);
      else { c.fillStyle = '#1b1814'; c.font = `${it.FS}px Sch`; c.textAlign = 'right'; c.direction = 'rtl'; c.fillText(k.w, k.x1, it.y); }
    }
  }
  // sorotan: cahaya kuning lembut menimpa teks
  if (amt > 0) for (const it of L.items) if (it.type === 'line') {
    const ks = it.toks.filter(k => hl.includes(it.s + ':' + k.a)); if (!ks.length) continue;
    const x0 = Math.min(...ks.map(k => k.x0)) - 4, x1 = Math.max(...ks.map(k => k.x1)) + 4;
    c.save(); c.filter = 'blur(7px)'; c.globalAlpha = amt;
    c.fillStyle = 'rgba(255,226,120,.55)'; c.fillRect(x0, it.y - it.FS * .95, x1 - x0, it.FS * 1.25);
    c.globalCompositeOperation = 'lighter'; c.fillStyle = 'rgba(255,200,70,.22)'; c.fillRect(x0 - 6, it.y - it.FS * 1.05, x1 - x0 + 12, it.FS * 1.45); c.restore();
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
const bend = x => 0.05 * Math.abs(x) + (Math.abs(x) < .02 ? -.004 : 0);
function pageGeom(side) { // side +1 kanan, -1 kiri
  const g = new THREE.PlaneGeometry(PGW, PGH, 40, 1); g.rotateX(-Math.PI / 2); g.translate(side * (PGW / 2 + .008), 0, 0);
  const pos = g.attributes.position; for (let i = 0; i < pos.count; i++) pos.setY(i, bend(pos.getX(i))); pos.needsUpdate = true; g.computeVertexNormals(); return g;
}
const mushaf = new THREE.Group(); scene.add(mushaf);
const pmat = () => new THREE.MeshStandardMaterial({ roughness: .92, metalness: 0, transparent: true });
const leftM = new THREE.Mesh(pageGeom(-1), pmat()), rightM = new THREE.Mesh(pageGeom(1), pmat());
mushaf.add(leftM, rightM);
const blockMat = new THREE.MeshStandardMaterial({ color: 0xe8e2d4, roughness: .9, transparent: true });
const coverMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: .6, metalness: .2, transparent: true });
for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(PGW * 1.0, .05, PGH * 1.0), blockMat); b.position.set(s * (PGW / 2 + .01), -.034 + .025, 0); b.rotation.z = s * Math.atan(.05); mushaf.add(b); }
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
  const g = c.createLinearGradient(0, 0, 800, 1080); g.addColorStop(0, '#1c1c1c'); g.addColorStop(1, '#101010');
  c.fillStyle = g; c.fillRect(0, 0, 800, 1080);
  c.strokeStyle = '#C8932E'; c.lineWidth = 6; c.strokeRect(62, 62, 676, 956);
  c.translate(400, 540); c.fillStyle = '#D2962C';
  c.beginPath(); for (let i = 0; i < 16; i++) { const r = i % 2 ? 126 : 165, a = i * Math.PI / 8; c.lineTo(r * Math.sin(a), -r * Math.cos(a)); } c.closePath(); c.fill();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
const ring = new THREE.Group(); scene.add(ring);
const BOOK = { w: 1.0, h: .2, d: 1.35 };
const book = new THREE.Group(); ring.add(book);
{
  const side = new THREE.MeshStandardMaterial({ color: 0x1a1210, roughness: .6, metalness: .15 });
  const top = new THREE.MeshStandardMaterial({ map: coverTex(), roughness: .7, metalness: .05 });
  const m = new THREE.Mesh(new THREE.BoxGeometry(BOOK.w, BOOK.h, BOOK.d), [side, side, top, side, side, side]); m.position.y = BOOK.h / 2; book.add(m);
  const edge = new THREE.Mesh(new THREE.BoxGeometry(BOOK.w * .96, BOOK.h * .7, .01), new THREE.MeshStandardMaterial({ color: 0x2b1610, roughness: .8 })); edge.position.set(0, BOOK.h / 2, BOOK.d / 2 + .002); book.add(edge);
}
const R = 2.35;
const disk = new THREE.Mesh(new THREE.CylinderGeometry(3.05, 3.05, .04, 160), new THREE.MeshStandardMaterial({ color: 0x0c0a08, roughness: .35, metalness: .5 }));
disk.position.y = -.025; ring.add(disk);
const ticks = new THREE.InstancedMesh(new THREE.BoxGeometry(.012, .01, .16), new THREE.MeshBasicMaterial({ color: 0x9a9284 }), 120); ring.add(ticks);
const rimLine = new THREE.Mesh(new THREE.TorusGeometry(2.72, .006, 6, 200), new THREE.MeshBasicMaterial({ color: 0x5a5245 })); rimLine.rotation.x = Math.PI / 2; ring.add(rimLine);

// ===================== Ep1 v3: ISTIQAMAH (alur = audio Puck 170 dtk) =====================
const NB = 72;
const bars = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, .5, 0), new THREE.MeshStandardMaterial({ roughness: .45, metalness: .15 }), NB);
bars.instanceMatrix.setUsage(THREE.DynamicDrawUsage); ring.add(bars);
const bw = 2 * Math.PI * R / NB * .58;
const TH0 = Math.PI * .62;
const thB = i => TH0 + 2 * Math.PI * (i + .5) / NB;
const polar = (th, r = R) => new THREE.Vector3(r * Math.sin(th), 0, -r * Math.cos(th));
const thArc = k => TH0 + 2 * Math.PI / 3 * (k + .5);
const BR = Array.from({ length: NB }, (_, i) => { const r = rng(i * 13 + 5); return { r1: r(), r2: r(), r3: r() }; });
const C_IV = new THREE.Color('#EDE5D3'), C_GD = new THREE.Color('#A07A36'), C_DIM = new THREE.Color('#5a5249'), C_HOT = new THREE.Color('#FFE2A0'), C_DK = new THREE.Color('#2c2621');
const IBADAH = i => i >= 60 && i <= 65;
// orb utama + orb pergaulan
function glowTex() { const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'); const g = c.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,248,225,1)'); g.addColorStop(.18, 'rgba(255,214,130,.9)'); g.addColorStop(.5, 'rgba(255,170,60,.25)'); g.addColorStop(1, 'rgba(255,150,40,0)'); c.fillStyle = g; c.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(cv); }
const GT = glowTex();
const mkOrb = () => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: GT, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); scene.add(s); return s; };
const orb = mkOrb();
const PALS = Array.from({ length: 10 }, (_, k) => ({ s: mkOrb(), bad: [1, 4, 8].includes(k), a0: k / 10 * 6.283 + rng(k + 40)() * .3 }));
const shield = new THREE.Mesh(new THREE.TorusGeometry(R + .25, .02, 8, 60, 2 * Math.PI * 7 / NB), new THREE.MeshBasicMaterial({ color: 0xffd88a, transparent: true }));
shield.rotation.x = Math.PI / 2; ring.add(shield);

// ---------- keadaan batang per fasa ----------
const S = (h, c, hot = 0, tilt = 0, y = 0) => ({ h, c, hot, tilt, y });
function P0(i, t) { // hook: terganggu, lemah
  const b = BR[i]; const rise = eoBack(clamp((t - .3 - i / NB * 1.4) / .6));
  let fl = 1; if (b.r2 < .42) { const ph = (t * .9 + b.r3 * 7) % 3; fl = ph < .6 ? 1 - .85 * Math.sin(ph / .6 * Math.PI) : 1; }
  const h = (.35 + .32 * b.r1) * rise * fl * lerp(1, .42, ss(12.6, 14.2, t));
  return S(h, C_IV.clone().lerp(C_DIM, .25), .3 * ss(14.6, 16.2, t));
}
function P1(i, t) { // tiga syarat (arc)
  const b = BR[i], k = Math.floor(i / 24), j = i % 24, act = [28.6, 43.6, 57.7][k];
  const a = eoBack(clamp((t - act - j * .03) / .7));
  let h = lerp(.26 + .1 * b.r1, .75 + .45 * b.r1, a), c = C_DIM.clone().lerp(C_IV, .3), tilt = 0, hot = 0;
  if (k === 1) { const fix = ss(51.4 + j * .03, 52.3 + j * .03, t); tilt = (b.r2 - .5) * 1.0 * (1 - fix) * a; c.lerp(C_DK, a * (1 - fix) * .7).lerp(C_GD, a * fix); hot = .6 * Math.exp(-(((t - 51.8 - j * .03) / .35) ** 2)); }
  else { c.lerp(C_GD, a); hot = .55 * Math.exp(-(((t - act - .4 - j * .03) / .3) ** 2)); }
  return S(h, c, hot, tilt);
}
function P2(i, t) { // banyak-terputus vs sedikit-berterusan
  const b = BR[i];
  if (i < 36) { const on = (i % 9) < 3; return S(on ? 1.25 + .25 * b.r1 : .03, on ? C_IV.clone() : C_DK.clone(), 0); }
  const sw = (t * .9) % 1, d = Math.abs((i - 36) / 36 - sw);
  return S(.44, C_GD.clone(), .25 + .5 * Math.exp(-((d / .08) ** 2)));
}
function P3(i, t) { // jam 24 jam
  const b = BR[i];
  if (IBADAH(i)) { const up = eoBack(clamp((t - 92.8 - (i - 60) * .06) / .7)); return S(lerp(lerp(.3, .1, ss(86, 90, t)), 1.15, up), C_IV.clone().lerp(C_GD, Math.max(.4, up)), up * .6); }
  const f = eoBack(clamp((t - 84.8 - ((i + 12) % NB) * .07) / .6));
  return S(lerp(.3, .85 + .2 * b.r1, f), C_DIM.clone().lerp(C_IV, .35 + .65 * f), 0);
}
function P4(i, t) { // dunia sementara vs akhirat kekal
  const b = BR[i];
  if (IBADAH(i)) return S(1.15, C_GD.clone(), .5);
  const sink = ss(102.2 + ((i * 7) % NB) * .07, 103.2 + ((i * 7) % NB) * .07, t);
  const good = b.r3 < .38, back = good ? eoBack(clamp((t - 112.0 - i * .03) / .8)) : 0;
  return S(lerp(lerp(.85 + .2 * b.r1, .02, sink), .7, back), C_IV.clone().lerp(C_DK, sink).lerp(C_GD, back), back * .4, 0, -.02 * sink);
}
function P5(i, t) { const g = BR[i].r3 < .38 || IBADAH(i); return S(.14, (g ? C_GD : C_DIM).clone(), 0); }
function P6(i, t) { // mengungkit, godaan
  const u = i / NB; let tilt = 0, dim = 0;
  const p1 = clamp((t - 139.9) / 2.4); if (u < p1 && t < 142.6) { tilt = .55; dim = .7; }
  const fix = ss(142.5 + u * 1.1, 142.9 + u * 1.1, t); tilt *= 1 - fix; dim *= 1 - fix;
  const p2 = clamp((t - 144.3) / 6.3) * .85; if (t > 144.3 && u < p2) { const k = clamp((p2 - u) / .15); tilt = .32 * k; dim = .55 * k; }
  const hot = .7 * Math.exp(-(((t - 142.7 - u * 1.1) / .25) ** 2));
  return S(.55 + .1 * BR[i].r1, C_GD.clone().lerp(C_DK, dim), hot, tilt * (BR[i].r2 > .5 ? 1 : -1));
}
function P7(i, t) { // kesimpulan
  const u = i / NB, swp = Math.exp(-(((t - 154.7 - u * 7.4) / .45) ** 2));
  return S(.6, C_GD.clone(), .2 + .8 * swp);
}
const PHASES = [[0, P0], [28.4, P1], [64.4, P2], [76.4, P3], [97.9, P4], [118.1, P5], [135.4, P6], [150.7, P7]];
function barAt(i, t) {
  let p = 0; while (p < PHASES.length - 1 && t >= PHASES[p + 1][0]) p++;
  const cur = PHASES[p][1](i, t); if (p === 0) return cur;
  const w = ss(PHASES[p][0], PHASES[p][0] + .9, t); if (w >= 1) return cur;
  const prev = PHASES[p - 1][1](i, Math.min(t, PHASES[p][0] - .001));
  return S(lerp(prev.h, cur.h, w), prev.c.lerp(cur.c, w), lerp(prev.hot, cur.hot, w), lerp(prev.tilt, cur.tilt, w), lerp(prev.y, cur.y, w));
}

// ---------- kamera ----------
const Z1 = -PGH / 2 + PGH * hlFrac(1, ['1:5']);
const cP = (th, d, h) => { const v = polar(th, d); v.y = h; return v.toArray(); };
const cT = (th, d, h) => { const v = polar(th, d); v.y = h; return v.toArray(); };
const CAM = [
  [0, [0, 7.4, 11.8], [0, .15, 0]],
  [8.2, [1.6, 5.8, 9.6], [0, .3, 0]],
  [12.7, [.8, 5.3, 8.4], [0, .35, 0]],
  [16.5, [0, 3.9, 5.9], [0, .55, 0]],
  [16.56, [0, 4.6, 2.75], [0, -.55, .3]],
  [18.2, [.15, 4.2, 2.55], [.1, -.5, .28]],
  [20.9, [.5, .4, Z1 + .25], [.5, 0, Z1]],
  [28.38, [.5, .38, Z1 + .2], [.5, 0, Z1]],
  [28.42, cP(thArc(0), 10.2, 6.0), cT(thArc(0), .9, .3)],
  [43.0, cP(thArc(0) + .15, 9.4, 5.4), cT(thArc(0), .9, .3)],
  [44.4, cP(thArc(1), 9.8, 5.6), cT(thArc(1), .9, .3)],
  [57.0, cP(thArc(1) + .15, 9.2, 5.2), cT(thArc(1), .9, .3)],
  [58.5, cP(thArc(2), 9.8, 5.6), cT(thArc(2), .9, .3)],
  [64.0, cP(thArc(2) + .2, 9.4, 5.4), cT(thArc(2), .9, .3)],
  [65.4, [0, 8.6, 8.2], [0, 0, 0]],
  [76.0, [-.8, 8.2, 8.0], [0, 0, 0]],
  [77.4, [0, 10.4, 4.6], [0, 0, .4]],
  [92.0, [.6, 10.0, 4.8], [0, 0, .4]],
  [94.0, cP(thB(62.5), 7.6, 4.6), cT(thB(62.5), 1.4, .5)],
  [97.6, cP(thB(62.5) + .15, 7.2, 4.4), cT(thB(62.5), 1.4, .5)],
  [99.2, [-1.6, 6.4, 9.8], [0, .3, 0]],
  [117.6, [1.6, 6.2, 9.6], [0, .3, 0]],
  [119.2, [0, 8.4, 9.4], [0, 0, 0]],
  [135.0, [-1.0, 8.0, 9.2], [0, 0, 0]],
  [136.4, [1.8, 6.0, 9.4], [0, .3, 0]],
  [150.4, [-1.8, 5.8, 9.2], [0, .3, 0]],
  [152.0, [0, 6.6, 10.0], [0, .3, 0]],
  [162.4, [.6, 6.2, 9.6], [0, .3, 0]],
  [165.2, [0, 3.3, 2.2], [0, .75, -.1]],
  [END, [0, 3.05, 2.0], [0, .78, -.1]],
];
function camAt(t) {
  let i = 0; while (i < CAM.length - 2 && t > CAM[i + 1][0]) i++;
  const [t0, p0, q0] = CAM[i], [t1, p1, q1] = CAM[i + 1]; const u = eio(clamp((t - t0) / (t1 - t0)));
  const P = p0.map((v, k) => lerp(v, p1[k], u)), Q = q0.map((v, k) => lerp(v, q1[k], u));
  P[0] += .03 * Math.sin(t * .7); P[1] += .02 * Math.sin(t * .53 + 1);
  cam.position.set(...P); cam.lookAt(...Q);
}
const BLOOMS = [16.55, 20.9, 28.4];
const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e4 = new THREE.Euler(), s4 = new THREE.Vector3(), c4 = new THREE.Color();
const barTop = [];
function update3D(t) {
  camAt(t);
  const showM = t >= 16.55 && t < 20.9;
  mushaf.visible = showM;
  if (showM) {
    leftM.material.map = pageTex(2); rightM.material.map = pageTex(1, ['1:5'], ss(18.4, 19.1, t));
    leftM.material.needsUpdate = rightM.material.needsUpdate = true; flippers.forEach(f => f.piv.visible = false);
    for (const m of [leftM.material, rightM.material, blockMat, coverMat]) m.opacity = 1;
  }
  ring.visible = !(t >= 16.55 && t < 28.4);
  const bookIn = ss(.1, .9, t); book.scale.setScalar(lerp(.7, 1, bookIn));
  disk.material.transparent = true; disk.material.opacity = bookIn;
  for (let i = 0; i < 120; i++) { const th = 2 * Math.PI * i / 120, on = ss(.2 + i / 120, .5 + i / 120, t); m4.compose(polar(th, 2.86), q4.setFromEuler(e4.set(0, -th, 0)), s4.set(1, 1, i % 10 === 0 ? on * 1.8 : on)); ticks.setMatrixAt(i, m4); }
  ticks.instanceMatrix.needsUpdate = true;
  // penutup: lipat ke kitab 162.6-165
  for (let i = 0; i < NB; i++) {
    const st = barAt(i, t), th = thB(i);
    const cu = eio(clamp((t - 162.6 - i / NB * 1.3) / .9));
    const pos = polar(th, lerp(R, .25, cu)); pos.y = st.y;
    const h = Math.max(st.h * lerp(1, .04, cu), .0001);
    q4.setFromEuler(e4.set(cu * 1.4, -th, st.tilt));
    m4.compose(pos, q4, s4.set(bw * lerp(1, .5, cu), h, .16 * lerp(1, .5, cu))); bars.setMatrixAt(i, m4);
    c4.copy(st.c).lerp(C_HOT, st.hot * .7).multiplyScalar(1 + st.hot * .8); bars.setColorAt(i, c4);
    barTop[i] = pos.clone().add(new THREE.Vector3(0, h + .06, 0));
  }
  bars.instanceMatrix.needsUpdate = true; bars.instanceColor.needsUpdate = true; bars.visible = t < 165.4;
  // perisai waktu ibadah
  const sh = win(t, 92.9, 118.0, .6, .6); shield.visible = sh > 0; shield.material.opacity = sh * (.55 + .2 * Math.sin(t * 3)); shield.rotation.z = -(thB(59.6)) + Math.PI / 2;
  // orb utama
  let op = null, oa = 0;
  if (t < 16.6) { op = new THREE.Vector3(0, lerp(3.2, .75, eio(ss(14.4, 16.2, t))), -.1); oa = ss(14.3, 14.9, t); }
  else if (t > 28.4 && t < 64.4) { const k = t < 43.6 ? 0 : t < 57.7 ? 1 : 2; op = polar(thArc(k), R + .1).setY(1.45); oa = win(t, 28.6, 64.3, .6, .4); }
  else if (t > 64.4 && t < 76.4) { op = polar(thB(36 + 36 * ((t * .9) % 1)), R + .05).setY(.75); oa = win(t, 64.6, 76.3, .5, .4); }
  else if (t > 92.8 && t < 118) { op = polar(thB(62.5), R + .1).setY(1.6); oa = win(t, 92.9, 118, .5, .5); }
  else if (t > 142.4 && t < 144.2) { op = polar(thB(NB * clamp((t - 142.6) / 1.1)), R + .05).setY(.85); oa = win(t, 142.4, 144.2, .2, .3); }
  else if (t > 154.4 && t < 162.6) { op = polar(thB(NB * clamp((t - 154.7) / 7.4)), R + .05).setY(.9); oa = win(t, 154.4, 162.6, .3, .3); }
  else if (t > 163.5) { op = new THREE.Vector3(0, .95, -.35); oa = ss(163.8, 165.0, t); }
  orb.visible = !!op && oa > .01 && ring.visible;
  if (orb.visible) { orb.position.copy(op); orb.scale.setScalar(.8); orb.material.opacity = oa; orbLight.position.copy(op); orbLight.intensity = 3 * oa; } else orbLight.intensity = 0;
  // orb pergaulan 118-135.4
  const pa = win(t, 118.4, 135.4, .8, .6);
  const rad = t < 122.1 ? 2.0 : t < 124.7 ? lerp(2.0, 4.3, eio(ss(122.1, 123.0, t))) : t < 127.6 ? lerp(4.3, .95, eio(ss(124.7, 125.6, t))) : lerp(.95, 2.0, eio(ss(127.6, 128.6, t)));
  PALS.forEach((p, k) => {
    p.s.visible = pa > .01; if (!p.s.visible) return;
    const a = p.a0 + t * .18; p.s.position.copy(polar(a, rad)).setY(.55 + .08 * Math.sin(t * 1.3 + k));
    const good = !p.bad, br = good ? lerp(.55, 1, ss(128.2, 129, t)) : lerp(.55, .22, ss(131.9, 132.6, t));
    p.s.scale.setScalar(.62 * (good ? 1 : lerp(1, .8, ss(131.9, 132.6, t))));
    p.s.material.opacity = pa * br; p.s.material.color.set(!good && t > 131.9 ? '#9a948a' : '#ffffff');
  });
  renderer.render(scene, cam);
}

// ---------- latar 2D ----------
const STARS = (() => { const r = rng(3); return Array.from({ length: 260 }, () => ({ x: r() * W, y: r() * H, s: .3 + r() * 1.3, p: r() * 6.28, f: .4 + r() * 1.6, d: r() })); })();
function drawBg(t) {
  bx.clearRect(0, 0, W, H);
  const g = bx.createRadialGradient(W / 2, H * .45, 40, W / 2, H * .5, 900); g.addColorStop(0, '#16110c'); g.addColorStop(.55, '#0a0807'); g.addColorStop(1, '#030303');
  bx.fillStyle = g; bx.fillRect(0, 0, W, H);
  for (const s of STARS) { const y = (s.y - t * 4 * s.d + H * 40) % H; const a = .25 + .55 * (.5 + .5 * Math.sin(t * s.f + s.p)); bx.globalAlpha = a * (.35 + .65 * s.d); bx.fillStyle = '#fff'; bx.beginPath(); bx.arc(s.x, y, s.s, 0, 7); bx.fill(); }
  bx.globalAlpha = 1;
}

// ---------- overlay ----------
function proj(v) { const p = v.clone().project(cam); return [(p.x + 1) / 2 * W, (1 - p.y) / 2 * H, p.z < 1]; }
function txt(s, x, y, { font = `bold 30px ${SANS}`, col = WHITE, al = 'left', a = 1, ls = '0px', blur = 0, sh = 0 } = {}) {
  ox.save(); ox.globalAlpha = a; ox.font = font; ox.fillStyle = col; ox.textAlign = al; ox.letterSpacing = ls; if (blur > .1) ox.filter = `blur(${blur}px)`;
  if (sh) { ox.shadowColor = col; ox.shadowBlur = sh; } ox.fillText(s, x, y); ox.restore();
}
function label(s, x, y, a, col = GREY, al = 'left', size = 10) { txt(s.toUpperCase(), x, y, { font: `600 ${size}px ${SANS}`, col, al, a, ls: '1.6px' }); }
const TITLES = [
  [0.35, 4.6, [['Kenapa ibadah kita'], ['sering ', ['terganggu?', 'g']]]],
  [4.75, 8.1, [['Walaupun hati'], ['mahu ', ['اِسْتِقَامَة', 'ar']]]],
  [8.35, 12.6, [['Jawapannya bermula'], ['dengan satu ', ['pengakuan.', 'g']]]],
  [12.75, 16.3, [['Kita ', ['lemah,', 'g']], ['perlukan pertolongan Allah.']]],
  [16.75, 20.6, [['Dalam Al-Fatihah,'], ['kita menyebut:']]],
  [24.6, 28.2, [['Setiap ibadah bergantung'], ['kepada ', ['bantuan Allah.', 'g']]]],
  [28.65, 33.3, [[['Pertama:', 'g'], ' ibadah mesti sah.'], ['Asasnya ', ['ilmu.', 'g']]]],
  [33.5, 39.3, [['Untuk mendapat ilmu:'], ['berdoa, belajar, beradab.']]],
  [39.45, 43.4, [['Ilmu yang mendekatkan'], ['kita kepada ', ['Allah.', 'g']]]],
  [43.65, 46.4, [[['Kedua:', 'g'], ' ibadah'], ['perlu diterima.']]],
  [46.55, 51.3, [['Jalannya:'], [['تَوْبَة', 'ar']]]],
  [51.45, 57.5, [['Kembali kepada Allah'], ['sebelum ', ['beribadah.', 'g']]]],
  [57.75, 64.3, [[['Ketiga:', 'g'], ' perbanyak,'], ['rutinkan, kekalkan.']]],
  [64.45, 72.9, [['Sedikit tetapi ', ['berterusan', 'g']], ['lebih disukai.']]],
  [73.05, 76.3, [['Contohnya: solat'], ['dan membaca Al-Quran.']]],
  [76.5, 80.1, [['Bagaimana mahu'], [['اِسْتِقَامَة', 'ar'], '?']]],
  [80.25, 84.6, [[['Sisihkan', 'g'], ' sebahagian'], ['urusan dunia.']]],
  [84.75, 92.6, [['Bila masa penuh urusan,'], ['ibadah mudah ', ['terganggu.', 'g']]]],
  [92.75, 97.8, [['Tetapkan waktu khusus,'], [['lindunginya.', 'g']]]],
  [97.95, 102.0, [['Dunia'], ['atau ', ['akhirat?', 'g']]]],
  [102.15, 109.3, [['Pilih yang ', ['kekal,', 'g']], ['bukan yang sementara.']]],
  [109.45, 111.7, [['Namun dunia tidak'], ['semuanya buruk.']]],
  [111.85, 118.0, [['Ambil yang ', ['membantu ibadah.', 'g']], ['Tinggalkan yang melalaikan.']]],
  [118.15, 122.0, [['Selain dunia,'], [['pergaulan', 'g'], ' juga perlu dijaga.']]],
  [122.15, 128.0, [['Jangan terlalu tertutup,'], ['jangan terlalu terbuka.']]],
  [128.15, 131.8, [['Jika ia mengingatkan'], ['kepada Allah, ', ['itu baik.', 'g']]]],
  [131.95, 135.3, [['Jika membawa kepada dosa,'], [['berhati-hati.', 'g']]]],
  [135.55, 139.8, [[['Keempat:', 'g'], ' jangan'], ['mengungkit pemberian.']]],
  [139.95, 144.2, [['Perangi godaan syaitan'], ['dengan ilmu & ', ['تَقْوَى', 'ar']]]],
  [144.35, 150.6, [['Ia menyesatkan'], [['sedikit demi sedikit.', 'g']]]],
  [150.85, 154.4, [[['اِسْتِقَامَة', 'ar'], ' bukan sekadar'], ['menambah amalan.']]],
  [154.55, 162.5, [['Ia memerlukan:']]],
  [162.65, 167.2, [['Pilih yang ', ['kekal.', 'g']], ['Tinggalkan yang ', ['melalaikan.', 'g']]], { center: true, y: 150 }],
  [167.35, 169.95, [['Walaupun sedikit,'], ['asal ', ['ikhlas', 'g'], ' dan ', ['berterusan.', 'g']]], { center: true, y: 150 }],
];
function segFont(k, size) { return k === 'ar' ? `${Math.round(size * 1.18)}px SchB` : `bold ${size}px ${SANS}`; }
function drawTitle(T, t) {
  const [t0, t1, lines, o = {}] = T; if (t < t0 || t > t1) return;
  const ai = ss(t0, t0 + .35, t), ao = 1 - ss(t1 - .3, t1, t), a = Math.min(ai, ao); if (a <= 0) return;
  const blur = 8 * (1 - a), dy = 6 * (1 - ai), size = o.size || 31, lh = size * 1.18, y0 = (o.y || 118) + dy;
  lines.forEach((ln, li) => {
    const segs = ln.map(s => typeof s === 'string' ? [s, ''] : s);
    const wd = segs.map(([s, k]) => { ox.font = segFont(k, size); ox.letterSpacing = k === 'ar' ? '0px' : '-0.6px'; return ox.measureText(s).width; });
    let x = o.center ? W / 2 - wd.reduce((a, b) => a + b, 0) / 2 : 30;
    segs.forEach(([s, k], n) => { txt(s, x, y0 + li * lh, { font: segFont(k, size), col: k ? GOLD : WHITE, a, blur, ls: k === 'ar' ? '0px' : '-0.6px' }); x += wd[n]; });
  });
}
function counter(num, suffix, gold, a, lab, y = 760) {
  if (a <= 0) return; label(lab, W / 2, y - 58, a * .8, GREY, 'center', 9);
  ox.font = `bold 66px ${SANS}`; ox.letterSpacing = '-2px'; const w = ox.measureText(String(num)).width;
  txt(String(num), W / 2 - 18, y, { font: `bold 66px ${SANS}`, col: gold ? GOLD : WHITE, al: 'center', a, ls: '-2px' });
  txt(suffix, W / 2 - 18 + w / 2 + 4, y, { font: `600 19px ${SANS}`, col: GREY, a });
}
function pill(x, y, l1, l2, a, center = false) {
  if (a <= 0) return; ox.save(); ox.font = `600 13px ${SANS}`; const w1 = ox.measureText(l1).width; ox.font = `600 8px ${SANS}`; ox.letterSpacing = '1.6px'; const w2 = ox.measureText(l2.toUpperCase()).width;
  const w = Math.max(w1, w2, 70) + 26; if (center) x -= w / 2; x = clamp(x, 10, W - w - 10);
  ox.letterSpacing = '0px'; ox.globalAlpha = a; ox.fillStyle = 'rgba(14,12,10,.82)'; ox.strokeStyle = 'rgba(255,255,255,.22)'; ox.lineWidth = 1; ox.beginPath(); ox.roundRect(x, y, w, l2 ? 40 : 30, 7); ox.fill(); ox.stroke(); ox.restore();
  txt(l1, x + w / 2, y + (l2 ? 17 : 20), { font: `600 13px ${SANS}`, al: 'center', a }); if (l2) label(l2, x + w / 2, y + 32, a, GOLD2, 'center', 8);
}
function pill3(i, l1, l2, a, dy = -64) { const tp = barTop[i]; if (!tp || a <= 0) return; const [x, y, v] = proj(tp); if (v) pill(x, Math.max(y + dy, 175), l1, l2, a, true); }
function chip(x, y, s, a, on) {
  if (a <= 0) return 0; ox.save(); ox.font = `600 18px ${SANS}`; const w = ox.measureText(s).width + 36; ox.globalAlpha = a;
  ox.fillStyle = on ? 'rgba(228,196,123,.16)' : 'rgba(20,18,14,.7)'; ox.strokeStyle = on ? 'rgba(228,196,123,.75)' : 'rgba(255,255,255,.14)'; ox.lineWidth = 1.2;
  if (on) { ox.shadowColor = 'rgba(228,196,123,.5)'; ox.shadowBlur = 14; } ox.beginPath(); ox.roundRect(x, y, w, 44, 22); ox.fill(); ox.stroke(); ox.restore();
  txt(s, x + w / 2, y + 28, { font: `600 18px ${SANS}`, al: 'center', col: on ? GOLD : WHITE, a }); return w;
}
function chipRow(items, y, t, end) {
  ox.font = `600 18px ${SANS}`; const ws = items.map(([s]) => ox.measureText(s).width + 36), gap = 12;
  let x = W / 2 - (ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1)) / 2;
  items.forEach(([s, t0], n) => { const a = win(t, t0, end, .35, .35); chip(x, y + 8 * (1 - ss(t0, t0 + .35, t)), s, a, t > t0 + .2); x += ws[n] + gap; });
}
function glassCard(x, y, w, h, lab, q, a) {
  if (a <= 0) return; ox.save(); ox.globalAlpha = a; ox.fillStyle = 'rgba(20,18,14,.62)'; ox.strokeStyle = 'rgba(255,255,255,.12)'; ox.beginPath(); ox.roundRect(x, y, w, h, 14); ox.fill(); ox.stroke(); ox.restore();
  label(lab, x + 20, y + 28, a, GOLD2, 'left', 9); q.forEach((l, i) => txt(l, x + 20, y + 58 + i * 25, { font: `500 19px ${SANS}`, a }));
}
function calli(t) { // إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (20.9-28.4)
  const A = win(t, 20.75, 28.55, .25, .25); if (A <= 0) return;
  ox.save(); ox.globalAlpha = A;
  const cy = 1330, r = 520; const hg = ox.createRadialGradient(W / 2, cy, r - 40, W / 2, cy, r + 160); hg.addColorStop(0, 'rgba(0,0,0,0)'); hg.addColorStop(.25, 'rgba(228,170,80,.18)'); hg.addColorStop(1, 'rgba(0,0,0,0)');
  ox.fillStyle = hg; ox.fillRect(0, 700, W, 580);
  ox.beginPath(); ox.arc(W / 2, cy, r, Math.PI, 2 * Math.PI); ox.fillStyle = '#0b0907'; ox.fill(); ox.strokeStyle = 'rgba(228,196,123,.6)'; ox.lineWidth = 1.4; ox.shadowColor = GOLD; ox.shadowBlur = 12; ox.stroke(); ox.shadowBlur = 0;
  const pa = .75 + .25 * Math.sin(t * 3), gx = W / 2, gy = cy - r; const rg = ox.createRadialGradient(gx, gy, 0, gx, gy, 110);
  rg.addColorStop(0, `rgba(255,240,200,${pa})`); rg.addColorStop(.12, `rgba(255,200,110,${.7 * pa})`); rg.addColorStop(1, 'rgba(255,160,60,0)'); ox.fillStyle = rg; ox.fillRect(gx - 110, gy - 110, 220, 220);
  ox.restore();
  label('QS. Al-Fatihah 1:5', 30, 90, A, GOLD, 'left', 9);
  const L1 = 'إِيَّاكَ نَعْبُدُ', L2 = 'وَإِيَّاكَ نَسْتَعِينُ';
  [[L1, 430, 21.0], [L2, 590, 22.0]].forEach(([w, fy, t0]) => {
    ox.save(); ox.globalAlpha = A; ox.font = '118px SchB'; ox.textAlign = 'center'; ox.direction = 'rtl';
    const dr = ss(t0, t0 + 1.1, t); ox.setLineDash([2600 * dr, 2600]); ox.lineWidth = 1.8; ox.strokeStyle = GOLD; ox.shadowColor = 'rgba(228,196,123,.8)'; ox.shadowBlur = 10; ox.strokeText(w, W / 2, fy);
    const fl = ss(t0 + .8, t0 + 1.6, t); if (fl > 0) { const fg = ox.createLinearGradient(0, fy - 110, 0, fy + 30); fg.addColorStop(0, '#FFE7A8'); fg.addColorStop(.6, '#E4B85E'); fg.addColorStop(1, '#9C7330'); ox.globalAlpha = A * fl; ox.setLineDash([]); ox.fillStyle = fg; ox.shadowBlur = 26; ox.fillText(w, W / 2, fy); }
    ox.restore();
  });
  const a2 = A * ss(23.3, 23.9, t);
  txt('"Hanya kepada-Mu kami menyembah dan', W / 2, 690, { font: `500 20px ${SANS}`, al: 'center', a: a2 });
  txt('hanya kepada-Mu kami meminta pertolongan."', W / 2, 718, { font: `500 20px ${SANS}`, al: 'center', a: a2 });
}
function bloom(t) {
  let a = 0, k = 0; for (const p of BLOOMS) { a = Math.max(a, win(t, p - .5, p + .55, .5, .55)); k = Math.max(k, 1 - Math.abs(t - p) / .5); }
  if (a <= 0) return; const g = ox.createRadialGradient(W / 2, H * .45, 10, W / 2, H * .45, 900);
  g.addColorStop(0, `rgba(255,246,222,${a})`); g.addColorStop(.4, `rgba(251,237,204,${a * (.6 + .4 * k)})`); g.addColorStop(1, `rgba(214,170,90,${a * k * .9})`); ox.fillStyle = g; ox.fillRect(0, 0, W, H);
}
function subFollow(t) {
  const a = win(t, .2, 3.5, .3, .35); if (a <= 0) return;
  const x = 150, y = 1060 + 14 * (1 - ss(.2, .5, t)), w = 420, h = 74;
  ox.save(); ox.globalAlpha = a; ox.fillStyle = '#fff'; ox.shadowColor = 'rgba(0,0,0,.4)'; ox.shadowBlur = 20; ox.beginPath(); ox.roundRect(x, y, w, h, 16); ox.fill(); ox.shadowBlur = 0;
  ox.fillStyle = '#1b1712'; ox.beginPath(); ox.arc(x + 38, y + 37, 22, 0, 7); ox.fill();
  ox.translate(x + 38, y + 37); ox.fillStyle = '#C9952F'; ox.beginPath(); for (let i = 0; i < 16; i++) { const r = i % 2 ? 7.6 : 10, an = i * Math.PI / 8; ox.lineTo(r * Math.sin(an), -r * Math.cos(an)); } ox.closePath(); ox.fill(); ox.setTransform(SC, 0, 0, SC, 0, 0); ox.globalAlpha = a;
  ox.fillStyle = '#111'; ox.font = `bold 17px ${SANS}`; ox.fillText('alurziyadahku', x + 72, y + 32); ox.fillStyle = '#777'; ox.font = `500 12px ${SANS}`; ox.fillText('Kajian Al-Qur\'an', x + 72, y + 52);
  const s1 = t > 1.25, s2 = t > 2.25;
  const btn = (bx_, txt_, on, pulse) => { ox.fillStyle = on ? '#E8E4DC' : '#1b1712'; ox.beginPath(); ox.roundRect(bx_, y + 20, 92, 34, 17); ox.fill(); ox.fillStyle = on ? '#3a3328' : '#fff'; ox.font = `600 13px ${SANS}`; ox.textAlign = 'center'; ox.fillText(txt_, bx_ + 46, y + 42); ox.textAlign = 'left';
    if (pulse > 0) { ox.strokeStyle = `rgba(228,196,123,${pulse})`; ox.lineWidth = 2; ox.beginPath(); ox.roundRect(bx_ - 6 * (1 - pulse), y + 20 - 6 * (1 - pulse), 92 + 12 * (1 - pulse), 34 + 12 * (1 - pulse), 20); ox.stroke(); } };
  btn(x + 214, s1 ? 'Subscribed' : 'Subscribe', s1, s1 ? 1 - ss(1.25, 1.7, t) : 0); btn(x + 316, s2 ? 'Following' : 'Follow', s2, s2 ? 1 - ss(2.25, 2.7, t) : 0);
  const P = [[x + 430, y + 120, .3], [x + 262, y + 40, 1.15], [x + 262, y + 40, 1.6], [x + 362, y + 40, 2.15], [x + 362, y + 40, 3.5]];
  let cx = P[0][0], cy = P[0][1]; for (let i = 0; i < P.length - 1; i++) { const u = eio(clamp((t - P[i][2]) / (P[i + 1][2] - P[i][2]))); if (t >= P[i][2]) { cx = lerp(P[i][0], P[i + 1][0], u); cy = lerp(P[i][1], P[i + 1][1], u); } }
  const press = (Math.abs(t - 1.25) < .08 || Math.abs(t - 2.25) < .08) ? .85 : 1;
  ox.translate(cx, cy); ox.scale(press, press); ox.fillStyle = '#fff'; ox.strokeStyle = '#000'; ox.lineWidth = 1.5; ox.beginPath(); ox.moveTo(0, 0); ox.lineTo(0, 22); ox.lineTo(6, 17); ox.lineTo(10, 26); ox.lineTo(14, 24); ox.lineTo(10, 15); ox.lineTo(17, 15); ox.closePath(); ox.fill(); ox.stroke();
  ox.restore();
}
function followCard(t) {
  const a = ss(170.0, 170.5, t); if (a <= 0) return;
  ox.fillStyle = `rgba(3,3,3,${.55 * a})`; ox.fillRect(0, 0, W, H);
  const y = 470 + 20 * (1 - a);
  ox.save(); ox.globalAlpha = a; ox.fillStyle = 'rgba(20,18,14,.85)'; ox.strokeStyle = 'rgba(228,196,123,.35)'; ox.beginPath(); ox.roundRect(90, y, 540, 300, 22); ox.fill(); ox.stroke(); ox.restore();
  txt('Jangan lupa follow ya', W / 2, y + 74, { font: `bold 34px ${SANS}`, al: 'center', a, ls: '-0.6px' });
  txt('@alurziyadahku', W / 2, y + 122, { font: `bold 30px ${SANS}`, al: 'center', col: GOLD, a, ls: '-0.4px' });
  ['Follow', 'Simpan', 'Kongsi'].forEach((s, i) => {
    const x = 140 + i * 152, on = i === 0; ox.save(); ox.globalAlpha = a * ss(170.5 + i * .2, 170.9 + i * .2, t);
    ox.fillStyle = on ? GOLD : 'rgba(255,255,255,.08)'; ox.strokeStyle = 'rgba(228,196,123,.5)'; ox.beginPath(); ox.roundRect(x, y + 180, 136, 52, 26); ox.fill(); if (!on) ox.stroke();
    ox.fillStyle = on ? '#16110a' : WHITE; ox.font = `bold 19px ${SANS}`; ox.textAlign = 'center'; ox.fillText(s, x + 68, y + 213); ox.restore();
  });
}
function vignette() { const g = ox.createRadialGradient(W / 2, H / 2, 380, W / 2, H / 2, 900); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.6)'); ox.fillStyle = g; ox.fillRect(0, 0, W, H); }

function drawOverlay(t) {
  ox.clearRect(0, 0, W, H);
  vignette();
  calli(t);
  if (t > 16.55 && t < 20.9) { counter(1, '/604', t > 18.4, win(t, 16.7, 20.9, .4, .3), 'Halaman', 1000); label('QS. Al-Fatihah 1:5', 30, 190, win(t, 18.4, 20.9, .4, .3), GOLD2, 'left', 9); }
  // tiga syarat
  const arcs = [[0, '1 · Sah', 'asasnya ilmu', 28.9], [1, '2 · Diterima', 'jalannya taubat', 43.9], [2, '3 · Berterusan', 'sedikit tetapi kekal', 58.0]];
  for (const [k, a1, a2, t0] of arcs) pill3(k * 24 + 12, a1, a2, win(t, t0, 64.3, .4, .4), -70);
  chipRow([['Berdoa', 33.6], ['Belajar', 36.7], ['Beradab', 38.0]], 1040, t, 39.3);
  // perbandingan + hadits
  pill3(13, 'Banyak', 'tetapi terputus', win(t, 65.2, 76.3, .4, .4), -60);
  pill3(54, 'Sedikit', 'tetapi berterusan', win(t, 65.8, 76.3, .4, .4), -60);
  glassCard(30, 1010, 660, 128, "Sabda Rasulullah sallallahu 'alaihi wa sallam · Sahih al-Bukhari 6464", ['"Amalan yang paling dicintai Allah ialah yang', 'berterusan walaupun sedikit."'], win(t, 66.1, 72.9, .5, .4));
  chipRow([['Solat', 73.2], ['Membaca Al-Quran', 74.0]], 1040, t, 76.3);
  // jam 24 jam
  const ca = win(t, 77.0, 97.8, .6, .5);
  if (ca > 0) { [['00', 0], ['06', 18], ['12', 36], ['18', 54]].forEach(([s, i]) => { const [x, y, v] = proj(polar(thB(i - .5), 3.15).setY(.02)); if (v) label(s, x, y + 4, ca, GREY, 'center', 11); }); label('24 jam sehari', W / 2, 1180, ca, GREY, 'center', 9); }
  [['Kerja', 6, 85.6], ['Perdagangan', 22, 87.0], ['Telefon', 38, 88.8], ['Urusan lain', 50, 90.4]].forEach(([s, i, t0]) => pill3(i, s, '', win(t, t0, 92.6, .35, .35), -46));
  pill3(62, 'Waktu ibadah', 'dilindungi', win(t, 93.4, 97.8, .4, .4), -60);
  // dunia / akhirat
  pill3(20, 'Dunia', 'sementara', win(t, 102.6, 109.3, .4, .4), -60); pill3(62, 'Akhirat', 'kekal', win(t, 102.6, 109.3, .4, .4), -60);
  pill3(BR.findIndex(b => b.r3 < .38), 'Membantu ibadah', 'ambil', win(t, 112.6, 118.0, .4, .4), -60);
  pill3(BR.findIndex((b, i) => b.r3 >= .38 && !IBADAH(i) && i > 30), 'Melalaikan', 'tinggalkan', win(t, 113.2, 118.0, .4, .4), -46);
  // pergaulan
  const pl = t < 124.7 ? ['Terlalu tertutup', 122.6, 124.6] : t < 127.6 ? ['Terlalu terbuka', 125.0, 127.5] : ['Seimbang', 128.0, 131.8];
  if (t > 122 && t < 131.8) pill(W / 2, 1000, pl[0], '', win(t, pl[1], pl[2], .3, .3), true);
  if (t > 131.9 && t < 135.4) PALS.filter(p => p.bad).forEach((p, n) => { const [x, y, v] = proj(p.s.position); if (v) pill(x, y - 52, ['Mengumpat', 'Riak', 'Sombong'][n], '', win(t, 132.2 + n * .3, 135.3, .3, .3), true); });
  // keempat
  glassCard(30, 1010, 660, 128, 'QS. Al-Baqarah 2:264', ['"...janganlah kamu rosakkan sedekahmu dengan', 'mengungkit-ungkit dan menyakiti..."'], win(t, 136.0, 139.8, .5, .4));
  chipRow([['Ilmu', 142.6], ['Taqwa', 143.0]], 1040, t, 144.2);
  [['Gaya hidup', 8, 145.0], ['Percakapan', 26, 146.8], ['Kebiasaan', 44, 148.6]].forEach(([s, i, t0]) => pill3(i, s, '', win(t, t0, 150.6, .35, .35), -46));
  // kesimpulan
  chipRow([['Ilmu', 154.7], ['Taubat', 155.9], ['Pengurusan masa', 157.0]], 960, t, 162.5);
  chipRow([['Pergaulan seimbang', 158.7], ['Hati meminta pertolongan Allah', 160.1]], 1016, t, 162.5);
  for (const T of TITLES) drawTitle(T, t);
  subFollow(t);
  bloom(t);
  followCard(t);
}

window.renderFrame = (t) => { drawBg(t); update3D(t); drawOverlay(t); };
window.READY = true;
