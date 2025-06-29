function setup() {
  noCanvas();  // Just testing, so no need for a canvas
  sendToSheet();
}

function sendToSheet(name, score) {
  fetch("https://script.google.com/macros/s/AKfycbwC4E-5MPpiUhJkr3NRhAK1A5S13umAgBpjwRK4nRo/dev", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "Hello from the browser!" })
})
.then(res => res.text())
.then(response => console.log(response));
}
