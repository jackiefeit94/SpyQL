const router = require('express').Router()
const client = require('../db')

router.get('/:query', async (req, res, next) => {
  try {
    const data = await client.query(req.params.query)
    res.send(data)
  } catch (err) {
    next(err)
  }
})
module.exports = router
