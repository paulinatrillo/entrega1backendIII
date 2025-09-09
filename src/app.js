import express from 'express'
import mongoose from 'mongoose'
import mocksRouter from './routes/mocks.router.js'
import usersRouter from './routes/users.routes.js'
import petsRouter from './routes/pets.routes.js'
import { setupSwagger } from './swagger.js'

const app = express()
const PORT = 8080

setupSwagger(app)

app.use(express.json())

app.use('/api/mocks', mocksRouter)
app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)

const start = async () => {
  await mongoose.connect('mongodb://localhost:27017/mockdb')
  console.log('Conectado a MongoDB')
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
  })
}

start()