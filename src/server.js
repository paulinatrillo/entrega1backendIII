import mongoose from 'mongoose'
import { app } from './app.js'

const PORT = 8080

const start = async () => {
  try {
    await mongoose.connect('mongodb://mongodb:27017/mockdb')
    console.log('Conectado a MongoDB')
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`)
    })
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
  }
}

start()
