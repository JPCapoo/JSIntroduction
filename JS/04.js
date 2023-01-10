// String o cadenenas de Texto

const producto = "Monitor de 20\"";
const producto2 = String('Monitor 30 Pulgadas');
const producto3 = new String('Monitor 50 Pulgadas'); // Objeto

// Length para la extension

console.log(producto2.length);

// Index Of (retorna la posicion)

console.log(producto3.indexOf('50'));

// Includes (retorna true o false)

console.log(producto.includes('40'));