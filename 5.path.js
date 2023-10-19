// Este módulo nos sirve para conocer el directorio en donde se encuentra un archivo dado.
//  Con este módulo podemos crear nuevas rutas hacia archivos, conocer y obtener la extensión de un archivo, crear rutas absolutas, entre otras cosas. 

const path = require('node:path');

// Se recomienda no escribir rutas completas, ej: 'desktop/carpeta/carpeta', porque cada sistema operativo utiliza un símbolo divisor '/' distinto.

// Con path.sep podemos saber qué símbolo divisor utiliza el sistema operativo. 

// En el contexto de Windows, esto imprimirá: \.

console.log(path.sep);

// Con path.join podemos unir una ruta: 

const filePath = path.join('content', 'subfolder', 'test.txt');

console.log(filePath);