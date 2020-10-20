import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import Axios from 'axios'
import Table from './table'
import FakeTerminal from './FakeTerminal'

/**
 * COMPONENT
 */

Modal.setAppElement(document.getElementById('form'))

class LevelOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [],
      rows: [],
      query: '',
      err: ''
    }

    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
    this.formatQuery = this.formatQuery.bind(this)
  }

  //updating state with code in editor
  updateCode(newCode) {
    this.setState({query: newCode})
  }

  //format query to account for '%'
  formatQuery() {
    let newQuery = ''
    let query = this.state.query
    for (let i = 0; i < query.length; i++) {
      if (query[i] === '%') {
        newQuery += '%25'
      } else {
        newQuery += query[i]
      }
    }
    this.setState({query: newQuery})
  }

  async createTable() {
    let {data} = await Axios.get(`/api/suspects/${this.state.query}`, {
      params: this.state.query
    })
    if (typeof data !== 'string') {
      this.setState({
        fields: data[1].fields,
        rows: data[1].rows,
        err: ''
      })
    } else {
      this.setState({err: data})
    }
  }
  componentWillMount() {
    Promise.all([
      localStorage.getItem('fields'),
      localStorage.getItem('rows'),
      localStorage.getItem('query'),
      localStorage.getItem('err')
    ]).then(() => {
      this.setState({
        fields: JSON.parse(localStorage.getItem('fields')),
        rows: JSON.parse(localStorage.getItem('rows')),
        query: JSON.parse(localStorage.getItem('query')),
        err: JSON.parse(localStorage.getItem('err'))
      })
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('fields', JSON.stringify(nextState.fields))
    localStorage.setItem('rows', JSON.stringify(nextState.rows))
    localStorage.setItem('query', JSON.stringify(nextState.query))
    localStorage.setItem('err', JSON.stringify(nextState.err))
  }
  render() {
    const options = {lineNumbers: true}
    return (
      <div className="level-container">
        {/* flex left */}
        <div className="flex-child-left">
          <FakeTerminal
            state={this.state}
            options={options}
            updateCode={this.updateCode}
            formatQuery={this.formatQuery}
            createTable={this.createTable}
            handleQuery={this.handleQuery}
            err={this.state.err}
          />
        </div>

        {/* flex right */}
        <div className="flex-child-right">
          <div id="textbox-table">
            {this.state.err ? (
              <div />
            ) : (
              <Table fields={this.state.fields} rows={this.state.rows} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    question: state.question.currentQ,
    allQs: state.question.allQs
  }
}

export default connect(mapState)(LevelOne)
