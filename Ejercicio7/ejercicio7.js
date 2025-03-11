// Seleccionar los elementos
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Agregar el evento para alternar la visibilidad
togglePassword.addEventListener("change", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});