const { spawn } = require('child_process');
const fs = require('fs');

async function captureScreen({ evalCode, filename, port = 9250, width = 1280, height = 980, scale = 1.5, mobile = false }) {
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

  console.log('1. Capturing Interactive Match + Feedback Banner in Landmark Drag & Drop...');
  await captureScreen({
    width: 1280,
    height: 1020,
    scale: 1.5,
    port: 9251,
    evalCode: `
      // Open modal or tab
      const quickBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Kéo thả 3 Miền'));
      if (quickBtn) quickBtn.click();

      setTimeout(() => {
        // Select One Pillar Pagoda card
        const cards = Array.from(document.querySelectorAll('[draggable="true"]'));
        if (cards[0]) cards[0].click(); // click One Pillar Pagoda

        setTimeout(() => {
          // Click North drop zone (first drop zone)
          const dropZones = Array.from(document.querySelectorAll('.cursor-pointer')).filter(el => el.textContent && el.textContent.includes('Northern Vietnam'));
          if (dropZones[0]) dropZones[0].click();

          // Now select Ha Long Bay card
          setTimeout(() => {
            const remainingCards = Array.from(document.querySelectorAll('[draggable="true"]'));
            if (remainingCards[0]) remainingCards[0].click(); // click Ha Long Bay
          }, 600);
        }, 600);
      }, 700);
    `,
    filename: `${artifactDir}/view_landmark_drag_drop_interactive_success.png`
  });

  console.log('2. Capturing Mobile Responsive Modal View (375x812)...');
  await captureScreen({
    width: 375,
    height: 812,
    scale: 2,
    mobile: true,
    port: 9252,
    evalCode: `
      // Click Kéo thả ngay on the daily quest or quick button
      const dailyBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Kéo thả'));
      if (dailyBtn) dailyBtn.click();
    `,
    filename: `${artifactDir}/view_landmark_drag_drop_mobile_responsive.png`
  });

  console.log('Finished capturing interaction screenshots!');
}

run().catch(console.error);
