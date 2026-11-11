const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
for(const ep of ['12'])for(const [v,w,h] of [['yt',1920,1080],['reel',1080,1920]]){const p=await b.newPage({viewport:{width:w,height:h}});
await p.goto(`file:///home/claude/covers/cover_ep.html?ep=${ep}&v=${v}`);await p.waitForTimeout(1200);
await p.screenshot({path:`/home/claude/covers/ep${ep}_${v}.png`});}
await b.close();})();
