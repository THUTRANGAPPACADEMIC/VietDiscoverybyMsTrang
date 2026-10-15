const { spawn } = require('child_process');
const fs = require('fs');

async function captureScreen({ evalCode, filename, width = 1280, height = 980, port = 9280, waitMs = 2500 }) {
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
              }, 2000);
            } else {
              setTimeout(() => {
                ws.send(JSON.stringify({
                  id: 3,
                  method: 'Page.captureScreenshot',
                  params: { format: 'png' }
                }));
              }, waitMs);
            }
          } else if (msg.id === 2) {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 3,
                method: 'Page.captureScreenshot',
                params: { format: 'png' }
              }));
            }, waitMs);
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

  console.log('1. Capturing Ho Chi Minh City selection (Merged HCMC + Binh Duong + Ba Ria-Vung Tau)...');
  await captureScreen({
    filename: `${artifactDir}/vietnam_34_map_hcm_highlight.png`,
    width: 1280,
    height: 980,
    evalCode: `
      const mapHeading = Array.from(document.querySelectorAll('h2, h3')).find(el => el.textContent && el.textContent.includes('34 Provinces'));
      if (mapHeading) {
        mapHeading.scrollIntoView({ behavior: 'instant', block: 'start' });
      }

      // Switch to Discover mode
      const discoverBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Discover & Hover'));
      if (discoverBtn) discoverBtn.click();

      // Click on HCMC polygon
      setTimeout(() => {
        const hcmPoly = document.getElementById('vn-34-hcm') || document.querySelector('[data-code="HCM"]');
        if (hcmPoly) {
          hcmPoly.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
      }, 500);
    `,
    waitMs: 2500,
    port: 9281
  });

  console.log('2. Capturing Mode 1: Learn the Map (All 34 Names & Labels)...');
  await captureScreen({
    filename: `${artifactDir}/vietnam_34_map_mode1_learn.png`,
    width: 1280,
    height: 980,
    evalCode: `
      const mapHeading = Array.from(document.querySelectorAll('h2, h3')).find(el => el.textContent && el.textContent.includes('34 Provinces'));
      if (mapHeading) {
        mapHeading.scrollIntoView({ behavior: 'instant', block: 'start' });
      }

      const learnBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Learn the Map'));
      if (learnBtn) learnBtn.click();
    `,
    waitMs: 2000,
    port: 9282
  });

  console.log('3. Capturing Mode 3: Drag & Drop Game (Genially Style)...');
  await captureScreen({
    filename: `${artifactDir}/vietnam_34_map_mode3_dragdrop.png`,
    width: 1280,
    height: 980,
    evalCode: `
      const mapHeading = Array.from(document.querySelectorAll('h2, h3')).find(el => el.textContent && el.textContent.includes('34 Provinces'));
      if (mapHeading) {
        mapHeading.scrollIntoView({ behavior: 'instant', block: 'start' });
      }

      const dragBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Drag & Drop Game'));
      if (dragBtn) dragBtn.click();
    `,
    waitMs: 2000,
    port: 9283
  });

  console.log('4. Capturing HCMC Merged Territory Hover (without modal backdrop)...');
  await captureScreen({
    filename: `${artifactDir}/vietnam_34_map_hcm_merged_hover.png`,
    width: 1280,
    height: 980,
    evalCode: `
      const mapHeading = Array.from(document.querySelectorAll('h2, h3')).find(el => el.textContent && el.textContent.includes('34 Provinces'));
      if (mapHeading) {
        mapHeading.scrollIntoView({ behavior: 'instant', block: 'start' });
      }

      const discoverBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Discover & Hover'));
      if (discoverBtn) discoverBtn.click();

      setTimeout(() => {
        const hcmPoly = document.getElementById('vn-34-hcm');
        if (hcmPoly) {
          hcmPoly.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
        }
      }, 500);
    `,
    waitMs: 2000,
    port: 9284
  });

  console.log('All verification captures completed!');
}

run().catch(console.error);
