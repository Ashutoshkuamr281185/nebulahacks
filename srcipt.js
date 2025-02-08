document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    if (email === "admin@hospital.com" && password === "123456") {
        alert("✅ Login Successful! You will receive an SMS confirmation.");
        
        sendSMS("Your login to Hospital Management System was successful!");

        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "❌ Invalid email or password!";
    }
});

function sendSMS(message) {
    console.log("📩 Sending SMS: " + message);
    alert("📩 SMS Sent: " + message);
}

function togglePassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
