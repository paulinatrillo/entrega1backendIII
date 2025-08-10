import { Router } from 'express'
import PetModel from '../models/pet.model.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const pets = await PetModel.find()
    res.json(pets)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
