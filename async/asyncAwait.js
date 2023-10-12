//convertimos una funcion asincrono para utilizar con el await con la palabra async

async function hola(nombre) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 1500);
    })
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}


// async await convierte las promesas en procesos que aparentemente son sincronos 
// pero en realidad estan desacopladas y pueden ser ejecutadas de forma asincrona
// se utiliza para poder esperar a que termine una tarea antes de continuar con otra

// como saber que esta funcion sincrona, se está ajecutando de forma asincrona

async function main() {
    // await hola('Jorge');
    let nombre = await hola('Jorge');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso ...')
}

console.log('Empezamos el proceso ...')
main();
console.log('Va ser la segunda instruccion')
