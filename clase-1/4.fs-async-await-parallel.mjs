//Este código ejecuta las tareas de manera asincrónica y paralela.

import { readFile } from 'node:fs/promises';

// ------------------ INICIO ------------------

Promise.all([
  readFile('./archivo.txt', 'utf8'),
  readFile('./archivo2.txt', 'utf8'),
]).then(([text, secondText]) =>
  /* Se ponen los argumentos dentro de un sólo array porque de este modo desestructuramos la respuesta del método '.then', pues este responde originalmente con un array.*/
  {
    console.log('Primer texto:', text);
    console.log('Segundo texto:', secondText);
  }
);

console.log('Hacer cosas mientras lee el archivo...');
