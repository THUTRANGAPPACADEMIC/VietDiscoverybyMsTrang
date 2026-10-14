const { spawn } = require('child_process');
const fs = require('fs');

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--hide-scrollbars',
  'http://localhost:5173/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    const appTab = tabs.find(t => t.url && t.url.includes('localhost'));
    const wsUrl = appTab?.webSocketDebuggerUrl;
    
    if (wsUrl) {
      const ws = new WebSocket(wsUrl);
      
      ws.onopen = () => {
        // Set mobile device metrics override (iPhone 375px)
        ws.send(JSON.stringify({
          id: 1,
          method: 'Emulation.setDeviceMetricsOverride',
          params: {
            width: 375,
            height: 1000,
            deviceScaleFactor: 2,
            mobile: true
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
          }, 1500);
        } else if (msg.id === 2) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('D:\\01VietDiscoverybyMsTrang\\mobile_375_emulated.png', buffer);
          console.log('Saved mobile_375_emulated.png, bytes:', buffer.length);
          ws.close();
          edge.kill();
        }
      };
    } else {
      edge.kill();
    }
  } catch (e) {
    console.error('Error:', e.message);
    edge.kill();
  }
}, 3000);
