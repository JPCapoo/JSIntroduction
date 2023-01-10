// Objeto
"use strict"; // Usar estrictamente JS

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // Evita que se agreguen mas propiedades al objeto

productoimagen = 'imagen.jpg'

console.log(Object.isFrozen(producto));
console.log(producto);