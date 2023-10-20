// Importamos el módulo 'fs' de Node

const fs = require('node:fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Hubo un error:', err);
    return;
  }

  files.forEach((file) => console.log(file));
});
