//Este código ejecuta las tareas de manera asincrónica y secuencial.

import { readFile } from 'node:fs/promises';

// ------------------ INICIO ------------------

console.log('Leyendo el primer archivo... ');

const text = await readFile('./archivo.txt', 'utf8');

console.log('Primer texto:', text);

console.log('Hacer cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo... ');

const secondText = await readFile('./archivo.txt', 'utf8');

console.log('Segundo texto:', text);
