const express = require('express')
const movies = require('./movies.json')
const crypto = require('node:crypto')
const app = express()
const z = require('zod')
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

app.use(express.json()) // Esto es un middleware que tratará a la solicitud (petición, request) antes de pasarla a comparar con todas las rutas preestablecidas. Este middleware captura la request y verifica si necesita ser procesada por 'chunks' (pedazo a pedazo) y en caso de que sí, procesarlo, de este modo, pudiendo acceder directamente al 'req.body'.

// app.get('/', (req, res) => {
//   res.json({ message: 'Hola mundo' })
// })

// Todos los recursos que sean MOVIES se identificarán con la ruta /movies.

app.get('/movies', (req, res) => {
  // La propiedad 'query' es un objeto que almacena todas las búsquedas o 'querys' contenidas en la solicitud del usuario a las cuales podemos acceder.

  const { genre } = req.query

  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )

    return res.json(filteredMovies)
  }
  res.json(movies)
})

// La siguiente función utiliza parámetros abstractos (:id) los cuales son interpretados por medio del método 'path to regex'.
// Como en realidad se vería la ruta si lo escribiéramos en lenguaje 'regex'/ 'regular expression' es muy diferente a como lo escribimos en la actualidad, en este caso siendo '/movies/:id' .

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const movieSchema = z.object({
    title: z.string({

      // Este mensaje se enviará tan pronto el usuario mande un tipo de dato equivocado.

      invalid_type_error: 'Movie title must be a string',

      // Este mensaje se enviará tan pronto el usuario omita llenar este campo.

      required_error: 'Movie title is required'
    }),

    // Zod permite la encadenación de métodos para especificar aún más un requerimiento.

    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().min(60),
    rate: z.number().min(0).max(10),

    // Esto incluso se puede complementar con un .containsWith() para definir un formato o extensión.

    poster: z.string().url({
      message: 'Poster must be a valid URL'
    }),

    genre: z.array(
      z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
      {
        required_error: 'Movie genre is required.',
        invalid_type_error: 'Movie genre must be an array of enum genre'
      }
    )

  })
  const {
    title,
    genre,
    year,
    director,
    duration,
    rate,
    poster
  } = req.body

  // Esta parte no se consideraría como una acción fiel a la filosofía de la arquitectura REST dado que se están almacenando datos en memoria.

  const newMovie = {
    id: crypto.randomUUID(), // Esta función genera un UUIID, es un módulo nativo de Node.
    title,
    genre,
    year,
    director,
    duration,
    rate: rate ?? 0,
    poster
  }

  movies.push(newMovie)

  // Status code 201 significa 'created', un recurso nuevo hecho.

  res.status(201).json(newMovie)
})

// app.listen(PORT, () => {
//   console.log(`Servidor conectado al puerto ${PORT}. Entra a https://probable-system-j765pxr5pq63jv4-${PORT}.app.github.dev/`)
// })

app.listen(PORT, () => {
  console.log(`Servidor conectado al puerto ${PORT}. Entra a https://localhost:${PORT}`)
})
