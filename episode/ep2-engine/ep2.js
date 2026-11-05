// Ep1 "Urutan Wahyu 3D" — render(t) murni. 720x1280 logis, skala ?s= (default 1.5 -> 1080x1920)
import * as THREE from 'three';

const W = 720, H = 1280;
const SC = parseFloat(new URLSearchParams(location.search).get('s') || '1.5');
const CFG = await (await fetch(new URLSearchParams(location.search).get('cfg') || 'ep.json')).json();
export const END = CFG.end;

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
const PAGES = await (await fetch('pages_all.json')).json();
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

// ===================== ENGINE EP2: mushaf otomatis + bangunan poin (digerakkan ep.json) =====================
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
const CLEAN = new URLSearchParams(location.search).get('clean');

// ---------- kitab + piringan ----------
function coverTex() {
  const cv = document.createElement('canvas'); cv.width = 800; cv.height = 1080; const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 800, 1080); g.addColorStop(0, '#1c1c1c'); g.addColorStop(1, '#101010'); c.fillStyle = g; c.fillRect(0, 0, 800, 1080);
  c.strokeStyle = '#C8932E'; c.lineWidth = 6; c.strokeRect(62, 62, 676, 956);
  c.translate(400, 540); c.fillStyle = '#D2962C'; c.beginPath(); for (let i = 0; i < 16; i++) { const r = i % 2 ? 126 : 165, a = i * Math.PI / 8; c.lineTo(r * Math.sin(a), -r * Math.cos(a)); } c.closePath(); c.fill();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
const ring = new THREE.Group(); scene.add(ring);
const book = new THREE.Group(); ring.add(book);
{
  const side = new THREE.MeshStandardMaterial({ color: 0x1a1210, roughness: .6, metalness: .15 });
  const top = new THREE.MeshStandardMaterial({ map: coverTex(), roughness: .7, metalness: .05 });
  const m = new THREE.Mesh(new THREE.BoxGeometry(1.0, .2, 1.35), [side, side, top, side, side, side]); m.position.y = .1; book.add(m);
}
const R = 2.35;
const disk = new THREE.Mesh(new THREE.CylinderGeometry(3.05, 3.05, .04, 160), new THREE.MeshStandardMaterial({ color: 0x0c0a08, roughness: .35, metalness: .5 })); disk.position.y = -.025; ring.add(disk);
const ticks = new THREE.InstancedMesh(new THREE.BoxGeometry(.012, .01, .16), new THREE.MeshBasicMaterial({ color: 0x9a9284 }), 120); ring.add(ticks);
{ const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(); for (let i = 0; i < 120; i++) { const th = 2 * Math.PI * i / 120; m4.compose(new THREE.Vector3(2.86 * Math.sin(th), 0, -2.86 * Math.cos(th)), q.setFromEuler(e.set(0, -th, 0)), new THREE.Vector3(1, 1, i % 10 === 0 ? 1.8 : 1)); ticks.setMatrixAt(i, m4); } }
const rim = new THREE.Mesh(new THREE.TorusGeometry(2.72, .006, 6, 200), new THREE.MeshBasicMaterial({ color: 0x5a5245 })); rim.rotation.x = Math.PI / 2; ring.add(rim);

// ---------- bangunan (gaya referensi: gading bersudut bulat + perunggu kaca bertepi emas) ----------
const NB = 96, bw = 2 * Math.PI * R / NB * .62, bd = .2;
const thB = i => Math.PI * .62 + 2 * Math.PI * (i + .5) / NB;
const polar = (th, r = R) => new THREE.Vector3(r * Math.sin(th), 0, -r * Math.cos(th));
const geo = new RoundedBoxGeometry(1, 1, 1, 3, .09).translate(0, .5, 0);
const ivory = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .38, metalness: .05 }), NB);
const bronze = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .22, metalness: .75, transparent: true, opacity: .93 }), NB);
const caps = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xffffff }), NB);
const edges = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, .5, 0), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .8 }), NB * 2);
for (const m of [ivory, bronze, caps, edges]) { m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); ring.add(m); }
const BL = Array.from({ length: NB }, (_, i) => { const r = rng(i * 17 + 3); const r1 = r(), r2 = r(), r3 = r();
  const zone = i > 58 && i < 92; const br = zone ? r2 < .72 : r2 < .14;
  return { h: .22 + (br ? 1.25 : .95) * Math.pow(r1, 1.5) + (zone ? .25 : 0), br, r3 }; });
