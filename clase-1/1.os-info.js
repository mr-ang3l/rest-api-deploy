// Esta era la forma tradicional en la que se solía declarar un módulo nativo de node al importar.

// const os = require('os');

// Esta es la nueva sintaxis, añadiendo el prefijo 'node' antes de escribir del nombre del módulo nativo a importar. 

const os = require('node:os');

console.log('Información del sistema operativo');
console.log('--------------------------------');

console.log('Nombre dek sistema operativo: ', os.platform());
console.log('Version del sistema operativo: ', os.release());
console.log('Arquitectura: ', os.arch())
console.log('CPUs :', os.cpus()) // <-- Con este método se pueden escalar procesos en Node
console.log('Memoria libre: ', os.freemem() / 1024 / 1024);
console.log('Memoria total: ', os.totalmem() / 1024 / 1024);
console.log('Uptime: ', os.uptime() / 60 / 60);