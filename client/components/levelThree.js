import React from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import Table from './table'
import clock from './clock'
import {CodeEditor} from './CodeEditor'
import Typed from 'react-typed'
import {getLevelThreeQuestions} from '../store/questionStore'

class LevelThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [],
      rows: [],
      query: '',
      err: '',
      displayMessage: `prompt1 <br>`,
      questionIdx: 0,
      answer: ''
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
    this.props.getLevelThreeQuestions()
  }

  handleQuery() {
    this.typed.reset()
    if (this.state.err.length) {
      this.setState({displayMessage: this.state.err})
    } else {
      this.setState({
        displayMessage: this.props.allQs[this.state.questionIdx].plotQuestion
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
        displayMessage:
          this.props.allQs[this.state.questionIdx].successText +
          ` \n ` +
          this.props.allQs[this.state.questionIdx + 1].prompt,
        questionIdx: this.state.questionIdx + 1,
        answer: ''
      })
    } else if (
      this.state.answer ===
        this.props.allQs[this.state.questionIdx].plotAnswer &&
      this.state.questionIdx === 4
    ) {
      this.setState({
        displayMessage: this.props.allQs[this.state.questionIdx].successText
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

  //needs to be edited
  async createTable() {
    let {data} = await Axios.get(`/api/suspects/${this.state.query}`)
    console.log('query: ', this.state.query)
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
                <br />
              </div>
              <button
                type="submit"
                onClick={() => {
                  this.typed.reset()
                  this.setState({
                    displayMessage: this.props.allQs[this.state.questionIdx]
                      .hint
                  })
                }}
              >
                Teach me
              </button>
            </div>
            <form id="form">
              <label>
                <br />
                <input
                  type="text"
                  value={this.state.answer}
                  onChange={this.handleChange}
                  onKeyDown={this.enterKeyDown}
                />
              </label>
            </form>
          </div>

          {/* flex right */}
          <div className="item flex-child-right">
            <div id="textbox-table">
              {this.state.err ? (
                <div />
              ) : (
                <Table fields={this.state.fields} rows={this.state.rows} />
              )}
            </div>
            <CodeEditor
              options={options}
              updateCode={this.updateCode}
              formatQuery={this.formatQuery}
              createTable={this.createTable}
              handleQuery={this.handleQuery}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    allQs: state.question.allQs
  }
}

const mapDispatch = dispatch => {
  return {
    getLevelThreeQuestions: () => {
      dispatch(getLevelThreeQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelThree)
