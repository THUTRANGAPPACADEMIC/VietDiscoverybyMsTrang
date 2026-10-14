const { spawn } = require('child_process');

(async () => {
  const edge = spawn('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', [
    '--headless=new',
    '--remote-debugging-port=9222',
    'http://localhost:5173/'
  ]);

  setTimeout(async () => {
    try {
      const list = await (await fetch('http://127.0.0.1:9222/json')).json();
      const tab = list.find(t => t.url && t.url.includes('localhost'));
      if (!tab) {
        console.error('No tab found');
        edge.kill();
        return;
      }

      const ws = new WebSocket(tab.webSocketDebuggerUrl);
      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              Array.from(document.querySelectorAll('img')).map(i => ({
                src: i.src,
                alt: i.alt,
                naturalWidth: i.naturalWidth,
                naturalHeight: i.naturalHeight,
                clientWidth: i.clientWidth,
                clientHeight: i.clientHeight
              }))
            `,
            returnByValue: true
          }
        }));
      };

      ws.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 1) {
          console.log('Images in DOM:');
          console.log(JSON.stringify(msg.result.result.value, null, 2));
          ws.close();
          edge.kill();
        }
      };
    } catch (err) {
      console.error(err);
      edge.kill();
    }
  }, 2500);
})();
