import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Axios from 'axios'
import CodeMirror from 'react-codemirror'
import SQL from '../../node_modules/codemirror/mode/sql/sql.js'

/**
 * COMPONENT
 */
class LevelThree extends React.Component {
  constructor() {
    super()
    this.state = {
      code: '',
      data: []
    }
    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
  }

  //updating state with code in  editor
  updateCode(newCode) {
    this.setState({code: newCode})
  }

  //helper function to create table based on code in editor
  async createTable() {
    let {data} = await Axios.get(`/api/suspects/${this.state.code}`, {
      params: this.state.code
    })
    this.setState({data: data})
  }

  render() {
    const options = {lineNumbers: true}

    return (
      <div>
        <h3>This is Level Three</h3>
        {/* code editor component */}
        <CodeMirror
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
          mode={SQL}
        />
        <button type="submit" onClick={this.createTable}>
          Submit Query!
        </button>
        <div>
          {/* table from db */}
          <table>
            <tbody>
              <tr>
                {this.state.data.length ? (
                  this.state.data[1].fields.map(column => {
                    return <th key={column.columnID}>{column.name}</th>
                  })
                ) : (
                  <th id="pre-render" />
                )}
              </tr>
              {this.state.data.length ? (
                this.state.data[1].rows.map(row => {
                  return (
                    <tr key={row.id}>
                      {this.state.data[1].fields.map(column => {
                        return <td key={column.columnID}>{row[column.name]}</td>
                      })}
                    </tr>
                  )
                })
              ) : (
                <tr id="pre-render" />
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default LevelThree
