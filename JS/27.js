// POO


/* Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object Constructor

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return ` El Cliente${this.nombre} ${this.apellido}`;

}


function Producto(nombre, precio, disponibilidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

//Crear funciones que solo se utilizan en un objeto específico

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`

}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);
const producto4 = new Producto('Compu', 50, false);
const producto5 = new Producto('Mouse', 100, true);

const cliente = new Cliente('Juan', 'Capobianco')

console.log(cliente);


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

console.log(formatearProducto(producto3));