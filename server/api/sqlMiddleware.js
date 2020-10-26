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
  'table'
]

//array of allowed terms
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
  'key',
  'as',
  'null;',
  'date;',
  'value:',
  'values',
  'is'
]

//handle postgres quotation on mixed-case column names
const quotationIndices = ['alibiId', 'suspectId', 'guestId', 'dateId']

//middleware to parse query

const sqlMiddleware = (req, res, next) => {
  let query = req.params.query
  //handle postgres quotation on mixed-case column names
  for (let i = 0; i < quotationIndices.length; i++) {
    query = query.split(quotationIndices[i])
    if (query.length > 1) {
      query = query.join(`"${quotationIndices[i]}"`)
    } else {
      query = query.join('')
    }
  }
  let newQuery = query.split('\n')
  newQuery = newQuery.map(line => {
    return line.trim()
  })
  //handle capitalization
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
  //semicolon error handler
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

const levelTwoMiddleware = (req, res, next) => {
  let query = req.params.query
  let newQuery = query.split('\n')
  newQuery = newQuery.map(line => {
    return line.trim()
  })
  //handle capitalization
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
  newQuery = newQuery.join(' ').trim()
  //semicolon error handler
  if (newQuery[newQuery.length - 1] !== ';') {
    res.send("Don't forget your semicolon!")
  } else {
    req.params.query = newQuery
  }
  next()
}

//middleware to prohibit players from altering table
const disableMiddleware = (req, res, next) => {
  let query = req.params.query
  let newQuery = req.params.query
  if (query[query.length - 1] === ';') {
    query = query.slice(0, -1).split(' ')
  }
  let isProhibited = false
  //search for prohibited terms in query
  for (let i = 0; i < query.length; i++) {
    let word = query[i].toLowerCase()
    if (!prohibited.includes(word)) {
      continue
    } else {
      isProhibited = true
    }
  }
  //prohibited terms error handler
  if (isProhibited) {
    res.send('This command is prohibited!')
  } else {
    req.params.query = newQuery
  }
  next()
}

module.exports = {sqlMiddleware, disableMiddleware, levelTwoMiddleware}
