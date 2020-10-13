import React from 'react'
import {connect} from 'react-redux'
import {fetchQuestion, getAllQuestions} from '../store/questionStore'
import Modal from 'react-modal'
import Axios from 'axios'
import CodeMirror from 'react-codemirror'
import SQL from '../../node_modules/codemirror/mode/sql/sql.js'
import Table from './table'

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
      value: '',
      idx: 0,
      showPrompt: false,
      showQuestion: true,
      showHint: false,
      code: '',
      fields: [],
      rows: [],
      query: '',
      err: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.hintOnClick = this.hintOnClick.bind(this)
    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
    this.formatQuery = this.formatQuery.bind(this)
  }

  componentDidMount() {
    this.props.fetchQuestion()
    this.props.getAllQuestions()
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  //updating state with code in editor
  updateCode(newCode) {
    this.setState({code: newCode})
  }

  handleSubmit(event) {
    event.preventDefault()
    if (
      this.state.value === this.props.question.plotAnswer &&
      this.state.idx <= 3
    ) {
      alert(this.props.question.successText)
      this.setState({
        idx: this.state.idx + 1,
        showPrompt: false,
        showQuestion: true
      })
    } else {
      alert('❗Access Prohibited❗')
    }
    this.setState({value: ''})
  }

  handleQuery() {
    this.setState({
      showPrompt: true,
      showQuestion: false
    })
  }

  //format query to account for '%'
  async formatQuery() {
    let newQuery = ''
    let query = this.state.code
    for (let i = 0; i < query.length; i++) {
      if (query[i] === '%') {
        newQuery += '%25'
      } else {
        newQuery += query[i]
      }
    }
    await this.setState({query: newQuery})
  }

  async createTable() {
    try {
      let {data} = await Axios.get(
        `/api/suspects/${
          this.state.query.length ? this.state.query : this.state.code
        }`,
        {
          params: this.state.code
        }
      )
      this.setState({
        fields: data[1].fields,
        rows: data[1].rows
      })
    } catch (err) {
      this.setState({err: "Don't forget your semicolon!"})
    }
  }

  hintOnClick(e) {
    e.preventDefault()
    this.setState({showHint: !this.state.showHint})
  }

  render() {
    const options = {lineNumbers: true}
    return (
      <div className="level-container">
        <div className="flex-child-left">
          <div id="textbox">
            {this.props.allQs.length &&
              this.state.showQuestion && (
                <p>{this.props.allQs[this.state.idx].prompt}</p>
              )}
            {this.props.allQs.length &&
              this.state.showPrompt && (
                <p>⚠️{this.props.allQs[this.state.idx].plotQuestion}⚠️</p>
              )}
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
              onClick={async () => {
                await this.formatQuery()
                await this.createTable()
                await this.handleQuery()
              }}
            >
              Submit Query!
            </button>
          </div>
          <div id="textbox">
            <form id="form" onSubmit={this.handleSubmit}>
              <label>
                <br />
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" />
            </form>
            <form>
              <button type="submit" onClick={this.hintOnClick}>
                Hint
              </button>
              <div>
                {this.state.showHint ? (
                  <div>{this.props.question.hint}</div>
                ) : null}
              </div>
            </form>
          </div>
        </div>

        <div className="flex-child-right">
          <div id="textbox-table">
            {this.state.err ? (
              <div id="error">{this.state.err}</div>
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

const mapDispatch = dispatch => {
  return {
    fetchQuestion: () => {
      dispatch(fetchQuestion())
    },
    getAllQuestions: () => {
      dispatch(getAllQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelOne)
