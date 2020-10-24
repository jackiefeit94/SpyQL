const router = require('express').Router()
const {Alibi} = require('../db/models')
const {sqlMiddleware} = require('./sqlMiddleware')

router.get('/:query/:answer', sqlMiddleware, async (req, res, next) => {
  try {
    console.log('query in route: ', req.params.query)
    console.log('answer in route: ', req.params.answer)
    const data = await Alibi.findAll()
    if (req.params.query === req.params.answer) res.send(data)
    else throw new Error()
  } catch (err) {
    res.send('There may be an issue with your query!')
  }
})
module.exports = router
