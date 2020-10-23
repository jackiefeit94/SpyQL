const Sequelize = require('sequelize')
const db = require('../db')

const Alibi = db.define('alibis', {
  location: Sequelize.TEXT
})

module.exports = Alibi
