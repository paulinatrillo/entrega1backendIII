import { Router } from 'express'
import AdoptionModel from '../models/adoption.model.js'

const router = Router()

router.get('/', async (req, res) => {
  const data = await AdoptionModel.find()
  res.json(data)
})


router.get('/:id', async (req, res) => {
  const data = await AdoptionModel.findById(req.params.id)
  res.json(data)
})

router.post('/', async (req, res) => {
  const doc = await AdoptionModel.create(req.body)
  res.status(201).json(doc)
})

router.put('/:id', async (req, res) => {
  const doc = await AdoptionModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(doc)
})

router.delete('/:id', async (req, res) => {
  await AdoptionModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})

export default router
