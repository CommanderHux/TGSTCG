function setup() {
  noCanvas();  // canvas not needed for this test
  sendToSheet("TestUser", 123);
}

function sendToSheet(name, score) {
  fetch('https://script.google.com/macros/s/AKfycbywE-tgvR1IDdHA1LOAWpZZ8DRDnQ8kkY7S1XZ8V3h8CCF42F_CP18FFaciKd2APQ5U/exec', {
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
