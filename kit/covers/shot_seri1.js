const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1920}});await p.goto('file:///home/claude/covers/seri_ep1.html?ep=01');await p.waitForTimeout(1000);
await p.screenshot({path:'/home/claude/covers/seri1_full.png'});await b.close();})();
