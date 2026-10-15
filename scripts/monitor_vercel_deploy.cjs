async function checkLiveDeploy() {
  const url = 'https://vietdiscoverybymstrang.vercel.app/?t=' + Date.now();
  try {
    const res = await fetch(url, { headers: { 'Cache-Control': 'no-cache' } });
    const text = await res.text();
    const scriptMatch = text.match(/src=["'](\/assets\/index-[^"']+\.js)["']/);
    const cssMatch = text.match(/href=["'](\/assets\/index-[^"']+\.css)["']/);
    const script = scriptMatch ? scriptMatch[1] : null;
    const css = cssMatch ? cssMatch[1] : null;
    console.log(`[${new Date().toLocaleTimeString()}] Live Script: ${script} | CSS: ${css}`);
    return { script, css };
  } catch (err) {
    console.error('Fetch error:', err.message);
    return null;
  }
}

async function loop() {
  console.log('Polling Vercel deployment status...');
  // The old bundle was /assets/index-BV6bdl4z.js
  const oldScript = '/assets/index-BV6bdl4z.js';
  for (let i = 0; i < 20; i++) {
    const res = await checkLiveDeploy();
    if (res && res.script && res.script !== oldScript) {
      console.log('>>> NEW DEPLOYMENT DETECTED! Bundle updated to:', res.script);
      process.exit(0);
    }
    await new Promise(r => setTimeout(r, 8000));
  }
  console.log('Timeout waiting for deployment');
  process.exit(1);
}

loop();
