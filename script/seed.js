'use strict'

const db = require('../server/db')
const {Suspect, Guest, Alibi} = require('../server/db/models')
const {seedSuspects, seedAlibis, seedGuests} = require('./data')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const suspects = await Promise.all(seedSuspects.map(el => Suspect.create(el)))
  const alibis = await Promise.all(seedAlibis.map(el => Alibi.create(el)))
  const guests = await Promise.all(seedGuests.map(el => Guest.create(el)))

  console.log(
    `seeded ${suspects.length} suspects, ${alibis.length} alibis, and ${
      guests.length
    } guests`
  )
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
