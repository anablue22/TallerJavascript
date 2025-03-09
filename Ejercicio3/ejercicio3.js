function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let tareaTexto = input.value.trim();
    
    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    let lista = document.getElementById("listaTareas");

    // Crear un nuevo elemento <li>
    let nuevaTarea = document.createElement("li");

    // Crear un span para el texto
    let textoTarea = document.createElement("span");
    textoTarea.textContent = tareaTexto;

    // Botón para eliminar la tarea
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "x";
    botonEliminar.onclick = function() {
        nuevaTarea.remove(); // ✅ Alternativa más simple que removeChild()
    };

    // Agregar el texto y el botón al <li>
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar el <li> a la lista
    lista.appendChild(nuevaTarea);

    // Limpiar el input
    input.value = "";
}
    