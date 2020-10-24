import React from 'react'

const Table = props => {
  const getTitle = levelProps => {
    let title
    if (levelProps.level === 1) {
      title = 'Suspects'
    } else if (levelProps.level === 2) {
      title = 'Alibis'
    } else if (levelProps.level === 3 && props.idx === 0) {
      title = 'Alibis-Suspects'
    } else {
      title = 'Guests'
    }
    return title
  }

  let title = getTitle(props)

  return props.fields.length ? (
    <table id="scroll">
      <tbody>
        <tr>
          <th>{title}</th>
        </tr>
        <tr>
          {props.fields.map((column, i) => {
            if (column.name !== 'createdAt' && column.name !== 'updatedAt')
              return <th key={i}>{column.name}</th>
          })}
        </tr>
        {props.rows.map(row => {
          return (
            <tr key={row.id}>
              {props.fields.map((column, i) => {
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
