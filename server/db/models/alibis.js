const Sequelize = require('sequelize')
const db = require('../db')

const Alibi = db.define('alibis', {
  location: Sequelize.TEXT,
  date: Sequelize.DATE
})

module.exports = Alibi
