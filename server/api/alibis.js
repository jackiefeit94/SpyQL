const router = require('express').Router()
const {Alibi} = require('../db/models')
const {sqlMiddleware} = require('./sqlMiddleware')

router.get('/:query/:answer', sqlMiddleware, async (req, res, next) => {
  try {
    const data = await Alibi.findAll()
    console.log('query: ', req.params.query, 'answer: ', req.params.answer)
    if (req.params.query === req.params.answer) res.send(data)
  } catch (err) {
    res.send('There may be an issue with your query!')
  }
})
module.exports = router
