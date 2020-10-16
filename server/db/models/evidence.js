const Sequelize = require('sequelize')
const db = require('../db')

const Evidence = db.define('evidence', {
  type: Sequelize.TEXT,
  description: Sequelize.TEXT,
  location: Sequelize.TEXT
})

module.exports = Evidence
