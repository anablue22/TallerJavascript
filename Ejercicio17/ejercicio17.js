const cuadrado = document.getElementById("cuadrado");
        let x = 225; // Posición inicial en left
        let y = 125; // Posición inicial en top
        const paso = 10; // Cantidad de píxeles por movimiento
        const limiteX = 450; // Ancho del contenedor - tamaño del cuadrado
        const limiteY = 250; // Alto del contenedor - tamaño del cuadrado

        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (y > 0) y -= paso;
                    break;
                case "ArrowDown":
                    if (y < limiteY) y += paso;
                    break;
                case "ArrowLeft":
                    if (x > 0) x -= paso;
                    break;
                case "ArrowRight":
                    if (x < limiteX) x += paso;
                    break;
            }
            cuadrado.style.left = x + "px";
            cuadrado.style.top = y + "px";
        }); 