import React from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import Table from './table'
import clock from './clock'
import {CodeEditor} from './CodeEditor'
import Typed from 'react-typed'
import {getLevelOneQuestions} from '../store/questionStore'
import history from '../history'

class LevelOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [],
      rows: [],
      query: '',
      err: '',
      displayMessage: `I knew I could count on you. Here’s the deal: there’s been a breach. Someone has stolen a document containing the data of millions of civilians.
        If we don’t find the source and stop it before the timer runs out, people’s personal information could be compromised…<br><br>

        We’ve come up with a list of suspects, so your first task will be to find that list and examine it.<br><br>

        Not sure how? Just hit "Query Hint."`,
      questionIdx: 0,
      answer: '',
      clue: '',
      submitField: false
    }

    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
    this.formatQuery = this.formatQuery.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.enterKeyDown = this.enterKeyDown.bind(this)
  }

  componentDidMount() {
    this.props.getLevelOneQuestions()
  }

  handleQuery() {
    this.typed.reset()
    if (this.state.err.length) {
      this.setState({displayMessage: this.state.err})
    } else {
      this.setState({
        displayMessage: this.props.allQs[this.state.questionIdx].plotQuestion,
        submitField: true
      })
    }
  }

  handleChange(event) {
    this.setState({answer: event.target.value})
  }

  enterKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.handleSubmit(event)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.typed.reset()
    if (
      this.state.answer ===
        this.props.allQs[this.state.questionIdx].plotAnswer &&
      this.state.questionIdx <= 3
    ) {
      this.setState({
        displayMessage: this.props.allQs[this.state.questionIdx].successText,
        questionIdx: this.state.questionIdx + 1,
        answer: '',
        clue: this.props.allQs[this.state.questionIdx].clue,
        submitField: false
      })
    } else if (
      this.state.answer ===
        this.props.allQs[this.state.questionIdx].plotAnswer &&
      this.state.questionIdx === 4
    ) {
      this.setState({
        displayMessage: this.props.allQs[this.state.questionIdx].successText,
        questionIdx: this.state.questionIdx + 1,
        submitField: false
      })
    } else {
      this.setState({
        displayMessage: "That isn't quite right. Try again?"
      })
    }
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
      } else if (query[i] === '\n') {
        newQuery += '%0A'
      } else {
        newQuery += query[i]
      }
    }
    this.setState({query: newQuery})
  }

  async createTable() {
    let {data} = await Axios.get(`/api/suspects/${this.state.query}`)
    let index
    if (data[1].fields) {
      for (let i = 0; i < data[1].fields.length; i++) {
        if (data[1].fields[i].name === 'alibiId') {
          index = i
        }
      }

      if (index !== undefined) {
        data[1].fields.splice(index, 1)
      }
    }
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
      <div>
        <div id="clock">{clock()}</div>

        <div className="level-container">
          {/* flex left */}
          <div className="item flex-child-left">
            <div id="text-editor-wrap">
              <div className="title-bar">
                <span className="title">
                  🔒Confidential-File - bash - 80x24
                </span>
              </div>
              <div className="text-body">
                {this.props.allQs.length && (
                  <Typed
                    strings={['$ ' + this.state.displayMessage]}
                    typedRef={typed => {
                      this.typed = typed
                    }}
                    typeSpeed={35}
                  />
                )}
              </div>
              <br />
              {this.state.submitField ? (
                <form id="form">
                  {'>>'}
                  <input
                    type="text"
                    value={this.state.answer}
                    onChange={this.handleChange}
                    onKeyDown={this.enterKeyDown}
                  />
                </form>
              ) : null}
              {this.state.clue.length > 0 && (
                <button
                  type="submit"
                  onClick={() => {
                    this.typed.reset()
                    this.setState({
                      displayMessage: this.props.allQs[this.state.questionIdx]
                        .prompt,
                      clue: ''
                    })
                  }}
                >
                  <img id="clue" src={this.state.clue} />
                </button>
              )}
            </div>
            {this.state.questionIdx === 5 ? (
              <button onClick={() => history.push('/LevelTwo')} type="submit">
                ✉️
              </button>
            ) : null}
          </div>

          {/* flex right */}
          <div className="item flex-child-right">
            <div id="textbox-table">
              {this.state.err ? (
                <div />
              ) : (
                <Table
                  level={this.props.level}
                  idx={this.state.questionIdx}
                  fields={this.state.fields}
                  rows={this.state.rows}
                />
              )}
            </div>
            <CodeEditor
              options={options}
              updateCode={this.updateCode}
              formatQuery={this.formatQuery}
              createTable={this.createTable}
              handleQuery={this.handleQuery}
            />
            <button
              className="hint-button"
              type="submit"
              onClick={() => {
                this.typed.reset()
                this.setState({
                  displayMessage: this.props.allQs[this.state.questionIdx].hint
                })
              }}
            >
              Query Hint
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    allQs: state.question.allQs,
    level: state.question.level
  }
}

const mapDispatch = dispatch => {
  return {
    getLevelOneQuestions: () => {
      dispatch(getLevelOneQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelOne)
