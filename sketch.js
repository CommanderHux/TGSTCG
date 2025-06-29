function setup() {
  noCanvas();  // Just testing, so no need for a canvas
  sendToSheet("Huxley", 123);
}

function sendToSheet(name, score) {
  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("score", score);

  fetch('https://script.google.com/macros/s/AKfycbzolULzyozcc4qkQXWymLVZAYQwKWWFzwKD81Y1JB1FPyXa4qoOEk-qNexUx5veBOHy/exec', {
    method: 'POST',
    body: formData
  })
  .then(() => console.log("✅ Data sent"))
  .catch(err => console.error("❌ Fetch error:", err));
}
