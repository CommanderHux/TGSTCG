function setup() {
  noCanvas();  // canvas not needed for this test
  sendToSheet("TestUser", 123);
}

function sendToSheet(name, score) {
  fetch('https://script.google.com/macros/s/AKfycbwsuCEYEVYrhIi8jIk38X3A7Ab9Zzx5KgByHBKLrxx9zfBEeEwoR0S7D0Trcyl-_Rrf/exec', {
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
