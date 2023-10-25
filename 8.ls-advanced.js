const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls (folder) {
  let files;

  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(`No se pudo leer el directorio ${folder}`);
    process.exit(1);
  }

  const filesPromises = files.map(async file => {

    const filePath = path.join(folder, file);
    let stats;

    try {

      // Status: representa información del archivo
      stats = await fs.stat(filePath);

    } catch {
      console.error(`No se pudo leer el directorio ${folder} :(`);

      // Siempre debemos manejar los errores con process.exit(1). El process.exit(0) significa que no hubo errores.

      process.exit(1);
    }

    // Si pasamos hasta este nivel del bloque de código, quiere decir que todo ha ido bien hasta ahora.

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? 'D-' : 'F-';
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType.padEnd(5)} ${file.padEnd(35)} ${fileSize.padStart(10).padEnd(15)} ${fileModified}`;
  })
  
  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach(fileInfo => console.log(fileInfo));

}


ls(folder);

// Nosotros cuando no manejamos un posible error en nuestra API, se caerá. Esto no es bueno dado a que el consumo de recurso que implica volverla a levantar es mayor. Es recomendado controlar los diferentes escenarios en los que la API pueda incurrir en un error, de este modo podremos mantener el proceso de esta 'vivo'.
