const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea';
const TARGET_URL = 'https://vietdiscoverybymstrang.vercel.app/';

async function verifyLiveProduction() {
  console.log(`[VERIFY] Connecting to live production URL: ${TARGET_URL}...`);
  const port = 9390;
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    TARGET_URL
  ]);

  return new Promise((resolve, reject) => {
    let closed = false;
    const cleanup = () => {
      if (!closed) {
        closed = true;
        try { edge.kill(); } catch (e) {}
      }
    };

    setTimeout(async () => {
      try {
        const listRes = await fetch(`http://127.0.0.1:${port}/json`);
        const tabs = await listRes.json();
        const appTab = tabs.find(t => t.url && t.url.includes('vietdiscoverybymstrang.vercel.app'));
        const wsUrl = appTab?.webSocketDebuggerUrl;

        if (!wsUrl) {
          cleanup();
          return reject(new Error('No debug tab found for live site'));
        }

        const ws = new WebSocket(wsUrl);
        const consoleMessages = [];

        ws.onopen = () => {
          // Enable Runtime & Page domains
          ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
          ws.send(JSON.stringify({ id: 2, method: 'Page.enable' }));
          ws.send(JSON.stringify({
            id: 3,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width: 1440,
              height: 1080,
              deviceScaleFactor: 1.5,
              mobile: false
            }
          }));
        };

        ws.onmessage = async (event) => {
          const msg = JSON.parse(event.data);
          
          if (msg.method === 'Runtime.consoleAPICalled') {
            consoleMessages.push(msg.params.args.map(a => a.value).join(' '));
          }

          if (msg.id === 3) {
            // Give the app 4 seconds to mount React components & load SVGs
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 10,
                method: 'Runtime.evaluate',
                params: {
                  expression: `(() => {
                    const title = document.title;
                    const heroText = document.body.innerText;
                    const svgPaths = document.querySelectorAll('svg path').length;
                    const hasBrand = heroText.includes('VietDiscovery') && heroText.includes('Ms. Trang');
                    const hasAdventure = heroText.includes('The Magical Adventure');
                    const has34 = heroText.includes('34') || heroText.includes('Bản đồ');
                    const province34Nodes = document.querySelectorAll('[data-province-id]').length;
                    return {
                      title,
                      hasBrand,
                      hasAdventure,
                      has34,
                      svgPathsCount: svgPaths,
                      province34Nodes,
                      bodySnippet: heroText.substring(0, 300)
                    };
                  })()`,
                  returnByValue: true
                }
              }));
            }, 4000);
          }

          if (msg.id === 10) {
            console.log('[VERIFY] Evaluation result from live production:');
            console.log(JSON.stringify(msg.result?.result?.value, null, 2));

            // Now capture a full screenshot of the live site
            ws.send(JSON.stringify({
              id: 20,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                captureBeyondViewport: false
              }
            }));
          }

          if (msg.id === 20) {
            const base64Data = msg.result?.data;
            if (base64Data) {
              const buffer = Buffer.from(base64Data, 'base64');
              const outPath = path.join(ARTIFACT_DIR, 'production_live_vietdiscovery_verified.png');
              fs.writeFileSync(outPath, buffer);
              console.log(`[SUCCESS] Saved verified live production screenshot to: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
            }
            cleanup();
            resolve({ success: true });
          }
        };

        ws.onerror = (err) => {
          cleanup();
          reject(err);
        };

      } catch (err) {
        cleanup();
        reject(err);
      }
    }, 3000);
  });
}

verifyLiveProduction()
  .then(() => {
    console.log('[ALL DONE] Production deployment verification complete!');
    process.exit(0);
  })
  .catch(err => {
    console.error('[ERROR]', err);
    process.exit(1);
  });
