import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

export function generateUsersMock(amount) {
  const users = []
  const passwordHash = bcrypt.hashSync('coder123', 10)

  for (let i = 0; i < amount; i++) {
    users.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: passwordHash,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: [],
      age: faker.datatype.number({ min: 18, max: 80 }),
      phone: faker.phone.number(),
      avatar: faker.image.avatar()
    })
  }
  return users
}
