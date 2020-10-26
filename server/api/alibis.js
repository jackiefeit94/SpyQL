const router = require('express').Router()
const {Alibi} = require('../db/models')
const {levelTwoMiddleware} = require('./sqlMiddleware')

//Level Two Backend Route
router.get('/:query/:answer', levelTwoMiddleware, async (req, res, next) => {
  try {
    const data = await Alibi.findAll()
    if (req.params.query === req.params.answer) res.send(data)
    else throw new Error()
  } catch (err) {
    res.send('There may be an issue with your query!')
  }
})
module.exports = router
