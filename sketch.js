function setup() {
  noCanvas();  // Just testing, so no need for a canvas
  sendToSheet("Huxley", 123);
}

function sendToSheet(name, score) {
  fetch('https://your-web-app-url', {
  method: 'POST',
  mode: 'no-cors',  // 👈 key addition
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name, score })
});
}