const C_IV = new THREE.Color('#EDE6D6'), C_BR = new THREE.Color('#7a5628'), C_HOT = new THREE.Color('#FFE2A0'), C_CAP = new THREE.Color('#FFD27A'), C_EDGE = new THREE.Color('#C99A4A');
function glowTex() { const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'); const g = c.createRadialGradient(64, 64, 0, 64, 64, 64); g.addColorStop(0, 'rgba(255,248,225,1)'); g.addColorStop(.18, 'rgba(255,214,130,.9)'); g.addColorStop(.5, 'rgba(255,170,60,.25)'); g.addColorStop(1, 'rgba(255,150,40,0)'); c.fillStyle = g; c.fillRect(0, 0, 128, 128); return new THREE.CanvasTexture(cv); }
const GT = glowTex();
const mkOrb = () => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: GT, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true })); scene.add(s); return s; };
const orb = mkOrb(), capGlow = mkOrb();

// ---------- konfigurasi ----------
const POINTS = CFG.points || [], AYAHS = CFG.ayahs || [], MODES = CFG.modes || [[0, 'ring']];
const modeAt = t => { let m = MODES[0][1]; for (const [t0, mm] of MODES) if (t >= t0) m = mm; return m; };
const BLOOMS = MODES.slice(1).map(([t0]) => t0);
// jadwal balik halaman (otomatis)
const spreadR = p => (p % 2 ? p : p - 1);
const FLIPS = []; let curR = 1;
function flipRun(t0, t1, target, n) {
  const a0 = curR, b = spreadR(target); if (a0 === b) return;
  for (let k = 0; k < n; k++) {
    let from = spreadR(Math.round(lerp(a0, b, k / n))), to = spreadR(Math.round(lerp(a0, b, (k + 1) / n)));
    if (k === n - 1) to = b; if (from === to) continue;
    FLIPS.push({ t0: t0 + (t1 - t0) * k / n, d: (t1 - t0) / n * .92, a: from, b: to });
  }
  curR = b;
}
if (CFG.intro) flipRun(CFG.intro.t0, CFG.intro.t1, CFG.intro.to, CFG.intro.flips || 8);
for (const a of AYAHS) { const n = clamp(Math.ceil(Math.abs(spreadR(a.page) - curR) / 30), 1, 6); a.ft = a.flip || (.32 * n + .2); flipRun(a.t, a.t + a.ft, a.page, n); }
function spreadAt(t) {
  let cur = 1;
  for (const f of FLIPS) {
    if (t < f.t0) break;
    if (t < f.t0 + f.d) {
      const u = eio((t - f.t0) / f.d), fwd = f.b > f.a;
      return fwd ? { L: f.b + 1, R: f.a, flip: { phi: Math.PI * (1 - u), U: f.b, D: f.a + 1 }, num: Math.round(lerp(f.a, f.b, u)), fwd }
                 : { L: f.a + 1, R: f.b, flip: { phi: Math.PI * u, U: f.a, D: f.b + 1 }, num: Math.round(lerp(f.a, f.b, u)), fwd };
    }
    cur = f.b;
  }
  return { L: cur + 1, R: cur, flip: null, num: cur };
}
const ayahAt = t => AYAHS.find(a => t >= a.t && t < a.until);
for (const a of AYAHS) { a.side = a.page % 2 ? 1 : -1; a.z = -PGH / 2 + PGH * hlFrac(a.page, a.hl); }

