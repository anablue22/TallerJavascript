let imagen = document.getElementById("banner"); // Referencia a la imagen

// Cambiar la imagen cuando el mouse pasa sobre ella
imagen.addEventListener("mouseover", function() {
    imagen.src = "imagen2.jpg"; // Imagen alternativa
});

// Restaurar la imagen original cuando el mouse se va
imagen.addEventListener("mouseout", function() {
    imagen.src = "imagen1.jpg"; // Imagen original
});