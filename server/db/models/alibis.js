const Sequelize = require('sequelize')
const db = require('../db')

const Alibi = db.define('alibis', {
  place: Sequelize.TEXT
})

module.exports = Alibi
