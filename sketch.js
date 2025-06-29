function setup() {
  noCanvas();  // Just testing, so no need for a canvas
  sendToSheet();
}

function sendToSheet() {
  fetch("https://script.google.com/macros/s/AKfycbzolULzyozcc4qkQXWymLVZAYQwKWWFzwKD81Y1JB1FPyXa4qoOEk-qNexUx5veBOHy/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "Hello from the browser!" })
})
.then(res => res.text())
.then(response => console.log(response));
}
