const http = require('node:http');

const findAvailablePort = require('./10.free-port.js');

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
});

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port: https://friendly-space-cod-4rr4vj6rp62j94p-${port}.app.github.dev/`);
    })
});