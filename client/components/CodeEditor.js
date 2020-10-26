import React from 'react'
import CodeMirror from 'react-codemirror'
import SQL from '../../node_modules/codemirror/mode/sql/sql.js'

export const CodeEditor = props => {
  return (
    <div>
      <CodeMirror
        onChange={props.updateCode}
        options={props.options}
        mode={SQL}
      />
      <button
        type="submit"
        className="button1"
        onClick={async () => {
          await props.formatQuery()
          if (props.id !== undefined) {
            await props.createTable(props.id)
          } else {
            await props.createTable()
          }
          await props.handleQuery()
        }}
      >
        Submit Query!
      </button>
    </div>
  )
}
