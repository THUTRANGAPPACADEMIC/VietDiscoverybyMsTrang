const { spawn } = require('child_process');
const fs = require('fs');

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9224',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9224/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
    
    ws.onopen = () => {
      const base64Img = fs.readFileSync('public/assets/cute/master_mockup_unit_adventure.png').toString('base64');
      
      const script = `
        (async () => {
          const img = new Image();
          img.src = 'data:image/png;base64,${base64Img}';
          await new Promise(r => img.onload = r);
          
          // 1. Crop clean bottom flowers (y=443 to 477, height 34)
          const flowerCanvas = document.createElement('canvas');
          flowerCanvas.width = 1024;
          flowerCanvas.height = 34;
          const fctx = flowerCanvas.getContext('2d');
          fctx.drawImage(img, 0, 443, 1024, 34, 0, 0, 1024, 34);
          const flowersData = flowerCanvas.toDataURL('image/png').split(',')[1];
          
          // 2. Crop Captain Trang pointing (x=0, y=365, w=90, h=112)
          const charCanvas = document.createElement('canvas');
          charCanvas.width = 90;
          charCanvas.height = 112;
          const cctx = charCanvas.getContext('2d');
          cctx.drawImage(img, 0, 365, 90, 112, 0, 0, 90, 112);
          
          // Flood fill transparent from corners
          const imgData = cctx.getImageData(0, 0, 90, 112);
          const data = imgData.data;
          
          // Clear white card background in upper right
          for (let y = 0; y < 112; y++) {
            for (let x = 0; x < 90; x++) {
              const idx = (y * 90 + x) * 4;
              const r = data[idx];
              const g = data[idx+1];
              const b = data[idx+2];
              
              // Top-right card area: card background is white/light-cyan
              if (x > 45 && y < 45) {
                if (r > 190 && g > 215 && b > 225) {
                  data[idx+3] = 0;
                }
              }
              // Card background to the right of pointing finger
              if (x > 68 && y < 70) {
                if (r > 190 && g > 215 && b > 225) {
                  data[idx+3] = 0;
                }
              }
              // Dark green foliage to the left of backpack / hat
              if (x < 18 && y < 80) {
                if (g > r && g > b && g < 150) {
                  data[idx+3] = 0;
                }
              }
              // Grass at bottom left corner
              if (x < 14 && y > 80) {
                if (g > 80 && g > r && b < 100) {
                  data[idx+3] = 0;
                }
              }
            }
          }
          cctx.putImageData(imgData, 0, 0);
          const charData = charCanvas.toDataURL('image/png').split(',')[1];

          // 3. Clean top panorama scenery without text:
          // Crop clean mountain backdrop from x=450, y=0, w=200, h=75
          const skyCanvas = document.createElement('canvas');
          skyCanvas.width = 240;
          skyCanvas.height = 75;
          const sctx = skyCanvas.getContext('2d');
          sctx.drawImage(img, 440, 0, 240, 75, 0, 0, 240, 75);
          const skyData = skyCanvas.toDataURL('image/png').split(',')[1];
          
          return { flowersData, charData, skyData };
        })()
      `;
      
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: script, awaitPromise: true, returnByValue: true }
      }));
    };
    
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 1 && msg.result?.result?.value) {
        const { flowersData, charData, skyData } = msg.result.result.value;
        fs.writeFileSync('public/assets/cute/bottom_flowers.png', Buffer.from(flowersData, 'base64'));
        fs.writeFileSync('public/assets/cute/captain_trang_pointing.png', Buffer.from(charData, 'base64'));
        fs.writeFileSync('public/assets/cute/header_scenic_center.png', Buffer.from(skyData, 'base64'));
        console.log('Successfully saved clean flowers, captain, and sky!');
        ws.close();
        edge.kill();
        process.exit(0);
      }
    };
  } catch(e) {
    console.error(e);
    edge.kill();
    process.exit(1);
  }
}, 2500);
