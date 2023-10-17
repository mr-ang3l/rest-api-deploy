const fs = require('node:fs');

// Esta es la función sincrónica 'readFileSync' cuyos argumentos representan lo siguiente:

// fs.readFileSync(1. Ubicación del archivo, 
// 2. Tipo de codificación a utilizar);

console.log('Leyendo el primer archivo... ');

// Esta es la función asincrónica 'readFile' cuyos argumentos representan lo siguiente:

// fs.readFile(1. Ubicación del archivo, 
// 2. Tipo de codificación a utilizar, 
// 3. Función a ejecutar una vez que se termine de leer el archivo);

fs.readFile('./archivo.txt', 'utf8', (err, text) => {
    console.log('Primer texto: ', text); // Trabaja de forma asincrónica
}) ;

console.log('Hacer cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo... ');

fs.readFile('./archivo2.txt', 'utf8', (err, text) => {
    console.log('Segundo texto: ', text); // Trabaja de forma asincrónica
});