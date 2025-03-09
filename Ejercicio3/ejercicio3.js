function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let tareaTexto = input.value.trim();
    
    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    let lista = document.getElementById("listaTareas");

    // Crear un nuevo elemento <li> con el texto de la tarea
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tareaTexto;

    // Agregar la tarea a la lista
    lista.appendChild(nuevaTarea);

    // Limpiar el input
    input.value = "";
}