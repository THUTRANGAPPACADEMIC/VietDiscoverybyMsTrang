const https = require('https');

https.get('https://vietdiscoverybymstrang.vercel.app/assets/index-BLk_3CT7.js', (res) => {
  console.log('HTTP Status:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Bundle size:', (data.length / 1024).toFixed(2), 'KB');
    
    // Check clean dropdown labels
    const hasClass22 = data.includes('"Class 2.2"');
    const hasClass41 = data.includes('"Class 4.1"');
    const hasClass46 = data.includes('"Class 4.6"');
    const hasClass52 = data.includes('"Class 5.2"');
    const hasClass56 = data.includes('"Class 5.6"');
    console.log('Clean options in bundle:');
    console.log('  Class 2.2:', hasClass22);
    console.log('  Class 4.1:', hasClass41);
    console.log('  Class 4.6:', hasClass46);
    console.log('  Class 5.2:', hasClass52);
    console.log('  Class 5.6:', hasClass56);

    // Check student record
    const hasKhoi56 = data.includes('VD56017');
    const hasKhoiId = data.includes('168');
    console.log('Verified student record in bundle:');
    console.log('  VD56017 present:', hasKhoi56);
    console.log('  ID 168 present:', hasKhoiId);
  });
}).on('error', err => {
  console.error('Error fetching bundle:', err.message);
});
