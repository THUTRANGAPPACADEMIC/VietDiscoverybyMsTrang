const { spawn } = require('child_process');
const fs = require('fs');

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function captureViews() {
  const port = 9228;
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    'http://localhost:5173/'
  ]);

  await sleep(3500);

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await listRes.json();
    const appTab = tabs.find(t => t.url && t.url.includes('localhost'));
    const wsUrl = appTab?.webSocketDebuggerUrl;

    if (!wsUrl) {
      edge.kill();
      throw new Error('No debug tab found');
    }

    const ws = new WebSocket(wsUrl);

    let msgId = 1;
    const send = (method, params = {}) => {
      return new Promise((resolve) => {
        const id = msgId++;
        const handler = (event) => {
          const res = JSON.parse(event.data);
          if (res.id === id) {
            ws.removeEventListener('message', handler);
            resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    };

    await new Promise(r => { ws.onopen = r; });

    // Set Desktop metrics 1440x950
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 950,
      deviceScaleFactor: 2,
      mobile: false
    });

    await sleep(2500);

    // 1. Capture Main Explore Dashboard (Image 2)
    console.log('Capturing View 1: Main Explore Dashboard (matching Image 2)...');
    const ss1 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\view1_explore_dashboard.png', Buffer.from(ss1.data, 'base64'));
    console.log('Saved view1_explore_dashboard.png');

    // 2. Click Unit 3 & 4 button and scroll to it (Image 1)
    console.log('Switching to Unit 3 & 4 (Huế & Đà Nẵng)...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const unitBtn = buttons.find(b => b.innerText.includes('Unit 3 & 4'));
        if (unitBtn) {
          unitBtn.click();
          unitBtn.scrollIntoView({ behavior: 'instant', block: 'start' });
        }
      })()`
    });

    await sleep(1500);

    console.log('Capturing View 2: Unit Adventure Hub Unit 3 & 4 (matching Image 1)...');
    const ss2 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\view2_unit_adventure_hub.png', Buffer.from(ss2.data, 'base64'));
    console.log('Saved view2_unit_adventure_hub.png');

    // 3. Click "Bắt đầu" or "START ADVENTURE" to open DestinationExplorerModal (Image 3)
    console.log('Opening Destination Explorer Modal for Ha Long / Wonder...');
    await send('Runtime.evaluate', {
      expression: `(() => {
        window.scrollTo(0, 0);
        const buttons = Array.from(document.querySelectorAll('button'));
        const startBtn = buttons.find(b => b.innerText.includes('START ADVENTURE') || b.innerText.includes('Bắt đầu'));
        if (startBtn) startBtn.click();
      })()`
    });

    await sleep(2000);

    console.log('Capturing View 3: Destination Explorer Modal (matching Image 3)...');
    const ss3 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\view3_destination_explorer_modal.png', Buffer.from(ss3.data, 'base64'));
    console.log('Saved view3_destination_explorer_modal.png');

    // 4. Capture Mobile 375x812
    console.log('Capturing View 4: Mobile iPhone 375x812...');
    // Close modal first
    await send('Runtime.evaluate', {
      expression: `(() => {
        const closeBtn = document.querySelector('button[title="Đóng"]');
        if (closeBtn) closeBtn.click();
        window.scrollTo(0, 0);
      })()`
    });
    await sleep(800);

    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true
    });
    await sleep(1500);

    const ss4 = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('C:\\Users\\TRANGTRAN\\.gemini\\antigravity\\brain\\3a7ec9ed-c8e1-48d6-938c-3c985692daea\\view4_mobile_375.png', Buffer.from(ss4.data, 'base64'));
    console.log('Saved view4_mobile_375.png');

    ws.close();
    edge.kill();
    console.log('All 4 views captured successfully!');
  } catch (err) {
    edge.kill();
    console.error('Capture error:', err);
  }
}

captureViews();
