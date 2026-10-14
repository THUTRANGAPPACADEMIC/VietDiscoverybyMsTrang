const { spawn } = require('child_process');

const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=320,1200',
  'http://localhost:5173/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    const appTab = tabs.find(t => t.url && t.url.includes('localhost'));
    console.log('App tab found:', appTab?.url);
    const wsUrl = appTab?.webSocketDebuggerUrl;
    
    if (wsUrl) {
      const ws = new WebSocket(wsUrl);
      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: `(() => {
              const elements = Array.from(document.querySelectorAll('*'));
              const overflowing = [];
              for (const el of elements) {
                const rect = el.getBoundingClientRect();
                if (rect.right > 325) {
                  overflowing.push({
                    tag: el.tagName,
                    class: (typeof el.className === 'string' ? el.className : '').slice(0, 50),
                    right: Math.round(rect.right),
                    width: Math.round(rect.width),
                    text: (el.innerText || '').slice(0, 25).trim()
                  });
                }
              }
              return JSON.stringify({
                bodyScrollWidth: document.body.scrollWidth,
                docClientWidth: document.documentElement.clientWidth,
                windowInnerWidth: window.innerWidth,
                overflowing: overflowing.slice(0, 15)
              });
            })()`,
            returnByValue: true
          }
        }));
      };
      
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 1) {
          console.log('RESULT:', msg.result?.result?.value);
          ws.close();
          edge.kill();
        }
      };
    } else {
      edge.kill();
    }
  } catch (e) {
    console.error('Fetch error:', e.message);
    edge.kill();
  }
}, 3000);
