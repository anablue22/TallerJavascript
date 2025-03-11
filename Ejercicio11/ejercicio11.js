 // Capturar el input y la lista de productos
 const searchInput = document.getElementById('search');
 const productList = document.getElementById('product-list');
 const products = productList.getElementsByTagName('li');

 // Escuchar el evento de entrada
 searchInput.addEventListener('keyup', function() {
     const filter = searchInput.value.toLowerCase();
     
     // Recorrer los elementos de la lista y ocultar los que no coincidan
     for (let i = 0; i < products.length; i++) {
         const productText = products[i].textContent.toLowerCase();
         if (productText.includes(filter)) {
             products[i].classList.remove('hidden'); // Mostrar
         } else {
             products[i].classList.add('hidden'); // Ocultar
         }
     }
 });