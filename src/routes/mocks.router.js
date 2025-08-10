import { Router } from 'express'
import { generateUsersMock } from '../utils/mockingUsers.js'
import UserModel from '../models/user.model.js'
import PetModel from '../models/pet.model.js'
import { generatePetsMock } from '../utils/mockingPets.js' 
const router = Router()

router.get('/mockingpets', (req, res) => {
  const pets = generatePetsMock(20)
  res.json(pets)
})

router.get('/mockingusers', (req, res) => {
  const users = generateUsersMock(50)
  res.json(users)
})

router.post('/generateData', async (req, res) => {
  const { users: usersAmount = 0, pets: petsAmount = 0 } = req.body

  try {
    const users = generateUsersMock(usersAmount)
    const pets = generatePetsMock(petsAmount)

    await UserModel.insertMany(users)
    await PetModel.insertMany(pets)

    res.json({
      message: 'Datos generados e insertados correctamente',
      usersInserted: usersAmount,
      petsInserted: petsAmount
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
