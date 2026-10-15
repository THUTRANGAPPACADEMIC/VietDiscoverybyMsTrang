const https = require('https');

function fetchLive() {
  https.get('https://vietdiscoverybymstrang.vercel.app/', (res) => {
    console.log('HTTP Status:', res.statusCode);
    let html = '';
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
      const match = html.match(/\/assets\/index-[a-zA-Z0-9_\-]+\.js/);
      if (match) {
        console.log('Current Live Bundle:', match[0]);
        // Also fetch bundle to check if commit bf7d925 or CLASSROOM_OPTIONS is present
        const bundleUrl = 'https://vietdiscoverybymstrang.vercel.app' + match[0];
        https.get(bundleUrl, (bRes) => {
          let bData = '';
          bRes.on('data', c => bData += c);
          bRes.on('end', () => {
            const hasCleanOptions = bData.includes('Class 5.6') && bData.includes('Class 2.2');
            const hasOldDesc = bData.includes('Young Leaders (Grade 5)');
            console.log('Bundle has clean options (Class 5.6, Class 2.2):', hasCleanOptions);
            console.log('Bundle has old "Young Leaders (Grade 5)" in dropdown:', hasOldDesc);
          });
        });
      } else {
        console.log('No bundle match found in HTML');
      }
    });
  }).on('error', err => {
    console.error('Fetch error:', err.message);
  });
}

fetchLive();
