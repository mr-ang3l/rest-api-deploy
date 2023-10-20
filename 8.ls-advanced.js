const fs = require('node:fs/promises');

const folder = process.argv[2] ?? '.';

async function ls (directory) {
  let files
  try {
    files = fs.readdir(folder);
  } catch {
    console.erro(`No se pudo leer el directorio ${folder}`);
    process.exit(1);
  }

  const filePromise = files.map(async file => {
    const filePath = path.join(folder, file);
    try {
      const fileStats = await fs.stat(filePath); // Status: representa información del archivo
    } 
  })
}


ls(folder);

// Nosotros cuando no manejamos un posible error en nuestra API, se caerá. Esto no es bueno dado a que el consumo de recurso que implica volverla a levantar es mayor. Es recomendado controlar los diferentes escenarios en los que la API pueda incurrir en un error, de este modo podremos mantener el proceso de esta 'vivo'.
