const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea';
const TARGET_URL = 'https://vietdiscoverybymstrang.vercel.app/';

async function captureMapAndFooter() {
  const port = 9391;
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
          return reject(new Error('No debug tab found'));
        }

        const ws = new WebSocket(wsUrl);

        ws.onopen = () => {
          ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
          ws.send(JSON.stringify({
            id: 2,
            method: 'Emulation.setDeviceMetricsOverride',
            params: {
              width: 1440,
              height: 1200,
              deviceScaleFactor: 1.5,
              mobile: false
            }
          }));
        };

        ws.onmessage = async (event) => {
          const msg = JSON.parse(event.data);

          if (msg.id === 2) {
            setTimeout(() => {
              // Scroll to map section
              ws.send(JSON.stringify({
                id: 10,
                method: 'Runtime.evaluate',
                params: {
                  expression: `(() => {
                    const el = document.querySelector('[data-mode="learn"]') || document.querySelector('svg');
                    if (el) {
                      el.scrollIntoView({ behavior: 'instant', block: 'center' });
                    } else {
                      window.scrollTo(0, 650);
                    }
                  })()`
                }
              }));
            }, 3000);
          }

          if (msg.id === 10) {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 20,
                method: 'Page.captureScreenshot',
                params: { format: 'png' }
              }));
            }, 1000);
          }

          if (msg.id === 20) {
            const base64Data = msg.result?.data;
            if (base64Data) {
              const buffer = Buffer.from(base64Data, 'base64');
              const outPath = path.join(ARTIFACT_DIR, 'production_live_map_view.png');
              fs.writeFileSync(outPath, buffer);
              console.log(`[SUCCESS] Saved live map view to: ${outPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
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

captureMapAndFooter()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
