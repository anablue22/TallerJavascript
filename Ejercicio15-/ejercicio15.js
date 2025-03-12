const btnArriba = document.getElementById("btnArriba");

        window.addEventListener("scroll", function() {
            if (window.scrollY > 200) { // Muestra el botón después de 200px de scroll
                btnArriba.style.display = "block";
            } else {
                btnArriba.style.display = "none";
            }
        });

        btnArriba.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Hace el scroll suave
            });
        });