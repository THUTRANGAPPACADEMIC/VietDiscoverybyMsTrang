const https = require('https');

let attempts = 0;
const maxAttempts = 15;

function check() {
  attempts++;
  console.log(`[Attempt ${attempts}/${maxAttempts}] Checking live Vercel deployment...`);
  https.get('https://vietdiscoverybymstrang.vercel.app/', (res) => {
    let html = '';
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
      const match = html.match(/\/assets\/index-([a-zA-Z0-9_\-]+)\.js/);
      if (match) {
        const bundleHash = match[1];
        console.log(`  Found bundle: index-${bundleHash}.js`);
        if (bundleHash !== 'D42Os8q5') {
          console.log(`🎉 NEW DEPLOYMENT DETECTED! Bundle index-${bundleHash}.js is now live!`);
          process.exit(0);
        } else {
          console.log(`  Old bundle index-D42Os8q5.js still serving. Waiting for Vercel build...`);
        }
      }
      if (attempts >= maxAttempts) {
        console.log('Max polling attempts reached.');
        process.exit(0);
      }
      setTimeout(check, 12000);
    });
  }).on('error', err => {
    console.error('Error fetching Vercel:', err.message);
    if (attempts >= maxAttempts) process.exit(1);
    setTimeout(check, 12000);
  });
}

check();
