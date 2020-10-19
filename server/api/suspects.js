const router = require('express').Router()
const client = require('../db')
const {disableMiddleware, sqlMiddleware} = require('./sqlMiddleware')

router.get(
  '/:query',
  sqlMiddleware,
  disableMiddleware,
  async (req, res, next) => {
    try {
      const data = await client.query(req.params.query)
      res.send(data)
    } catch (err) {
      res.send('There may be an issue with your query!')
    }
  }
)
module.exports = router
