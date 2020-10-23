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
  'update',
  'add'
]

const allowed = [
  'select',
  'from',
  'where',
  'between',
  'into',
  'union',
  'inner',
  'outer',
  'left',
  'right',
  'join',
  'order',
  'by'
]

const indices = ['alibiId', 'suspectId', 'guestId']

//middleware to parse query
const sqlMiddleware = (req, res, next) => {
  let query = req.params.query
  //handle quotes for joins
  for (let i = 0; i < indices.length; i++) {
    while (query.indexOf(indices[i]) !== -1) {
      let frontIndex = req.params.query.indexOf(indices[i])
      let backIndex = frontIndex + indices[i].length + 1
      query = req.params.query.split('')
      query.splice(frontIndex, 0, '"')
      query.splice(backIndex, 0, '"')
    }
  }
  //if encountered quotes, join string back together
  if (Array.isArray(query)) {
    query = query.join('')
  }
  //split on new line and trim
  let newQuery = query.split('\n')
  newQuery = newQuery.map(line => {
    return line.trim()
  })

  //join on new line and split on space
  newQuery = newQuery.join(' ')
  newQuery = newQuery.split(' ')

  newQuery.forEach((word, i) => {
    word = word.trim()
    if (
      allowed.includes(word.toLowerCase()) ||
      prohibited.includes(word.toLowerCase())
    ) {
      newQuery[i] = word.toLowerCase()
    }
  })
  //join on space and trim
  newQuery = newQuery.join(' ').trim()

  req.params.query = newQuery.trim()
  if (newQuery[newQuery.length - 1] !== ';') {
    res.send("Don't forget your semicolon!")
  } else next()
}

//middleware to prohibit players from altering table

const disableMiddleware = (req, res, next) => {
  let query = req.params.query
  if (query[query.length - 1] === ';') {
    query = query.slice(0, -1).split(' ')
  }
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
