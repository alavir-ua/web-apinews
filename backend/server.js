import path from 'path'
import express from 'express'
import colors from 'colors'
import 'dotenv/config.js'
import morgan from 'morgan'
import { errorHandler } from './middleware/errorMiddleware.js'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

import newsRoutes from './routes/newsRoutes.js'

app.use(express.json())
app.use('/api/news', newsRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(errorHandler)

const PORT = process.env.PORT || 8080

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
