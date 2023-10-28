/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
const http = require('node:http')

// Common JS permite importar archivos de formato JSON de manera directa

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end(`<p><b>404. </b> That's an error.</p><br><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png"><p>The requested URL ${req.url} was not found on this server. That’s all we know.</p> <img src="https://www.google.com/images/errors/robot.png">`)
        }
      }
    case 'POST': {
      switch (url) {
        case '/pokemon': {
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }
        
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end(`<p><b>404. </b> That's an error.</p><br><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png"><p>The requested URL ${req.url} was not found on this server. That’s all we know.</p> <img src="https://www.google.com/images/errors/robot.png">`)
          
        }
      }
    }
  }
}

const server = http.createServer(processRequest)

const desiredPort = process.env.PORT ?? 1234

server.listen(desiredPort, () => {
  console.log(`server listening on port: https://friendly-space-cod-4rr4vj6rp62j94p-${desiredPort}.app.github.dev/`)
})
