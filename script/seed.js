'use strict'

const db = require('../server/db')
const {Suspect} = require('../server/db/models')
const {Evidence} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const seedData = [
    {
      first_name: 'Francine',
      last_name: 'Nell',
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
    },
    {
      first_name: 'Jenny',
      last_name: 'de Berg',
      age: 44,
      location: 'Bronx',
      logged_in_duration: 0.1
    },
    {
      first_name: 'Kent',
      last_name: 'Smith',
      age: 60,
      location: 'Connecticut',
      logged_in_duration: 1.7
    },
    {
      first_name: 'Alexis',
      last_name: 'Sanders',
      age: 50,
      location: 'Manhattan',
      logged_in_duration: 3.8
    },
    {
      first_name: 'Gene',
      last_name: 'Austin',
      age: 39,
      location: 'Jersey',
      logged_in_duration: 2.2
    },
    {
      first_name: 'Tabby',
      last_name: 'Gonzalez',
      age: 48,
      location: 'Brooklyn',
      logged_in_duration: 0.6
    },
    {
      first_name: 'Cornelia',
      last_name: 'Hesse',
      age: 21,
      location: 'Staten Island',
      logged_in_duration: 11.2
    },
    {
      first_name: 'Jasmine',
      last_name: 'Lee',
      age: 49,
      location: 'Manhattan',
      logged_in_duration: 2.7
    },
    {
      first_name: 'Steph',
      last_name: 'Thompson',
      age: 16,
      location: 'Connecticut',
      logged_in_duration: 9.9
    },
    {
      first_name: 'Damian',
      last_name: 'McNair',
      age: 26,
      location: 'Manhattan',
      logged_in_duration: 3.1
    },
    {
      first_name: 'Quentin',
      last_name: 'Jones',
      age: 28,
      location: 'Staten Island',
      logged_in_duration: 7.5
    },
    {
      first_name: 'Sandy',
      last_name: 'Nussbaum',
      age: 34,
      location: 'Manhattan',
      logged_in_duration: 4.1
    },
    {
      first_name: 'Clay',
      last_name: 'Cornwallis',
      age: 21,
      location: 'Bronx',
      logged_in_duration: 8.1
    },
    {
      first_name: 'Jeff',
      last_name: 'Brand',
      age: 80,
      location: 'Queens',
      logged_in_duration: 1.0
    },
    {
      first_name: 'Annie',
      last_name: 'Kadagian',
      age: 19,
      location: 'Manhattan',
      logged_in_duration: 9.2
    },
    {
      first_name: 'Carolyn',
      last_name: 'Borris',
      age: 55,
      location: 'Manhattan',
      logged_in_duration: 0.5
    },
    {
      first_name: 'Britta',
      last_name: 'Janasek',
      age: 31,
      location: 'Connecticut',
      logged_in_duration: 1.9
    },
    {
      first_name: 'Pierce',
      last_name: 'King',
      age: 68,
      location: 'Jersey',
      logged_in_duration: 2.4
    },
    {
      first_name: 'Shirley',
      last_name: 'Brown',
      age: 49,
      location: 'Queens',
      logged_in_duration: 3.3
    },
    {
      first_name: 'Troy',
      last_name: 'Glover',
      age: 38,
      location: 'Manhattan',
      logged_in_duration: 5.0
    },
    {
      first_name: 'Gobi',
      last_name: 'Suram',
      age: 47,
      location: 'Bronx',
      logged_in_duration: 3.1
    },
    {
      first_name: 'Kevin',
      last_name: 'Jackson',
      age: 26,
      location: 'Brooklyn',
      logged_in_duration: 1.3
    },
    {
      first_name: 'Haley',
      last_name: 'Cohen',
      age: 23,
      location: 'Queens',
      logged_in_duration: 4.1
    },
    {
      first_name: 'Jesse',
      last_name: 'Denniston',
      age: 40,
      location: 'Jersey',
      logged_in_duration: 1.1
    },
    {
      first_name: 'Austin',
      last_name: 'Gorelick',
      age: 15,
      location: 'Connecticut',
      logged_in_duration: 6.4
    },
    {
      first_name: 'Madison',
      last_name: 'Rice',
      age: 24,
      location: 'Manhattan',
      logged_in_duration: 4.5
    },
    {
      first_name: 'Bea',
      last_name: 'Sauerbrey',
      age: 49,
      location: 'Jersey',
      logged_in_duration: 3.4
    },
    {
      first_name: 'Thomas',
      last_name: 'Kim',
      age: 29,
      location: 'Manhattan',
      logged_in_duration: 2.1
    },
    {
      first_name: 'Luca',
      last_name: 'Miranda',
      age: 42,
      location: 'Bronx',
      logged_in_duration: 0.3
    },
    {
      first_name: 'Demi',
      last_name: 'Boylan',
      age: 32,
      location: 'Bronx',
      logged_in_duration: 2.0
    },
    {
      first_name: 'Lee',
      last_name: 'Littlefield',
      age: 28,
      location: 'Queens',
      logged_in_duration: 2.8
    },
    {
      first_name: 'Dennis',
      last_name: 'McDonald',
      age: 40,
      location: 'Jersey',
      logged_in_duration: 1.7
    },
    {
      first_name: 'Oscar',
      last_name: 'Thurman',
      age: 75,
      location: 'Queens',
      logged_in_duration: 6.7
    },
    {
      first_name: 'Angela',
      last_name: 'Ford',
      age: 22,
      location: 'Manhattan',
      logged_in_duration: 9.1
    },
    {
      first_name: 'Vera',
      last_name: 'Sprouse',
      age: 36,
      location: 'Brooklyn',
      logged_in_duration: 1.9
    },
    {
      first_name: 'Joe',
      last_name: 'Whitmer',
      age: 65,
      location: 'Brooklyn',
      logged_in_duration: 3.1
    },
    {
      first_name: 'Elena',
      last_name: 'Petrucelli',
      age: 43,
      location: 'Manhattan',
      logged_in_duration: 4.7
    },
    {
      first_name: 'Rachel',
      last_name: 'Ng',
      age: 27,
      location: 'Staten Island',
      logged_in_duration: 5.1
    },
    {
      first_name: 'Tyler',
      last_name: 'Bowen',
      age: 40,
      location: 'Queens',
      logged_in_duration: 4.3
    },
    {
      first_name: 'Queenie',
      last_name: 'Greenwood',
      age: 33,
      location: 'Connecticut',
      logged_in_duration: 5.9
    },
    {
      first_name: 'Derek',
      last_name: 'Hollander',
      age: 41,
      location: 'Manhattan',
      logged_in_duration: 2.9
    }
  ]

  const seedData2 = [
    {
      type: 'item',
      description: 'hammer',
      location: 'crime scene'
    },
    {
      type: 'witness',
      description: 'heard screams at the time of the murder',
      location: 'adjacent apt, building 204'
    },
    {
      type: 'fingerprints',
      description: 'right index and thumbprint',
      location: 'countertops'
    },
    {
      type: 'item',
      description: 'gun',
      location: 'crime scene'
    },
    {
      type: 'fingerprints',
      description: 'left hand',
      location: 'crime scene walls'
    }
  ]

  const suspects = await Promise.all(seedData.map(el => Suspect.create(el)))

  const evidence = await Promise.all(seedData2.map(el => Evidence.create(el)))

  console.log(`seeded ${suspects.length} suspects`)
  console.log(`seeded ${evidence.length} pieces of evidence`)
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
