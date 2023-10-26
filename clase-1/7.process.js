// El método process.argv 'recupera' todos los argumentos que se proporcionen desde la misma consola.

// Esto nos devolverá en forma de array la dirección de cada elemento escrito en la declaración que hicimos en la consola.

// Si nosotros escribiéramos en ella: node 7.process.js hola adios, el método devolvería a la consola la dirección de instalación de node, luego la dirección de la carpeta en donde está el archivo '7.process.js' y al final, por orden de aparición, los argumentos que le pasamos:

// [directorio de Node, directorio de 7.process.js, hola, adios]

process.argv.forEach((file) => console.log(file));

// Con el método process.exit podemos controlar la salida del proceso, cuando termina de trabajar:

// process.exit(0); El 0 indica que el proceso terminó de manera exitosa.

// process.exit(1); El 1 indica que el proceso sufrió un problema durante su ejecución.

// Se puede rastrear el evento de ciertos acontecimientos con procces.on

process.on('exit', () => {
  /* Bloque de código */
});

// Current working directory 'process.cwd' es otro método de Node que nos indica desde qué directorio nos encontramos en la consola

console.log(process.cwd);

// process.platform Nos proporciona información sobre la plataforma (sistema operativo) desde donde se está ejecutando este código

console.log(process.platform);

// Variables de entorno son aquellas variables declaradas desde Node pero cuyos valores son asignados desde la consola, valores los cuales Node tiene acceso, por ejemplo, por medio de
// process.env.nombre_de_variable

// Al asignarle un valor a la variable desde la consola, tenemos que escribir todo pegado, en este caso en la consola deberíamos de escribir:
// saludo=hola insulto=pendejo node 7.process.js

const env = process.env;

console.log(env.saludo, env.insulto, '!');
