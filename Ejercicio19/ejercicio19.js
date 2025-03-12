let total = 0;
function agregarAlCarrito(nombre, precio) {
    // Agregar el producto a la lista del carrito
    const listaCarrito = document.getElementById("lista-carrito");
    const nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = `${nombre} - $${precio} <button onclick="eliminarDelCarrito(this, ${precio})">Eliminar</button>`;
    listaCarrito.appendChild(nuevoItem);

    // Actualizar el total
    total += precio;
    document.getElementById("total").innerText = total;
}

function eliminarDelCarrito(boton, precio) {
    // Eliminar el producto del carrito
    boton.parentElement.remove();
    
    // Actualizar el total
    total -= precio;
    document.getElementById("total").innerText = total;
}