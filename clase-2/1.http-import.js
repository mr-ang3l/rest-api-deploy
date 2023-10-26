const http = require('node:http');

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
});


server.listen(desiredPort, () => {
    console.log(`server listening on port: https://friendly-space-cod-4rr4vj6rp62j94p-${desiredPort}.app.github.dev/`);
});