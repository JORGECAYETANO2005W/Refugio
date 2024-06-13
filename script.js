// Función para cambiar entre vista de Registro y Login
document.getElementById("signUp").addEventListener("click", function() {
    document.getElementById("title").textContent = "Registro";
    document.getElementById("confirmPasswordField").style.display = "block";
    document.getElementById("signIn").classList.add("disable");
    this.classList.remove("disable");
});

document.getElementById("signIn").addEventListener("click", function() {
    document.getElementById("title").textContent = "Login";
    document.getElementById("confirmPasswordField").style.display = "none";
    document.getElementById("signUp").classList.add("disable");
    this.classList.remove("disable");
});

// Validación de contraseña al enviar el formulario de Registro
document.querySelector("form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        event.preventDefault(); // Prevenir envío del formulario si las contraseñas no coinciden
    }
});
