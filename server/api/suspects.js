const router = require('express').Router()
const client = require('../db')
const sqlMiddleware = require('./sqlMiddleware')

router.get('/:query', sqlMiddleware, async (req, res, next) => {
  try {
    const data = await client.query(req.params.query)
    res.send(data)
  } catch (err) {
    next(err)
  }
})
module.exports = router
