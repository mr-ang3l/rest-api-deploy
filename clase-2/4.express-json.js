const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 1234

const dittoJSON = require('./pokemon/ditto.json')

// app.disable('x-powered-by'); Desactiva el cabezal o 'header' llamado X-Powered-By el cuál proporciona la tecnología con la que se programó la petición al servidor.

// Los 'middleware' son código que intercepta las solicitudes antes de que sean procesadas de forma normal, esto nos permite hacer análisis más profundos de su información, añadiéndole incluso más valor a las mismas. En el caso de Express Js utilizamos el método use() del objeto express. Lo colocaremos antes de cualquier código que procese rutas, esto sólo es convención.

// El siguiente middleware verificará si la petición entrante es de tipo POST y con su 'content-type' configurado a 'application/json', y en caso de que lo sea, procesará dicha petición de manera específica o particular.

// La siguiente función realiza exactamente la misma tarea que la versión del archivo 3.express.js de forma automática.

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ name: 'Hola mundo' })
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

// La siguiente función ya se puede reducir a un línea de código gracias al middleware que escribimos más arriba, de lo contrario, la función se vería así:

/* app.post('/pokemon', (req, res) => {
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
}) */

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// Express intentará comparar cada una de las rutas preparadas de arriba para ver si compatibiliza con la que el cliente solicitó, si no coincide con ninguna de ellas, entonces es cuando tomará la ruta predeterminada que siempre mostrará en dichos casos, en este caso sería la de el error 404.

app.use((req, res) => {
  res.status(404).send(`<p><b>404. </b> That's an error.</p><br><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png"><p>The requested URL ${req.url} was not found on this server. That’s all we know.</p> <img src="https://www.google.com/images/errors/robot.png">`)
})

app.listen(PORT, () => {
  console.log(`server listening on port: https://zany-potato-5r6q7wvqj6r2v6px-${PORT}.app.github.dev/`)
})
