import { Router } from 'express'
import UserModel from '../models/user.model.js'

const router = Router()

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
router.post('/', async (req, res) => {
  try {
    const user = await UserModel.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:id', async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    res.json({ message: 'Usuario eliminado exitosamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
