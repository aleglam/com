// Lista para almacenar los productos del carrito
let carrito = [];
let contadorCarrito = 0; // Variable para el contador

// Función para mostrar el carrito
function mostrarCarrito() {
    const carritoContenido = document.getElementById('carrito');
    carritoContenido.style.display = 'block';
    mostrarItems();
}

// Función para cerrar el carrito
function cerrarCarrito() {
    const carritoContenido = document.getElementById('carrito');
    carritoContenido.style.display = 'none';
}

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precio) {
    // Agregar el producto al carrito
    carrito.push({ nombre: nombreProducto, precio: precio });
    mostrarItems(); // Actualizar la lista de productos en el carrito

    // Incrementar el contador del carrito
    contadorCarrito++;
    actualizarContadorCarrito();

    mostrarItems(); // Actualizar la lista de productos en el carrito
}


// Función para mostrar los productos del carrito y el total
function mostrarItems() {
    const carritoItems = document.getElementById('carrito-items');
    const totalCarrito = document.getElementById('total-carrito');
    
    // Limpiar la lista antes de agregar los nuevos productos
    carritoItems.innerHTML = '';
    
    let total = 0;
    
    // Agregar cada producto al carrito
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        carritoItems.appendChild(li);
        total += item.precio;
    });
    
    // Actualizar el total del carrito
    totalCarrito.textContent = total.toFixed(2);
}
