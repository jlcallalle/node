/* function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    })
}
 */
function hola(nombre) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            resolve(nombre);
            // reject('Hay un error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}
// ---
console.log('Iniciando el proceso...');

// En las funciones ya podemos trabajar de forma sensilla
// convertir código asincrano en una visualizacion correcta
// siempre que se pone un them va un catch

hola('Jorge')
    .then((hablar))
    .then((hablar))
    .then((adios))
    .then((nombre) => {
        console.log('Terminado el proceso...');
    })
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    })

    