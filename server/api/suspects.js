const router = require('express').Router()
const client = require('../db')
const {disableMiddleware, sqlMiddleware} = require('./sqlMiddleware')

router.get(
  '/:query',
  sqlMiddleware,
  disableMiddleware,
  async (req, res, next) => {
    try {
      console.log('we are inside try')
      const data = await client.query(req.params.query)
      res.send(data)
    } catch (err) {
      console.log('we are inside catch')
      next(err)
    }
  }
)
module.exports = router
