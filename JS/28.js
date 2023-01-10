//

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, false);

//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }


}

const libro = new Libro('JavaScript la Revolución', 120, '54365423641368');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());

console.log(producto2.formatearProducto());