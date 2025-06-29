function setup() {
  noCanvas();  // canvas not needed for this test
  sendToSheet("TestUser", 123);
}

function sendToSheet(name, score) {
  fetch('https://script.google.com/macros/s/AKfycbzolULzyozcc4qkQXWymLVZAYQwKWWFzwKD81Y1JB1FPyXa4qoOEk-qNexUx5veBOHy/exec', {
    method: 'POST',
    body: JSON.stringify({ name: name, score: score }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.text())
  .then(response => console.log("✅ Response from script:", response))
  .catch(err => console.error("❌ Fetch error:", err));
}
