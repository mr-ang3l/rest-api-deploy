const http = require('node:http'); // Protocolo HTTP

const net = require('node:net'); // Protocolo TCP (más rápido en conexión)

// Cada vez que se ejecuta esa callback quiere decir que el servidor ha recibido una solicitud (request)

// Nota: Al navegador no llegarán los console.log que se ejecutaron desde el servidor, estos sólo se verán en la consola desde donde ejecutamos el archivo.

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('La Yani');
})

// En el primer argumento estamos indicando a qué puerto tiene que 'escuchar' nuestro servidor para recibir solicitudes (requests).

// En el segundo argumento proporcionamos una función como callback que se ejecutará cada vez que el servidor se conecte exitosamente al puerto especificado:

/* server.listen(3000, () => {
    console.log('server listening on port 3000');
}) */

// Si escribimos 0 en el primer argumento, el servidor buscará el primer puerto que esté disponible y se conectará a él automáticamente, así evitaremos el posible problema de tratar de conectarnos a un puerto que ya esté en uso:

server.listen(0, () => {
    console.log(`server listening on port: https://friendly-space-cod-4rr4vj6rp62j94p-${server.address().port}.app.github.dev/`);
})

// https://friendly-space-cod-4rr4vj6rp62j94p-38957.app.github.dev/