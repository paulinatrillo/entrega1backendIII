import mongoose from 'mongoose'
import { app } from './app.js'

const PORT = 8080

const start = async () => {
  await mongoose.connect('mongodb://localhost:27017/mockdb')
  console.log('Conectado a MongoDB')
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
  })
}

start()
