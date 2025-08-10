import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  pets: Array,
  age: Number,
  phone: String,
  avatar: String
})

const UserModel = mongoose.model('User', userSchema)
export default UserModel