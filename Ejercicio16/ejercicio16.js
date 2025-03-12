const btnCargar = document.getElementById("btnCargar");
        const contenido = document.getElementById("contenido");

        btnCargar.addEventListener("click", function() {
            contenido.innerHTML = "Cargando contenido... "; // Mensaje de carga

            setTimeout(() => {
                contenido.innerHTML = "<strong>¡Contenido cargado exitosamente! 🎉</strong>";
            }, 2000); // Simula una carga de 2 segundos
        });