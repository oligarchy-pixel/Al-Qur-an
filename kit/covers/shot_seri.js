const {chromium}=require('playwright');
const E=[['01',"Hurmatul Qur'an",'حُرْمَةُ الْقُرْآنِ'],['02',"16 Adab Al-Qur'an",'آدَابُ التِّلَاوَةِ'],['03',"Turunnya Al-Qur'an",'نُزُولُ الْقُرْآنِ'],['04','Rahasia Bismillah','بِسْمِ اللَّهِ'],['05','Hukum Bismillah','أَحْكَامُ الْبَسْمَلَةِ']];
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1920}});
for(const [e,t,a] of E){await p.goto(`file:///home/claude/covers/seri.html?ep=${e}&t=${encodeURIComponent(t)}&ar=${encodeURIComponent(a)}`);await p.waitForTimeout(900);await p.screenshot({path:`/home/claude/covers/seri_${e}.png`});}
await b.close();})();
