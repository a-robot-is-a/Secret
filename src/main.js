const secret = import.meta.env.VITE_TEST_SECRET;
document.getElementById("secret-value").textContent = secret ?? "Kein Secret verfügbar";
console.log("DEBUG: SECRET =", secret);
