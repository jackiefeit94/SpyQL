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

  const partyAlibi = await Alibi.findByPk(1)
  const restoAlibi = await Alibi.findByPk(2)
  const museumAlibi = await Alibi.findByPk(3)
  const barAlibi = await Alibi.findByPk(4)
  const classAlibi = await Alibi.findByPk(5)
  const yogaAlibi = await Alibi.findByPk(6)

  const alibiArray = [
    partyAlibi,
    restoAlibi,
    museumAlibi,
    barAlibi,
    classAlibi,
    yogaAlibi
  ]

  //placing guilty suspects at block party
  const guiltyOne = await Suspect.findByPk(4)
  const guiltyTwo = await Suspect.findByPk(8)

  await guiltyOne.setAlibi(partyAlibi)
  await guiltyTwo.setAlibi(partyAlibi)

  await Guest.create({
    first_name: guiltyOne.first_name,
    last_name: guiltyOne.last_name,
    suspectId: guiltyOne.id
  })

  await Guest.create({
    first_name: guiltyTwo.first_name,
    last_name: guiltyTwo.last_name,
    suspectId: guiltyTwo.id
  })

  //creating guests
  for (let i = 9; i < 17; i++) {
    let currentSuspect = await Suspect.findByPk(i)
    await currentSuspect.setAlibi(partyAlibi)
    await Guest.create({
      first_name: currentSuspect.first_name,
      last_name: currentSuspect.last_name,
      suspectId: currentSuspect.id
    })
  }

  //assigning party-goer alibis
  let counter = 17
  for (let i = 1; i <= 8; i++) {
    let guest = await Guest.findByPk(i)
    let date = await Guest.findByPk(counter)
    await guest.setDate(date)
    await date.setDate(guest)
    counter = counter - 1
  }

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
