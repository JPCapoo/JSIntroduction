const usuarioAutenticado = new Promise(function(resolve, reject) {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado'); //El Promise se cumple
    } else {
        reject('No se pudo iniciar sesion'); // El Promise no se cumple

    }
});

usuarioAutenticado
    .then(function(resultado) {
        console.log(resultado);
    })
    .catch(function(error) {
        console.log(error);
    })

console.log(usuarioAutenticado);


// En los Promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
// Fulfilles: Ya se Cumplió
//Rejected: Se ha rechazado o no se pudo cumplir