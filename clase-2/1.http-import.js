const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    console.log('request received', req.url)
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen-bonita.jpg') {
    fs.readFile('./imae.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Error 500: Internal Server Error</h1> <img src="https://f4.bcbits.com/img/0017742434_25.jpg">')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // Código que significa que el proceso terminó correctamente. Este es el código que se muestra por defecto cuando no lo especificamos.
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Representa el caso en donde no se ha encontrado la URL especificada.
    res.end(`<p><b>404. </b> That's an error.</p><br><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png"><p>The requested URL ${req.url} was not found on this server. That’s all we know.</p> <img src="https://www.google.com/images/errors/robot.png">`)
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port: https://friendly-space-cod-4rr4vj6rp62j94p-${desiredPort}.app.github.dev/`)
})
