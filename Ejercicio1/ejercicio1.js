// Se definen los elementos a traer//
const boton = document.getElementById('boton');
const contenido = document.getElementById('Contenido');

// Se agrega un evento de click al botón y a la vez su funcion //
boton.addEventListener('click', function() {
            contenido.textContent = "La historia de la música se remonta a los orígenes de la humanidad. " +
            "Los primeros instrumentos musicales conocidos datan de hace más de 40,000 años. " +
            "Inicialmente, la música estaba ligada a rituales religiosos, ceremonias de caza y comunicación tribal. " +
            "A lo largo de los siglos, la música ha evolucionado, reflejando los cambios culturales, sociales y tecnológicos de cada época."
});