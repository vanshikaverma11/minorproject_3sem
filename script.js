document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can add authentication logic here
    // For simplicity, let's just redirect to a index page
    window.location.href = "index.html";
});
// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Placeholder: Implement actual authentication logic here
    // Example credentials for testing
    const validUsername = "van";
    const validPassword = "123";

    // Check if the entered credentials match the valid credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to the dashboard or another page
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password.");
        
        window.location.href = "login.html";
    }
});


