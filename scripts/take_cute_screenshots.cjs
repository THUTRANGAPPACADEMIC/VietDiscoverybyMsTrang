const { spawn } = require('child_process');
const fs = require('fs');

async function capture(width, height, isMobile, filename, port = 9225) {
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
              deviceScaleFactor: 2,
              mobile: isMobile
            }
          }));
        };

        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === 1) {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 2,
                method: 'Page.captureScreenshot',
                params: { format: 'png' }
              }));
            }, 4000);
          } else if (msg.id === 2) {
            const buffer = Buffer.from(msg.result.data, 'base64');
            fs.writeFileSync(filename, buffer);
            console.log(`Saved ${filename}, size: ${buffer.length} bytes`);
            ws.close();
            edge.kill();
            setTimeout(resolve, 1500);
          }
        };
      } catch (err) {
        edge.kill();
        reject(err);
      }
    }, 3500);
  });
}

async function runAll() {
  try {
    console.log('Capturing Desktop 1440x950 on port 9225...');
    await capture(1440, 950, false, 'C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\cute_redesign_desktop.png', 9225);
    
    console.log('Capturing Mobile 375x812 on port 9226...');
    await capture(375, 812, true, 'C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\cute_redesign_mobile_375.png', 9226);

    console.log('Capturing Mobile 320x650 on port 9227...');
    await capture(320, 650, true, 'C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\cute_redesign_mobile_320.png', 9227);
    
    console.log('All screenshots captured successfully!');
  } catch (e) {
    console.error('Capture failed:', e);
  }
}

runAll();
