// node cap_shamela.js "<kata kunci arab>" <prefix>  → <prefix>_home.png (kotak cari kosong) + <prefix>_res.png (hasil asli)
const {chromium}=require('playwright');
(async()=>{const [q,pre]=process.argv.slice(2);
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',proxy:{server:process.env.HTTPS_PROXY}});
const p=await b.newPage({viewport:{width:1500,height:860}});
await p.goto('https://shamela.ws/',{waitUntil:'networkidle',timeout:60000}).catch(()=>{});await p.waitForTimeout(1200);await p.screenshot({path:pre+'_home.png'});
await p.goto('https://shamela.ws/search?q='+encodeURIComponent(q),{waitUntil:'networkidle',timeout:60000}).catch(()=>{});await p.waitForTimeout(2000);await p.screenshot({path:pre+'_res.png'});
console.log('ok',p.url());await b.close();})();
