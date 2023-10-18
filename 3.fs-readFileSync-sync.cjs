//Este código ejecuta las tareas de manera sincrónica.

const fs = require('node:fs');

// Esta es la función sincrónica 'readFileSync' cuyos argumentos representan lo siguiente:

// fs.readFileSync(1. Ubicación del archivo,
// 2. Tipo de codificación a utilizar);

console.log('Leyendo el primer archivo... ');

const text = fs.readFileSync('./archivo.txt', 'utf8');

console.log('Primer archivo:', text);

console.log('Leyendo el segundo archivo... ');

const secondText = fs.readFileSync('./archivo2.txt', 'utf8');

console.log('Primer archivo:', secondText);
