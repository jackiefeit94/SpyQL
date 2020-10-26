import React from 'react'

const Table = props => {
  //ordering fields and rows for level 3
  let newPropsFields
  let newPropsRows

  //helper function to order columns properly
  const orderColumns = fields => {
    let newFields = []
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].tableID === 2292866) {
        newFields.push(fields[i])
      }
    }
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].tableID === 2292855 && fields[i].name !== 'id') {
        newFields.push(fields[i])
      }
    }
    return newFields
  }

  //helper function to order rows properly
  const orderRows = rows => {
    newPropsRows = rows.slice()
    newPropsRows.sort((a, b) => (a.id > b.id ? 1 : -1))
    return newPropsRows
  }

  /* helper function to render table name */
  const getTitle = levelProps => {
    let title
    if (levelProps.level === 1) {
      title = 'Suspects'
    } else if (levelProps.level === 2) {
      title = 'Alibis'
    } else if (
      levelProps.level === 3 &&
      props.idx === 0 &&
      props.fields.length
    ) {
      title = 'Alibis-Suspects'
      newPropsFields = orderColumns(props.fields)
      newPropsRows = orderRows(props.rows)
    } else {
      title = 'Guests'
    }
    return title
  }

  /* get name of table */
  let title = getTitle(props)

  //check if we've ordered columns and/or rows
  let finalFields = newPropsFields ? newPropsFields : props.fields
  let finalRows = newPropsRows ? newPropsRows : props.rows

  return props.fields.length ? (
    <table id="scroll">
      <tbody>
        <tr>
          <th>{title}</th>
        </tr>
        <tr>
          {finalFields.map((column, i) => {
            if (column.name !== 'createdAt' && column.name !== 'updatedAt')
              return <th key={i}>{column.name}</th>
          })}
        </tr>
        {finalRows.map(row => {
          return (
            <tr key={row.id}>
              {finalFields.map((column, i) => {
                if (column.name !== 'createdAt' && column.name !== 'updatedAt')
                  return <td key={i}>{row[column.name]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  ) : (
    <div />
  )
}

export default Table