// ---------- kamera (shot + campuran halus) ----------
const OV_M = t => [[.03 * Math.sin(t * .6), 4.6 - .05 * Math.sin(t * .3), 2.75], [0, -.55, .3]];
const OV_R = t => { const f = .1 * t; return [[10 * Math.sin(f), 6.2, 10 * Math.cos(f)], [0, .35, 0]]; };
function shotAyah(a, t) {
  const u = ss(a.t + a.ft, a.t + a.ft + .9, t), k = clamp((t - a.t - a.ft) / (a.until - a.t - a.ft));
  const sx = .5 * a.side, close = [[sx, lerp(2.15, 1.85, k), a.z + lerp(1.3, 1.05, k)], [sx, -.15, a.z]];
  const [p0, q0] = OV_M(t); return [p0.map((v, i) => lerp(v, close[0][i], eio(u))), q0.map((v, i) => lerp(v, close[1][i], eio(u)))];
}
function shotPoint(p, t) {
  const th = thB(p.idx), B = polar(th), o = B.clone().normalize(), side = new THREE.Vector3(-o.z, 0, o.x);
  const k = clamp((t - p.t) / (p.until - p.t));
  const pos = B.clone().addScaledVector(o, lerp(2.9, 2.35, k)).addScaledVector(side, -.75).setY(lerp(.75, .95, k));
  return [pos.toArray(), B.clone().setY(1.15).addScaledVector(side, .62).toArray()];
}
function baseShot(t) {
  const mode = modeAt(t);
  if (mode === 'mushaf') { const a = ayahAt(t); return a ? shotAyah(a, t) : OV_M(t); }
  if (mode === 'follow') return [[0, 3.05, 2.0], [0, .78, -.1]];
  const p = POINTS.find(p => t >= p.t && t < p.until); return p ? shotPoint(p, t) : OV_R(t);
}
// campur saat ganti shot (poin masuk/keluar) supaya kamera tidak melompat
const CUTS = [...POINTS.flatMap(p => [p.t, p.until]), ...AYAHS.map(a => a.until), ...(CFG.follow ? [CFG.follow] : [])].sort((a, b) => a - b);
function camAt(t) {
  let [P, Q] = baseShot(t);
  const c = CUTS.filter(x => x <= t && t < x + 1.1 && !BLOOMS.some(b => Math.abs(b - x) < .05)).pop();
  if (c !== undefined) { const [P0, Q0] = baseShot(c - .001); const u = eio(clamp((t - c) / 1.1)); P = P0.map((v, i) => lerp(v, P[i], u)); Q = Q0.map((v, i) => lerp(v, Q[i], u)); }
  cam.position.set(...P); cam.lookAt(...Q);
}

