const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--allow-file-access-from-files']});
const p=await b.newPage({viewport:{width:1080,height:1350}});await p.goto('file:///home/claude/covers/air.html');await p.waitForTimeout(1500);
await p.screenshot({path:'/home/claude/covers/air_ig.png'});await b.close();})();
