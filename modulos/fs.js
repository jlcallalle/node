// Node File system

const fs = require('fs');

// Ejemplo 1
// readFile
fs.readFile('modulos/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

// writeFile
const content = 'Some content!';

fs.writeFile('modulos/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});


// Ejemplo 2
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }

    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

leer(__dirname + '/archivo.txt', console.log)
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// borrar(__dirname + '/archivo1.txt', console.log);