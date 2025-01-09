
let defaultUsername = "admin";
let storedPassword = localStorage.getItem("password") || "admin123";

function resetPassword() {
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    localStorage.setItem("password", newPassword);
    alert("Password has been successfully reset!");
    window.location.href = "index.html"; 
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === defaultUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "logged.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
