fetch("https://https://auditshield-backend-abc123.onrender.com/")
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML = `<h1>${data.message}</h1>`;
  })
  .catch(error => {
    console.error("Error al conectar con el backend:", error);
    document.body.innerHTML = `<h1>El servidor no responde 😞</h1>`;
  });
