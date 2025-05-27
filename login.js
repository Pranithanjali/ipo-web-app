const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

// Dummy admin credentials
const adminUsername = "admin";
const adminPassword = "admin123";

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === adminUsername && password === adminPassword) {
    // Login success
    localStorage.setItem("isAdmin", "true"); // optional for access control
    window.location.href = "admin-dashboard.html";
  } else {
    // Show error
    errorMsg.style.display = "block";
  }
});
