import React from 'react'

const Table = props => {
  return props.fields.length ? (
    <table id="scroll">
      <tbody>
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
