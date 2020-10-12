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
      fields: [],
      rows: []
    }
    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
  }

  //updating state with code in editor
  updateCode(newCode) {
    this.setState({code: newCode})
  }

  //helper function to create table based on code in editor
  async createTable() {
    let {data} = await Axios.get(`/api/suspects/${this.state.code}`, {
      params: this.state.code
    })
    this.setState({
      fields: data[1].fields,
      rows: data[1].rows
    })
  }

  render() {
    const options = {lineNumbers: true}

    return (
      <div className="level-container">
        <div className="flex-child-left">
          <div id="textbox">
            <p>Welcome, Special Agent Q...</p>
          </div>
          <div id="textbox">
            <CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              options={options}
              mode={SQL}
            />
            <button
              type="submit"
              className="button1"
              onClick={this.createTable}
            >
              Submit Query!
            </button>
          </div>
          <div id="textbox">
            <p>Enter more queries here.</p>
          </div>
        </div>

        <div className="flex-child-right">
          <div id="textbox-table">
            {/* table from db */}
            {this.state.fields.length ? (
              <table>
                <tbody>
                  <tr>
                    {this.state.fields.map(column => {
                      if (
                        column.name !== 'createdAt' &&
                        column.name !== 'updatedAt'
                      )
                        return <th key={column.columnID}>{column.name}</th>
                    })}
                  </tr>
                  {this.state.rows.map(row => {
                    return (
                      <tr key={row.id}>
                        {this.state.fields.map(column => {
                          if (
                            column.name !== 'createdAt' &&
                            column.name !== 'updatedAt'
                          )
                            return (
                              <td key={column.columnID}>{row[column.name]}</td>
                            )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LevelThree
