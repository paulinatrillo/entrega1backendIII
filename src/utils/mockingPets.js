import { faker } from '@faker-js/faker'

export function generatePetsMock(amount) {
  const pets = []
  for (let i = 0; i < amount; i++) {
    pets.push({
      name: faker.animal.type(),
      type: faker.animal.type(),
      age: faker.datatype.number({ min: 1, max: 15 }),
      owner: null
    })
  }
  return pets
}
