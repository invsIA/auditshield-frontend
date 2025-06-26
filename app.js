function startTrial() {
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message");
  if (!email) {
    msg.textContent = "Please enter a valid email.";
    return;
  }

  fetch("https://auditshield-backend.onrender.com/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    if (data.allowed) {
      msg.textContent = `✅ ${data.message}`;
    } else {
      msg.textContent = `🚫 ${data.message}`;
    }
  })
  .catch(() => {
    msg.textContent = "Server error. Please try again later.";
  });
}