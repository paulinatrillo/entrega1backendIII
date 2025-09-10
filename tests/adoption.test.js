import request from 'supertest'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { app } from '../src/app.js'
import AdoptionModel from '../src/models/adoption.model.js'

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.connect(uri)
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

beforeEach(async () => {
  await AdoptionModel.deleteMany({})
})

describe('Adoption router - functional tests', () => {
  test('GET /api/adoptions -> 200 and array', async () => {
    const res = await request(app).get('/api/adoptions')
    expect([200, 201]).toContain(res.status)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test('POST /api/adoptions -> create and return doc', async () => {
    const payload = { petName: 'Lucho', adopterName: 'Paulina', contact: 'paulina@example.com' }
    const res = await request(app).post('/api/adoptions').send(payload)
    expect([200, 201]).toContain(res.status)
    expect(res.body).toHaveProperty('_id')
    expect(res.body.petName).toBe(payload.petName)
  })

  test('GET /api/adoptions/:id -> success', async () => {
    const doc = await AdoptionModel.create({ petName: 'Lucho', adopterName: 'Paulina', contact: 'paulina@example.com' })
    const res = await request(app).get(`/api/adoptions/${doc._id}`)
    expect(res.status).toBe(200)
    expect(String(res.body._id)).toBe(String(doc._id))
  })

  test('PUT /api/adoptions/:id -> update document', async () => {
    const doc = await AdoptionModel.create({ petName: 'Lucho', adopterName: 'Paulina', contact: 'paulina@example.com' })
    await request(app).put(`/api/adoptions/${doc._id}`).send({ adopterName: 'Lucía' })
    const updated = await AdoptionModel.findById(doc._id)
    expect(updated.adopterName).toBe('Lucía')
  })

  test('DELETE /api/adoptions/:id -> delete document', async () => {
    const doc = await AdoptionModel.create({ petName: 'Lucho', adopterName: 'Paulina', contact: 'paulina@example.com' })
    await request(app).delete(`/api/adoptions/${doc._id}`)
    const found = await AdoptionModel.findById(doc._id)
    expect(found).toBeNull()
  })
})