const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e4 = new THREE.Euler(), s4 = new THREE.Vector3(), c4 = new THREE.Color();
const barTop = [];
const firstRing = (MODES.find(m => m[1] === 'ring') || [0])[0];
function update3D(t) {
  camAt(t);
  const mode = modeAt(t);
  mushaf.visible = mode === 'mushaf'; ring.visible = mode !== 'mushaf';
  if (mushaf.visible) {
    const sp = spreadAt(t), a = ayahAt(t), hlA = a ? ss(a.t + a.ft + .3, a.t + a.ft + .9, t) : 0;
    const hlOn = p => (a && a.page === p ? [a.hl, hlA] : [[], 0]);
    leftM.material.map = pageTex(sp.L, ...hlOn(sp.L)); rightM.material.map = pageTex(sp.R, ...hlOn(sp.R)); leftM.material.needsUpdate = rightM.material.needsUpdate = true;
    flippers.forEach((f, k) => { f.piv.visible = !!sp.flip; if (!sp.flip) return;
      const phi = clamp(sp.flip.phi + (sp.fwd ? 1 : -1) * k * .16, 0, Math.PI); f.piv.rotation.z = phi;
      f.U.material.map = pageTex(sp.flip.U); f.D.material.map = pageTex(sp.flip.D); const op = k === 0 ? 1 : .28 / k; f.U.material.opacity = f.D.material.opacity = op; f.U.material.needsUpdate = f.D.material.needsUpdate = true; });
  }
  // bangunan
  const P = POINTS.find(p => t >= p.t && t < p.until);
  let bi = 0, ei = 0;
  for (let i = 0; i < NB; i++) {
    const b = BL[i], th = thB(i);
    const rise = eoBack(clamp((t - firstRing - .2 - i / NB * 1.6) / .6));
    let h = b.h * rise, hot = .55 * Math.exp(-((((((th - .35 * t) % 6.283) + 9.42) % 6.283 - 3.14) / .35) ** 2)) * (P ? .3 : 1);
    let lit = 0;
    for (const p of POINTS) if (t > p.t + .4) { const near = Math.abs(i - p.idx) <= (p.span || 1); if (near) { const g = eoBack(clamp((t - p.t - .4) / 1.0)); h = Math.max(h, (i === p.idx ? 2.1 : 1.45) * g); lit = Math.max(lit, (t < p.until ? 1 : .55) * g); } }
    hot = Math.max(hot, lit);
    const pos = polar(th);
    const cu = CFG.follow ? eio(clamp((t - CFG.follow + 2.6 - i / NB * 1.2) / .9)) : 0;
    pos.multiplyScalar(lerp(1, .2, cu)); h = Math.max(h * lerp(1, .04, cu), .0001);
    q4.setFromEuler(e4.set(cu * 1.3, -th, 0));
    m4.compose(pos, q4, s4.set(bw, h, bd)); const hide = new THREE.Matrix4().makeScale(0, 0, 0);
    (b.br ? bronze : ivory).setMatrixAt(i, m4); (b.br ? ivory : bronze).setMatrixAt(i, hide);
    c4.copy(b.br ? C_BR : C_IV).lerp(C_HOT, hot * (b.br ? .55 : .35)).multiplyScalar(1 + hot * (b.br ? 1.6 : .5)); (b.br ? bronze : ivory).setColorAt(i, c4);
    // tutup emas bercahaya
    m4.compose(pos.clone().setY(pos.y + h), q4, s4.set(bw * 1.04, .012, bd * 1.04)); caps.setMatrixAt(i, m4);
    c4.copy(C_CAP).multiplyScalar((b.br ? .9 : .35) + hot * 1.4); caps.setColorAt(i, c4);
    // tepi tegak emas (perunggu)
    for (const sgn of [-1, 1]) {
      const off = new THREE.Vector3(sgn * bw / 2, 0, bd / 2).applyQuaternion(q4);
      m4.compose(pos.clone().add(off), q4, b.br ? s4.set(.006, h, .006) : s4.set(0, 0, 0)); edges.setMatrixAt(ei, m4); c4.copy(C_EDGE).multiplyScalar(.7 + hot); edges.setColorAt(ei, c4); ei++;
    }
    barTop[i] = pos.clone().setY(h + .08);
  }
  for (const m of [ivory, bronze, caps, edges]) { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; }
  // orb & cahaya puncak
  let op = null, oa = 0;
  if (P) { const B = polar(thB(P.idx)), o = B.clone().normalize(), side = new THREE.Vector3(-o.z, 0, o.x); op = B.clone().addScaledVector(o, .9).addScaledVector(side, -.85).setY(1.05); oa = win(t, P.t + .3, P.until, .5, .4); }
  else if (mode === 'follow') { op = new THREE.Vector3(0, .95, -.35); oa = ss(CFG.follow, CFG.follow + 1.2, t); }
  orb.visible = !!op && oa > .01 && ring.visible; if (orb.visible) { orb.position.copy(op); orb.scale.setScalar(.55); orb.material.opacity = oa; orbLight.position.copy(op); orbLight.intensity = 3.2 * oa; } else orbLight.intensity = 0;
  capGlow.visible = !!P && ring.visible; if (capGlow.visible) { capGlow.position.copy(barTop[P.idx]); capGlow.scale.setScalar(.5); capGlow.material.opacity = win(t, P.t + .9, P.until, .5, .4) * (.8 + .2 * Math.sin(t * 4)); }
  renderer.render(scene, cam);
}

