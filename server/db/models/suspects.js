const Sequelize = require('sequelize')
const db = require('../db')

const Suspect = db.define('suspects', {
  first_name: Sequelize.TEXT,
  last_name: Sequelize.TEXT,
  age: Sequelize.INTEGER,
  location: Sequelize.TEXT,
  logged_in_duration: Sequelize.FLOAT
})

module.exports = Suspect
