let count = 10; // Número inicial de la cuenta regresiva
        let timerElement = document.getElementById("timer"); // Referencia al <div> con el ID "timer"

        let interval = setInterval(() => {
            count--; // Restamos 1 al contador
            timerElement.textContent = count; // Actualizamos el texto del <div> con el nuevo número

            if (count === 0) { // Si llega a 0...
                clearInterval(interval); // Detenemos el temporizador
                timerElement.textContent = "¡Tiempo terminado!"; // Mostramos el mensaje final
            }
        }, 1000); // Se ejecuta cada 1000ms (1 segundo)