// ---------- latar 2D ----------
const STARS = (() => { const r = rng(3); return Array.from({ length: 260 }, () => ({ x: r() * W, y: r() * H, s: .3 + r() * 1.3, p: r() * 6.28, f: .4 + r() * 1.6, d: r() })); })();
function drawBg(t) {
  bx.clearRect(0, 0, W, H); const g = bx.createRadialGradient(W / 2, H * .45, 40, W / 2, H * .5, 900); g.addColorStop(0, '#16110c'); g.addColorStop(.55, '#0a0807'); g.addColorStop(1, '#030303'); bx.fillStyle = g; bx.fillRect(0, 0, W, H);
  for (const s of STARS) { const y = (s.y - t * 4 * s.d + H * 80) % H; const a = .25 + .55 * (.5 + .5 * Math.sin(t * s.f + s.p)); bx.globalAlpha = a * (.35 + .65 * s.d); bx.fillStyle = '#fff'; bx.beginPath(); bx.arc(s.x, y, s.s, 0, 7); bx.fill(); }
  bx.globalAlpha = 1;
}

// ---------- overlay ----------
const PROF = new Image(); PROF.src = 'profile.jpg'; await PROF.decode();
function avatar(cx, cy, r) { ox.save(); ox.beginPath(); ox.arc(cx, cy, r, 0, 7); ox.clip(); ox.fillStyle = '#1a6b45'; ox.fillRect(cx - r, cy - r, 2 * r, 2 * r); const d = r * 2 * 1.06; ox.drawImage(PROF, cx - d / 2, cy - d * .47, d, d); ox.restore(); ox.save(); ox.strokeStyle = 'rgba(228,196,123,.85)'; ox.lineWidth = Math.max(1.5, r * .06); ox.beginPath(); ox.arc(cx, cy, r, 0, 7); ox.stroke(); ox.restore(); }
function proj(v) { const p = v.clone().project(cam); return [(p.x + 1) / 2 * W, (1 - p.y) / 2 * H, p.z < 1]; }
function txt(s, x, y, { font = `bold 30px ${SANS}`, col = WHITE, al = 'left', a = 1, ls = '0px', blur = 0, sh = 0 } = {}) { ox.save(); ox.globalAlpha = a; ox.font = font; ox.fillStyle = col; ox.textAlign = al; ox.letterSpacing = ls; if (blur > .1) ox.filter = `blur(${blur}px)`; if (sh) { ox.shadowColor = typeof col === 'string' ? col : GOLD; ox.shadowBlur = sh; } ox.fillText(s, x, y); ox.restore(); }
function label(s, x, y, a, col = GREY, al = 'left', size = 10) { txt(s.toUpperCase(), x, y, { font: `600 ${size}px ${SANS}`, col, al, a, ls: '1.6px' }); }
const segFont = (k, size) => k === 'ar' ? `${Math.round(size * 1.18)}px SchB` : `bold ${size}px ${SANS}`;
function drawTitle(T, t) {
  const [t0, t1, lines, o = {}] = T; if (t < t0 || t > t1) return;
  const ai = ss(t0, t0 + .35, t), ao = 1 - ss(t1 - .3, t1, t), a = Math.min(ai, ao); if (a <= 0) return;
  const blur = 8 * (1 - a), dy = 6 * (1 - ai), size = o.size || 31, lh = size * 1.18, y0 = (o.y || 118) + dy;
  lines.forEach((ln, li) => { const segs = ln.map(s => typeof s === 'string' ? [s, ''] : s);
    const wd = segs.map(([s, k]) => { ox.font = segFont(k, size); ox.letterSpacing = k === 'ar' ? '0px' : '-0.6px'; return ox.measureText(s).width; });
    let x = o.center ? W / 2 - wd.reduce((p, q) => p + q, 0) / 2 : 30;
    segs.forEach(([s, k], n) => { txt(s, x, y0 + li * lh, { font: segFont(k, size), col: k ? GOLD : WHITE, a, blur, ls: k === 'ar' ? '0px' : '-0.6px' }); x += wd[n]; }); });
}
function counter(num, a, y = 1000) { if (a <= 0) return; label('Halaman', W / 2, y - 58, a * .8, GREY, 'center', 9); ox.font = `bold 66px ${SANS}`; ox.letterSpacing = '-2px'; const w = ox.measureText(String(num)).width; txt(String(num), W / 2 - 18, y, { font: `bold 66px ${SANS}`, col: WHITE, al: 'center', a, ls: '-2px' }); txt('/604', W / 2 - 18 + w / 2 + 4, y, { font: `600 19px ${SANS}`, col: GREY, a }); }
function glassCard(x, y, w, lab, q, a) { if (a <= 0) return; const h = 46 + q.length * 25 + 18; ox.save(); ox.globalAlpha = a; ox.fillStyle = 'rgba(20,18,14,.66)'; ox.strokeStyle = 'rgba(255,255,255,.12)'; ox.beginPath(); ox.roundRect(x, y, w, h, 14); ox.fill(); ox.stroke(); ox.restore(); label(lab, x + 20, y + 28, a, GOLD2, 'left', 9); q.forEach((l, i) => txt(l, x + 20, y + 58 + i * 25, { font: `500 19px ${SANS}`, a })); }
function pointCard(p, t) {
  const a = win(t, p.t + .7, p.until, .45, .35); if (a <= 0) return;
  { const g = ox.createLinearGradient(0, 780, 0, 1280); g.addColorStop(0, 'rgba(4,4,4,0)'); g.addColorStop(.35, `rgba(4,4,4,${.72 * a})`); g.addColorStop(1, `rgba(4,4,4,${.9 * a})`); ox.fillStyle = g; ox.fillRect(0, 780, W, 500); } const dy = 14 * (1 - ss(p.t + .7, p.t + 1.2, t)), x = 30, y = 900 + dy;
  label(p.kicker || 'Poin', x, y, a, GOLD, 'left', 11);
  const g = ox.createLinearGradient(0, y + 10, 0, y + 130); g.addColorStop(0, '#FFE7A8'); g.addColorStop(.6, '#E4B85E'); g.addColorStop(1, '#9C7330');
  txt(p.no, x - 4, y + 118, { font: `900 120px ${SANS}`, col: g, a, ls: '-5px' });
  ox.save(); ox.globalAlpha = a; ox.fillStyle = GOLD; ox.fillRect(x, y + 140, 46 * ss(p.t + .9, p.t + 1.4, t), 3); ox.restore();
  (p.title || []).forEach((l, i) => txt(l, x, y + 186 + i * 40, { font: `bold 34px ${SANS}`, a, ls: '-0.8px' }));
  if (p.sub) txt(p.sub, x, y + 196 + (p.title || []).length * 40, { font: `500 22px ${SANS}`, col: GOLD2, a });
}
function bloom(t) { let a = 0, k = 0; for (const p of BLOOMS) { a = Math.max(a, win(t, p - .5, p + .55, .5, .55)); k = Math.max(k, 1 - Math.abs(t - p) / .5); } if (a <= 0) return; const g = ox.createRadialGradient(W / 2, H * .45, 10, W / 2, H * .45, 900); g.addColorStop(0, `rgba(255,246,222,${a})`); g.addColorStop(.4, `rgba(251,237,204,${a * (.6 + .4 * k)})`); g.addColorStop(1, `rgba(214,170,90,${a * k * .9})`); ox.fillStyle = g; ox.fillRect(0, 0, W, H); }
function subFollow(t) {
  const a = win(t, .2, 3.5, .3, .35); if (a <= 0) return; const x = 150, y = 1100 + 14 * (1 - ss(.2, .5, t)), w = 420, h = 74;
  ox.save(); ox.globalAlpha = a; ox.fillStyle = '#fff'; ox.shadowColor = 'rgba(0,0,0,.4)'; ox.shadowBlur = 20; ox.beginPath(); ox.roundRect(x, y, w, h, 16); ox.fill(); ox.shadowBlur = 0; avatar(x + 38, y + 37, 25); ox.globalAlpha = a;
  ox.fillStyle = '#111'; ox.font = `bold 17px ${SANS}`; ox.fillText('alurziyadahku', x + 72, y + 32); ox.fillStyle = '#777'; ox.font = `500 12px ${SANS}`; ox.fillText('Kajian Al-Qur\'an', x + 72, y + 52);
  const s1 = t > 1.25, s2 = t > 2.25;
  const btn = (bx_, txt_, on, pulse) => { ox.fillStyle = on ? '#E8E4DC' : '#1b1712'; ox.beginPath(); ox.roundRect(bx_, y + 20, 92, 34, 17); ox.fill(); ox.fillStyle = on ? '#3a3328' : '#fff'; ox.font = `600 13px ${SANS}`; ox.textAlign = 'center'; ox.fillText(txt_, bx_ + 46, y + 42); ox.textAlign = 'left'; if (pulse > 0) { ox.strokeStyle = `rgba(228,196,123,${pulse})`; ox.lineWidth = 2; ox.beginPath(); ox.roundRect(bx_ - 6 * (1 - pulse), y + 20 - 6 * (1 - pulse), 92 + 12 * (1 - pulse), 34 + 12 * (1 - pulse), 20); ox.stroke(); } };
  btn(x + 214, s1 ? 'Subscribed' : 'Subscribe', s1, s1 ? 1 - ss(1.25, 1.7, t) : 0); btn(x + 316, s2 ? 'Following' : 'Follow', s2, s2 ? 1 - ss(2.25, 2.7, t) : 0);
  const Pp = [[x + 430, y + 120, .3], [x + 262, y + 40, 1.15], [x + 262, y + 40, 1.6], [x + 362, y + 40, 2.15], [x + 362, y + 40, 3.5]];
  let cx = Pp[0][0], cy = Pp[0][1]; for (let i = 0; i < Pp.length - 1; i++) { const u = eio(clamp((t - Pp[i][2]) / (Pp[i + 1][2] - Pp[i][2]))); if (t >= Pp[i][2]) { cx = lerp(Pp[i][0], Pp[i + 1][0], u); cy = lerp(Pp[i][1], Pp[i + 1][1], u); } }
  const press = (Math.abs(t - 1.25) < .08 || Math.abs(t - 2.25) < .08) ? .85 : 1;
  ox.translate(cx, cy); ox.scale(press, press); ox.fillStyle = '#fff'; ox.strokeStyle = '#000'; ox.lineWidth = 1.5; ox.beginPath(); ox.moveTo(0, 0); ox.lineTo(0, 22); ox.lineTo(6, 17); ox.lineTo(10, 26); ox.lineTo(14, 24); ox.lineTo(10, 15); ox.lineTo(17, 15); ox.closePath(); ox.fill(); ox.stroke(); ox.restore();
}
function followCard(t) {
  if (!CFG.follow) return; const t0 = CFG.follow + .2, a = ss(t0, t0 + .5, t); if (a <= 0) return;
  ox.fillStyle = `rgba(3,3,3,${.55 * a})`; ox.fillRect(0, 0, W, H); const y = 470 + 20 * (1 - a);
  ox.save(); ox.globalAlpha = a; ox.fillStyle = 'rgba(20,18,14,.85)'; ox.strokeStyle = 'rgba(228,196,123,.35)'; ox.beginPath(); ox.roundRect(90, y, 540, 320, 22); ox.fill(); ox.stroke(); avatar(W / 2, y, 62); ox.restore();
  txt('Jangan lupa follow ya', W / 2, y + 104, { font: `bold 34px ${SANS}`, al: 'center', a, ls: '-0.6px' }); txt('@alurziyadahku', W / 2, y + 148, { font: `bold 30px ${SANS}`, al: 'center', col: GOLD, a, ls: '-0.4px' });
  ['Follow', 'Simpan', 'Kongsi'].forEach((s, i) => { const x = 140 + i * 152, on = i === 0; ox.save(); ox.globalAlpha = a * ss(t0 + .5 + i * .2, t0 + .9 + i * .2, t); ox.fillStyle = on ? GOLD : 'rgba(255,255,255,.08)'; ox.strokeStyle = 'rgba(228,196,123,.5)'; ox.beginPath(); ox.roundRect(x, y + 205, 136, 52, 26); ox.fill(); if (!on) ox.stroke(); ox.fillStyle = on ? '#16110a' : WHITE; ox.font = `bold 19px ${SANS}`; ox.textAlign = 'center'; ox.fillText(s, x + 68, y + 238); ox.restore(); });
}
function vignette() { const g = ox.createRadialGradient(W / 2, H / 2, 380, W / 2, H / 2, 900); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.6)'); ox.fillStyle = g; ox.fillRect(0, 0, W, H); }

