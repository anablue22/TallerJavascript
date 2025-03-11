// Capturar el select
        const colorSelect = document.getElementById('colorSelect');
        // Escuchar el cambio de opción
        colorSelect.addEventListener('change', function() {
              // Obtener el color seleccionado y aplicarlo al fondo
              document.body.style.backgroundColor = colorSelect.value;
        });
          