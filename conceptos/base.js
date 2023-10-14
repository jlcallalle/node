console.log('Hola Mundo');
console.info('Hola Info')

// el objeto global windows no existe en nodejs
// console.log(window);
console.log(global);
console.log('...');
console.log(globalThis);

//console.log es una propiedad de la variable globalThis
globalThis.console.info('Hola Info')
