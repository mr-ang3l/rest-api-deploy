// fs significa 'file system'

const fs = require('node:fs') // A partir de Node 16, se recomienda poner el prefijo 'node:' antes de nombrar un módulo de Node. 

const stats = fs.statSync('./archivo.txt'); // statSync nos proporciona la información sobre un archivo determinado.

console.log(
  stats.isFile(), //Nos indica si es un fichero
  stats.isDirectory(), //Nos indica si es un directorio
  stats.isSymbolicLink(), //Nos indica si es un enlace simbólico
  stats.size // Nos indica el tamaño del archivo en bytes
)

