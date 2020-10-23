import React from 'react'

const Table = props => {
  console.log('props: ', props)
  return props.fields.length ? (
    <table id="scroll">
      <tbody>
        <tr>
          {props.fields.map((column, i) => {
            console.log('column', column)
            if (column.name !== 'createdAt' && column.name !== 'updatedAt')
              return <th key={i}>{column.name}</th>
          })}
        </tr>
        {props.rows.map(row => {
          return (
            <tr key={row.id}>
              {props.fields.map((column, i) => {
                console.log('row[column.name]', row[column.name])
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
