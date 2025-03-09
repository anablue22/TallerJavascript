function agregarTarea() {
    let input = document.getElementById("tareaInput");  // Captura el texto escrito
    let tareaTexto = input.value.trim(); // Elimina espacios en blanco - trim() evita agregar tareas vacias 

    if (tareaTexto === "") {
        alert("Por favor, escribe una tarea.");
        return; 
    } // si el imput está vacío, muestra una alerta y no hace nada
}

    let lista = document.getElementById("listaTareas"); 
    let nuevaTarea = document.createElement("li"); // crea un nuevo <li> y le pone el texto de la tarea
    nuevaTarea.textContent = tareaTexto; 

    let botonEliminar = document.createElement("button"); //cada tarea tiene su propio botón para eliminar
    botonEliminar.textContent = "x"; //al hacer clic en x se borra la tarea de la lista
    botonEliminar.onclick = function(){
        lista.removeChild(nuevaTarea);
    }; 

    nuevaTarea.appendChild(botonEliminar); // la tarea y su botón se agregan a la lista
    lista.appendChild(nuevaTarea);  // se limpia el campo de entrada después de agregar la tarea 
    input.value = ""; 

