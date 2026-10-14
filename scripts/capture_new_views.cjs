const { spawn } = require('child_process');
const fs = require('fs');

async function captureScreen(evalCode, filename, port = 9235) {
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
              width: 1280,
              height: 1000,
              deviceScaleFactor: 1.5,
              mobile: false
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
              }, 4000);
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
            setTimeout(resolve, 1000);
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

  console.log('1. Capturing Working 34 Provinces Map...');
  await captureScreen(
    `window.scrollTo({ top: 220, behavior: 'instant' });`,
    `${artifactDir}/view_34_provinces_map.png`,
    9231
  );

  console.log('2. Capturing Working Audio Explorer (English First + 3D Mascot)...');
  await captureScreen(
    `
    // Click on Games tab / Audio Explorer
    const btns = Array.from(document.querySelectorAll('button'));
    const gamesBtn = btns.find(b => b.textContent && (b.textContent.includes('Đấu trường') || b.textContent.includes('Games')));
    if (gamesBtn) gamesBtn.click();
    setTimeout(() => {
      const audioTabBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Audio Explorer'));
      if (audioTabBtn) audioTabBtn.click();
      window.scrollTo({ top: 180, behavior: 'instant' });
    }, 600);
    `,
    `${artifactDir}/view_audio_explorer_working.png`,
    9232
  );

  console.log('All screenshots captured successfully!');
}

run().catch(console.error);
