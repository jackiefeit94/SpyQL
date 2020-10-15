//array of prohibited terms
const prohibited = [
  'insert',
  'create',
  'alter',
  'call',
  'declare',
  'delete',
  'drop',
  'grant',
  'insert',
  'lock',
  'merge',
  'rename',
  'revoke',
  'set',
  'truncate',
  'update'
]

//middleware to parse query
const sqlMiddleware = (req, res, next) => {
  //split on new line
  let query = req.params.query.split('/\r?\n/')
  //join on space
  query = query.join(' ')
  if (query[query.length - 1] !== ';') {
    res.send("Don't forget your semicolon!")
  } else next()
}

//middleware to prohibit players from altering table

const disableMiddleware = (req, res, next) => {
  let query = req.params.query.toLowerCase().split(' ')
  let isProhibited = false
  for (let i = 0; i < query.length; i++) {
    if (!prohibited.includes(query[i])) {
      continue
    } else {
      isProhibited = true
    }
  }
  if (isProhibited) {
    res.send('This command is prohibited!')
  } else next()
}

module.exports = {sqlMiddleware, disableMiddleware}
