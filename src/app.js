import express from 'express'
import mocksRouter from './routes/mocks.router.js'
import usersRouter from './routes/users.routes.js'
import petsRouter from './routes/pets.routes.js'
import adoptionRouter from './routes/adoption.router.js'
import { setupSwagger } from './swagger.js'

const app = express()

setupSwagger(app)

app.use(express.json())
app.use('/api/mocks', mocksRouter)
app.use('/api/users', usersRouter)
app.use('/api/pets', petsRouter)
app.use('/api/adoptions', adoptionRouter)

export { app }
