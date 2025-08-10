import mongoose from 'mongoose'

const petSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  age: Number,
  owner: String
})

const PetModel = mongoose.model('Pet', petSchema)
export default PetModel
