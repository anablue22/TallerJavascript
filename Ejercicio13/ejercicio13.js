// Capturar el formulario y la tabla
const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];

// Evento al enviar el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const ciudad = document.getElementById("ciudad").value;

    // Crear una nueva fila
    const nuevaFila = tabla.insertRow();

    // Insertar celdas y añadir valores
    nuevaFila.insertCell(0).textContent = nombre;
    nuevaFila.insertCell(1).textContent = edad;
    nuevaFila.insertCell(2).textContent = ciudad;

    // Agregar un botón para eliminar la fila
    const celdaEliminar = nuevaFila.insertCell(3);
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.backgroundColor = "red";
    botonEliminar.style.color = "white";
    botonEliminar.style.border = "none";
    botonEliminar.style.padding = "5px";
    botonEliminar.style.cursor = "pointer";

    // Evento para eliminar la fila
    botonEliminar.addEventListener("click", function() {
        tabla.removeChild(nuevaFila);
    });

    celdaEliminar.appendChild(botonEliminar);

    // Limpiar los campos del formulario
    formulario.reset();
});