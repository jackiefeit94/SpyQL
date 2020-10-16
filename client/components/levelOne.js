import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import Axios from 'axios'
import Table from './table'
import FakeTerminal from './FakeTerminal'
import Popup from 'react-animated-popup'

/**
 * COMPONENT
 */

//Style needs to be incorporated
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }

Modal.setAppElement(document.getElementById('form'))

class LevelOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
      fields: [],
      rows: [],
      query: '',
      err: '',
      visible: false
    }

    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
    this.formatQuery = this.formatQuery.bind(this)
  }

  //updating state with code in editor
  updateCode(newCode) {
    this.setState({code: newCode})
  }

  //format query to account for '%'
  formatQuery() {
    let newQuery = ''
    let query = this.state.code
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
    let {data} = await Axios.get(
      `/api/suspects/${
        this.state.query.length ? this.state.query : this.state.code
      }`,
      {
        params: this.state.query.length ? this.state.query : this.state.code
      }
    )
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
          <button
            type="submit"
            onClick={() => this.setState({visible: !this.state.visible})}
          >
            Teach me
          </button>
          <Popup
            visible={this.state.visible}
            onClose={() => this.setState({visible: false})}
          >
            <p>
              <img id="hint" src="https://i.imgur.com/rxPQk9m.png" />
            </p>
          </Popup>
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
