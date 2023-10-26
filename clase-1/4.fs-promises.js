// Importamos la versión 'promises' del mismo módulo 'fs', esto hará que podamos escribir en sintaxis de promesas en vez de redactar un callback.

const fs = require('node:fs/promises');

// Si algún módulo no cuenta con su versión sintáctica de promesa de manera nativa, podemos 'transformarlo' por medio de la siguiente función importada:

const { promisify } = require('node:util');

// Un ejemplo de su uso se vería así: 

const readFilePromise = promisify(fs.readFile);

// ------------------ INICIO ------------------

console.log('Leyendo el primer archivo... ');

// Los argumentos de esta función representan lo siguiente: 

// fs.readFile(1. Ubicación del archivo, 
// 2. Tipo de codificación a utilizar, 
// 3. Función a ejecutar una vez que se termine de leer el archivo)

fs.readFile('./archivo.txt', 'utf8')
    .then(text => {
        console.log('Primer texto:', text)
    })

console.log('Hacer cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo... ');

fs.readFile('./archivo2.txt', 'utf8')
    .then(text => {
        console.log('Segundo texto:', text)
    })