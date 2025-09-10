import mongoose from 'mongoose'

const adoptionSchema = new mongoose.Schema({
  petName: String,
  adopterName: String,
  contact: String
})

export default mongoose.model('Adoption', adoptionSchema)
