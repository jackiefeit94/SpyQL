//middleware to parse query
const sqlMiddleware = (req, res, next) => {
  //split on new line
  let query = req.params.query.split('/\r?\n/')
  //join on space
  query = query.join(' ')
  const semicolonError = new Error("Don't forget your semicolon!")
  if (query[query.length - 1] !== ';') {
    res.send(semicolonError)
  } else next()
}

module.exports = sqlMiddleware
