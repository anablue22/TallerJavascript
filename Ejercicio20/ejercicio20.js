function convertir() {
    let km = document.getElementById("kilometros").value;
    let millas = km * 0.621371; // Conversión de km a millas
    document.getElementById("millas").innerText = millas.toFixed(2);
}