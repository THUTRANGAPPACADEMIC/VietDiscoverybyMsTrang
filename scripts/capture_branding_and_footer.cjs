const { spawn } = require('child_process');
const fs = require('fs');

async function captureScreen({ evalCode, filename, width = 1280, height = 900, port = 9240 }) {
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
              width: width,
              height: height,
              deviceScaleFactor: 1.5,
              mobile: width < 600
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

  console.log('1. Capturing Official Branding & Hero Desktop...');
  await captureScreen({
    filename: `${artifactDir}/hero_branding_and_map_desktop.png`,
    width: 1280,
    height: 950,
    evalCode: `window.scrollTo({ top: 0, behavior: 'instant' });`,
    port: 9241
  });

  console.log('2. Capturing Interactive Vietnam 34-Province Map...');
  await captureScreen({
    filename: `${artifactDir}/vietnam_map_full_vector.png`,
    width: 1280,
    height: 980,
    evalCode: `window.scrollTo({ top: 480, behavior: 'instant' });`,
    port: 9242
  });

  console.log('3. Capturing Magical 3D Adventure Footer...');
  await captureScreen({
    filename: `${artifactDir}/magical_adventure_footer_desktop.png`,
    width: 1280,
    height: 920,
    evalCode: `window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });`,
    port: 9243
  });

  console.log('4. Capturing Mobile Responsive (375px)...');
  await captureScreen({
    filename: `${artifactDir}/hero_branding_mobile_375.png`,
    width: 375,
    height: 812,
    evalCode: `window.scrollTo({ top: 0, behavior: 'instant' });`,
    port: 9244
  });

  console.log('All verification captures completed successfully!');
}

run().catch(console.error);