function drawOverlay(t) {
  ox.clearRect(0, 0, W, H); vignette(); if (CLEAN) return;
  const mode = modeAt(t);
  if (mode === 'mushaf') {
    const sp = spreadAt(t), a = ayahAt(t);
    const shown = a && t > a.t + a.ft ? a.page : sp.num;
    counter(shown, a ? 1 - ss(a.t + a.ft + .3, a.t + a.ft + .9, t) * .85 : 1);
    if (a) { const la = win(t, a.t + a.ft + .4, a.until, .4, .3); if (a.label) label(a.label, 30, 190, la, GOLD, 'left', 10);
      if (a.trans) glassCard(30, 1040, 660, a.lab || 'Maksudnya', a.trans, win(t, a.t + a.ft + 1.0, a.until, .5, .3)); }
  }
  for (const p of POINTS) { pointCard(p, t); const tp = barTop[p.idx]; if (tp && ring.visible && t > p.t + .9 && t < p.until) { const [x, y, v] = proj(tp); const la = win(t, p.t + 1.0, p.until, .4, .3); if (v) { ox.save(); ox.globalAlpha = la; ox.fillStyle = 'rgba(14,12,10,.85)'; ox.strokeStyle = 'rgba(228,196,123,.6)'; ox.beginPath(); ox.roundRect(x - 26, y - 46, 52, 30, 7); ox.fill(); ox.stroke(); ox.restore(); txt(p.no, x, y - 25, { font: `bold 15px ${SANS}`, al: 'center', col: GOLD, a: la }); } } }
  for (const T of CFG.titles || []) drawTitle(T, t);
  for (const [t0, t1, s, x, y, col, al] of CFG.labels || []) label(s, x, y, win(t, t0, t1, .4, .3), col === 'g' ? GOLD : GREY, al || 'left', 10);
  for (const [t0, t1, lab, lines, y] of CFG.cards || []) glassCard(30, y || 1040, 660, lab, lines, win(t, t0, t1, .5, .3));
  subFollow(t); bloom(t); followCard(t);
}
window.renderFrame = (t) => { drawBg(t); update3D(t); drawOverlay(t); };
window.READY = true;
