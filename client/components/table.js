import React from 'react'

const Table = props => {
  return props.fields.length ? (
    <table>
      <tbody>
        <tr>
          {props.fields.map(column => {
            if (column.name !== 'createdAt' && column.name !== 'updatedAt')
              return <th key={column.columnID}>{column.name}</th>
          })}
        </tr>
        {props.rows.map(row => {
          return (
            <tr key={row.id}>
              {props.fields.map(column => {
                if (column.name !== 'createdAt' && column.name !== 'updatedAt')
                  return <td key={column.columnID}>{row[column.name]}</td>
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
