
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    const validUsername = "user";
    const validPassword = "123";

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
        } else if (username === validUsername && password === validPassword) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Try again.");
        }
    });
});
