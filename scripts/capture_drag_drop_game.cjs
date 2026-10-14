const { spawn } = require('child_process');
const fs = require('fs');

async function captureScreen({ evalCode, filename, port = 9240, width = 1280, height = 960, scale = 1.5, mobile = false }) {
  return new Promise((resolve, reject) => {
    const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
      '--headless=new',
      `--remote-debugging-port=${port}`,
      '--hide-scrollbars',
      'http://localhost:5173/'
    ]);

    setTimeout(async () => {
      try {
        const listRes = await fetch(`http://127.0.0.1:${port}/json`);
        const tabs = await listRes.json();
        const appTab = tabs.find(t => t.url && t.url.includes('localhost'));
        const wsUrl = appTab?.webSocketDebuggerUrl;

        if (!wsUrl) {
          edge.kill();
          return reject(new Error('No debug tab found'));
        }

        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width,
              height,
              deviceScaleFactor: scale,
              mobile
            }
          }));
        };

        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === 1) {
            if (evalCode) {
              setTimeout(() => {
                ws.send(JSON.stringify({
                  id: 2,
                  method: 'Runtime.evaluate',
                  params: { expression: evalCode }
                }));
              }, 2500);
            } else {
              setTimeout(() => {
                ws.send(JSON.stringify({
                  id: 3,
                  method: 'Page.captureScreenshot',
                  params: { format: 'png' }
                }));
              }, 3500);
            }
          } else if (msg.id === 2) {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 3,
                method: 'Page.captureScreenshot',
                params: { format: 'png' }
              }));
            }, 2500);
          } else if (msg.id === 3) {
            const buffer = Buffer.from(msg.result.data, 'base64');
            fs.writeFileSync(filename, buffer);
            console.log(`Saved screenshot ${filename} (${buffer.length} bytes)`);
            ws.close();
            edge.kill();
            setTimeout(resolve, 800);
          }
        };
      } catch (err) {
        edge.kill();
        reject(err);
      }
    }, 2000);
  });
}

async function run() {
  const artifactDir = 'C:/Users/TRANGTRAN/.gemini/antigravity/brain/3a7ec9ed-c8e1-48d6-938c-3c985692daea';

  console.log('1. Capturing Desktop Landmark Drag & Drop in Adventure Games Tab...');
  await captureScreen({
    width: 1280,
    height: 1020,
    scale: 1.5,
    port: 9241,
    evalCode: `
      // Navigate to Games tab
      const btns = Array.from(document.querySelectorAll('button'));
      const gamesBtn = btns.find(b => b.textContent && (b.textContent.includes('Đấu trường') || b.textContent.includes('Games')));
      if (gamesBtn) gamesBtn.click();

      setTimeout(() => {
        // Ensure Landmark Map Drop tab is active
        const mapDropBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Kéo thả Địa danh'));
        if (mapDropBtn) mapDropBtn.click();
        
        // Select first card to showcase active selection state
        setTimeout(() => {
          const firstCard = document.querySelector('[draggable="true"]');
          if (firstCard) firstCard.click();
          window.scrollTo({ top: 160, behavior: 'instant' });
        }, 500);
      }, 700);
    `,
    filename: `${artifactDir}/view_landmark_drag_drop_desktop.png`
  });

  console.log('2. Capturing Mobile (375px) Landmark Drag & Drop...');
  await captureScreen({
    width: 375,
    height: 812,
    scale: 2,
    mobile: true,
    port: 9242,
    evalCode: `
      const btns = Array.from(document.querySelectorAll('button'));
      const gamesBtn = btns.find(b => b.textContent && (b.textContent.includes('Đấu trường') || b.textContent.includes('Games')));
      if (gamesBtn) gamesBtn.click();

      setTimeout(() => {
        const mapDropBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Kéo thả'));
        if (mapDropBtn) mapDropBtn.click();
        window.scrollTo({ top: 120, behavior: 'instant' });
      }, 600);
    `,
    filename: `${artifactDir}/view_landmark_drag_drop_mobile.png`
  });

  console.log('3. Capturing Quick-Launch Modal from Explore Map Toolbar / Daily Quest...');
  await captureScreen({
    width: 1280,
    height: 980,
    scale: 1.5,
    port: 9243,
    evalCode: `
      // Click 'Kéo thả 3 Miền' button on the map toolbar
      const btns = Array.from(document.querySelectorAll('button'));
      const gameQuickBtn = btns.find(b => b.textContent && b.textContent.includes('Kéo thả 3 Miền'));
      if (gameQuickBtn) {
        gameQuickBtn.click();
      } else {
        const dailyBtn = btns.find(b => b.textContent && b.textContent.includes('Kéo thả'));
        if (dailyBtn) dailyBtn.click();
      }
    `,
    filename: `${artifactDir}/view_landmark_drag_drop_modal.png`
  });

  console.log('All Landmark Drag & Drop game screenshots captured successfully!');
}

run().catch(console.error);
