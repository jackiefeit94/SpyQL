import React from 'react'
import CodeMirror from 'react-codemirror'
import SQL from '../../node_modules/codemirror/mode/sql/sql.js'

export const CodeEditor = props => {
  return (
    <div>
      <CodeMirror
        value={props.code}
        onChange={props.updateCode}
        options={props.options}
        mode={SQL}
      />
      <button
        type="submit"
        className="button1"
        onClick={async () => {
          await props.formatQuery()
          await props.createTable()
          await props.handleQuery()
        }}
      >
        Submit Query!
      </button>
    </div>
  )
}
