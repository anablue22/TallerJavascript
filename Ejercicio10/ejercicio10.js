let precioPorUnidad = 10; // Precio fijo de cada producto
        let cantidadInput = document.getElementById("cantidad");
        let totalSpan = document.getElementById("total");

        // Función que calcula y actualiza el total en tiempo real
        function actualizarTotal() {
            let cantidad = cantidadInput.value;
            let total = cantidad * precioPorUnidad;
            totalSpan.textContent = "$" + total;
        }

        // Evento para detectar cambios en la cantidad
        cantidadInput.addEventListener("input", actualizarTotal);