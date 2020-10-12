'use strict'

const db = require('../server/db')
const {Suspect} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const seedData = [
    {
      first_name: 'Francie',
      last_name: 'Nolan',
      age: 11,
      location: 'Brooklyn',
      logged_in_duration: 3.2
    },
    {
      first_name: 'Johnny',
      last_name: 'Cinder',
      age: 67,
      location: 'Jersey',
      logged_in_duration: 11.3
    },
    {
      first_name: 'Taylor',
      last_name: 'Greenfield',
      age: 44,
      location: 'Manhattan',
      logged_in_duration: 5.1
    },
    {
      first_name: 'Stephen',
      last_name: 'Brottslig',
      age: 31,
      location: 'Manhattan',
      logged_in_duration: 4.1
    },
    {
      first_name: 'Catherine',
      last_name: 'Rousseau',
      age: 20,
      location: 'Manhattan',
      logged_in_duration: 4.7
    },
    {
      first_name: 'Stevie',
      last_name: 'Phillips',
      age: 29,
      location: 'Brooklyn',
      logged_in_duration: 5.9
    },
    {
      first_name: 'Stella',
      last_name: 'Jackson',
      age: 71,
      location: 'Manhattan',
      logged_in_duration: 2.2
    },
    {
      first_name: 'Stefan',
      last_name: 'Verbrecher',
      age: 30,
      location: 'Manhattan',
      logged_in_duration: 5.6
    },
    {
      first_name: 'Alfred',
      last_name: 'Armstrong',
      age: 80,
      location: 'Queens',
      logged_in_duration: 9.9
    },
    {
      first_name: 'Freda',
      last_name: 'Nielsen',
      age: 50,
      location: 'Manhattan',
      logged_in_duration: 1.6
    }
  ]

  const suspects = await Promise.all(seedData.map(el => Suspect.create(el)))

  console.log(`seeded ${suspects.length} suspects`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
