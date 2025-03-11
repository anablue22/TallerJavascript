function mostrarNotificacion() {
    const notificacion = document.getElementById("notificacion");

    // Mostrar la notificación
    notificacion.style.display = "block";
    notificacion.style.opacity = "1";

    // Ocultar la notificación después de 3 segundos
    setTimeout(() => {
        notificacion.style.opacity = "0";
        setTimeout(() => {
            notificacion.style.display = "none";
        }, 500); // Esperar un poco más para que la transición termine
    }, 3000);
}