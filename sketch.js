function setup() {
  noCanvas();  // Just testing, so no need for a canvas
  sendToSheet("Huxley", 123);
}

function sendToSheet(name, score) {
  fetch('https://script.google.com/macros/s/AKfycbwC4E-5MPpiUhJkr3NRhAK1A5S13umAgBpjwRK4nRo/dev', {
  method: 'POST',
  mode: 'no-cors',  // 👈 key addition
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name, score })
});
}
