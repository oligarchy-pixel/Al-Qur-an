import json
Q=json.load(open('node_modules/quran-json/dist/quran.json'))
S=json.load(open('pub/surah114.json'))['surah']
start=[s['halaman_mulai'] for s in S]
def verses_of_page(p):
    # surahs overlapping page p
    out=[]
    for i,s in enumerate(S):
        st=start[i]; en=(start[i+1] if i<113 else 605)
        en_incl = en if (i<113 and start[i+1]==en and en==st) else en-1
        # surah spans pages st..(next start) (next surah may start mid-page)
        last = start[i+1] if i<113 else 604
        if not (st<=p<=last): continue
        vs=Q[i]['verses']; L=[len(v['text']) for v in vs]; tot=sum(L)
        span=max(1,last-st+ (0 if i<113 and start[i+1]>st else 1))
        if last==st: sel=vs
        else:
            a=(p-st)/ (last-st+0.0001*0) if last>st else 0
            b=(p-st+1)/(last-st)
            if p==last: a=(last-st)/(last-st); 
            c=0; sel=[]
            for v,l in zip(vs,L):
                mid=(c+l/2)/tot; c+=l
                fa=(p-st)/(last-st+ (1 if i==113 else 0.6)); fb=(p-st+1)/(last-st+(1 if i==113 else 0.6))
                if fa<=mid<fb: sel.append(v)
        if sel: out.append({'s':i+1,'name':Q[i]['name'],'head':sel[0]['id']==1,'v':[(x['id'],x['text']) for x in sel]})
    return out
def ov(p):
    if p==1: return [{'s':1,'name':Q[0]['name'],'head':True,'v':[(v['id'],v['text']) for v in Q[0]['verses']]}]
    if p==2: return [{'s':2,'name':Q[1]['name'],'head':True,'v':[(v['id'],v['text']) for v in Q[1]['verses'][:5]]}]
    if p==47: return [{'s':2,'name':Q[1]['name'],'head':False,'v':[(v['id'],v['text']) for v in Q[1]['verses'][274:281]]}]
    if p==48: return [{'s':2,'name':Q[1]['name'],'head':False,'v':[(v['id'],v['text']) for v in Q[1]['verses'][281:282]]}]
    if p==597: return [{'s':95,'name':Q[94]['name'],'head':True,'v':[(v['id'],v['text']) for v in Q[94]['verses']]},{'s':96,'name':Q[95]['name'],'head':True,'v':[(v['id'],v['text']) for v in Q[95]['verses'][:8]]}]
    if p==598: return [{'s':96,'name':Q[95]['name'],'head':False,'v':[(v['id'],v['text']) for v in Q[95]['verses'][8:]]},{'s':97,'name':Q[96]['name'],'head':True,'v':[(v['id'],v['text']) for v in Q[96]['verses']]}]
    return None
pages={}
for p in [1,2,165,166,459,460,597,598,529,530,229,230,47,48]:
    pages[p]=ov(p) or verses_of_page(p)
    print(p,[(b['s'],b['v'][0][0],b['v'][-1][0]) for b in pages[p]])
json.dump(pages,open('pub/pages.json','w'),ensure_ascii=False)
