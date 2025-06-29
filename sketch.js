function setup() {
  noCanvas();  // canvas not needed for this test
  sendToSheet("TestUser", 123);
}

function sendToSheet(name, score) {
  fetch('https://script.google.com/macros/s/AKfycbwb5h4aQBEkPkhKohP3y7ZRZcw_SvAwCBWQmhsHbiSMBwv2C3IebIOVr-rDIzPhZ67m/exec', {
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