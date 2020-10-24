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
  'add',
  'column',
  'table',
  'value:',
  'value'
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
  'by',
  'text',
  'primary',
  'key'
]

const quotationIndices = ['alibiId', 'suspectId', 'guestId', 'dateId']

//middleware to parse query
const sqlMiddleware = (req, res, next) => {
  let query = req.params.query
  //handle quotes for joins on entire query string
  for (let i = 0; i < quotationIndices.length; i++) {
    while (query.indexOf(quotationIndices[i]) !== -1) {
      let frontIndex = req.params.query.indexOf(quotationIndices[i])
      let backIndex = frontIndex + quotationIndices[i].length + 1
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

  //join on space and split on space to handle capitalization
  newQuery = newQuery.join(' ')
  newQuery = newQuery.split(' ')
  newQuery = newQuery.map(word => {
    let placeHolderWord = word.trim().toLowerCase()
    if (
      allowed.includes(placeHolderWord) ||
      prohibited.includes(placeHolderWord)
    ) {
      word = placeHolderWord
    }
    return word
  })

  //handle ordering if no order by in query and no join
  let orderBy = ' order by id '
  let bool = false
  if (newQuery.includes('order') || newQuery.includes('join')) {
    bool = true
  }
  newQuery = newQuery.join(' ').trim()
  //join on space and trim
  if (newQuery[newQuery.length - 1] !== ';') {
    res.send("Don't forget your semicolon!")
  } else if (!bool) {
    newQuery = newQuery.split(';')
    req.params.query = newQuery[0] + orderBy + newQuery[1]
  } else {
    req.params.query = newQuery
  }
  next()
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
