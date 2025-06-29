function setup() {
  noCanvas();  // Just testing, so no need for a canvas
  sendToSheet("Huxley", 123);
}

function sendToSheet(name, score) {
  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("score", score);

  fetch('https://script.google.com/macros/s/AKfycbywE-tgvR1IDdHA1LOAWpZZ8DRDnQ8kkY7S1XZ8V3h8CCF42F_CP18FFaciKd2APQ5U/exec', {
    method: 'POST',
    body: formData
  })
  .then(() => console.log("✅ Data sent"))
  .catch(err => console.error("❌ Fetch error:", err));
}
