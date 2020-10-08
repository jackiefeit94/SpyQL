const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  prompt: {
    type: Sequelize.TEXT
  },
  hint: {
    type: Sequelize.TEXT
  }
})

module.exports = Question
