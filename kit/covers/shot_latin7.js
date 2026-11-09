const {chromium}=require('playwright');
const E=[['07','RAHASIA','HAMDALAH.']];
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
for(const [e,a,c] of E){await p.goto(`file:///home/claude/covers/seri_latin.html?ep=${e}&l1=${encodeURIComponent(a)}&l2=${encodeURIComponent(c)}`);await p.waitForTimeout(900);await p.screenshot({path:`/home/claude/covers/latin_${e}.png`});}
await b.close();})();
