document.getElementById("formulario").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value; 
    let errorEmail = document.getElementById("error-email");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //esto es para validar el formato d eun correo

    if (!emailRegex.test(email)){
        errorEmail.textContent = "Por favor, ingresa un correo válido.";
        event.preventDefault(); //Evita que el formulario se envíe
    } else {
        errorEmail.textContent = ""; 
    }
})
 

