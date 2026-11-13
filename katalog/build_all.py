import json,re,os,sys
p=sys.argv[1]; s=open(p).read()
V=json.load(open('/home/claude/katalog/videos_all.json')); C=json.load(open('/home/claude/katalog/covers_all.json'))
R='https://github.com/oligarchy-pixel/Al-Qur-an/raw/arsip-video/'
for n,L in V.items():
    out=[]
    for lab,f in L:
        lp='/home/claude/vidrepo/'+f
        if not os.path.exists(lp): print('MISSING',f); continue
        out.append(dict(label=lab,url=R+f,mb=round(os.path.getsize(lp)/1048576)))
    V[n]=out
blob='const ALLV = '+json.dumps(V,ensure_ascii=False)+';\nconst ALLC = '+json.dumps(C,ensure_ascii=False)+';\n'
s=re.sub(r'const ALLV = .*?;\nconst ALLC = .*?;\n','',s,flags=re.S)
s=s.replace('const EP = ',blob+'const EP = ',1)
if 'id="dAll"' not in s:
    s=s.replace('''    </div>
  </div>
</div>
<div class="toast"''','''    </div>
    <section class="all" id="dAll" aria-label="Semua versi untuk diunduh"></section>
  </div>
</div>
<div class="toast"''',1)
    s=s.replace('.note{','''.all{margin-top:26px;border-top:2px solid var(--line);padding-top:18px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:24px}
@media (max-width:820px){.all{grid-template-columns:1fr}}
.all h3{font:400 30px/1 var(--display);margin:0 0 10px;letter-spacing:.02em}
.all h3 span{font:700 12px var(--mono);color:var(--soft);letter-spacing:.08em;margin-left:8px}
.rows{display:flex;flex-direction:column;gap:6px}
a.row{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:12px;align-items:center;text-decoration:none;color:var(--fg);background:var(--panel);border:2px solid var(--line);border-radius:10px;padding:9px 12px}
a.row:hover{border-color:var(--y)}
a.row:focus-visible{outline:3px solid var(--y);outline-offset:2px}
a.row .k{font:700 11px var(--mono);letter-spacing:.06em;color:var(--ink);background:var(--y);border-radius:5px;padding:3px 7px;white-space:nowrap}
a.row .k.v{background:var(--ok)}
a.row .t{font:600 14px/1.35 var(--body);overflow-wrap:anywhere;min-width:0}
a.row .z{font:700 12px var(--mono);color:var(--y);white-space:nowrap}
.note{''',1)
    s=s.replace("  setKind(kind);","""  const vs = ALLV[e.no] || [], cs = ALLC[e.no] || [];
  $('dAll').innerHTML = `<div><h3>Semua versi video<span>${vs.length} FILE</span></h3><div class="rows">${vs.length ? vs.map(v=>`<a class="row" href="${v.url}" target="_blank" rel="noopener"><span class="k v">VIDEO</span><span class="t">${v.label}</span><span class="z">⬇ ${v.mb} MB</span></a>`).join('') : '<p class="note">Belum ada video di arsip.</p>'}</div></div>
    <div><h3>Semua versi cover<span>${cs.length} FILE</span></h3><div class="rows">${cs.map(c=>`<a class="row" href="${c.url}" target="_blank" rel="noopener"><span class="k">${c.kind.toUpperCase()}</span><span class="t">${c.file}</span><span class="z">⬇ ${c.kb>=1024?(c.kb/1024).toFixed(1)+' MB':c.kb+' KB'}</span></a>`).join('')}</div></div>
    <p class="note" style="color:var(--soft);grid-column:1/-1">Semua file terbuka di tab baru lewat GitHub (harus sudah login GitHub), lalu tekan unduh.</p>`;
  setKind(kind);""",1)
s=s.replace('Klik salah satu episode untuk mengunduh videonya dan melihat','Klik salah satu episode untuk mengunduh semua versi video & cover, dan melihat')
open(p,'w').write(s); print('built')
