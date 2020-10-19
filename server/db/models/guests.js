const Sequelize = require('sequelize')
const db = require('../db')

const Guest = db.define('guests', {
  first_name: Sequelize.TEXT,
  last_name: Sequelize.TEXT
})

module.exports = Guest
