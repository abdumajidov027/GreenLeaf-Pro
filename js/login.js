// ==========================
// GREENLEAF ADMIN LOGIN
// ==========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const loginError = document.getElementById("loginError");

        // Demo login
        if (username === "admin" && password === "123456") {

            localStorage.setItem("adminLoggedIn", "true");

            window.location.href = "dashboard.html";

        } else {

            loginError.textContent = "Login yoki parol noto'g'ri!";

        }

    });

}