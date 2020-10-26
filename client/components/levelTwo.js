import React from 'react'
import {connect} from 'react-redux'
import {CodeEditor} from './CodeEditor'
import Typed from 'react-typed'
import Axios from 'axios'
import Table from './table'
import {getLevelTwoQuestions} from '../store/questionStore'
import clock from './clock'

class LevelTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: [],
      rows: [],
      query: '',
      err: '',
      displayMessage:
        'We’ve got our list of suspects narrowed down. Let’s make a new table so we can start recording alibis…',
      questionIdx: 0
    }

    this.updateCode = this.updateCode.bind(this)
    this.createTable = this.createTable.bind(this)
    this.formatQuery = this.formatQuery.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.getLevelTwoQuestions()
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

  async createTable(idx) {
    let table = this.props.allQs[idx]
    // check query in backend for semicolon, new-lines, parens
    let {data} = await Axios.get(
      `/api/alibis/${this.state.query}/${table.plotAnswer}`
    )
    if (typeof data !== 'string') {
      this.setState({
        fields: table.data.fields,
        rows: table.data.rows,
        err: ''
      })
    } else {
      this.setState({err: data})
    }
  }

  handleQuery() {
    this.typed.reset()
    if (this.state.err.length) {
      this.setState({displayMessage: this.state.err})
    } else {
      this.setState({
        questionIdx: this.state.questionIdx + 1
      })
      this.state.questionIdx < 6
        ? this.setState({
            displayMessage: this.props.allQs[this.state.questionIdx].prompt
          })
        : this.setState({
            displayMessage: this.props.allQs[this.state.questionIdx - 1]
              .successText
          })
    }
  }

  handleChange(event) {
    this.setState({answer: event.target.value})
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
                {this.state.questionIdx === 5 ? (
                  <button
                    onClick={() => history.push('/LevelThree')}
                    type="submit"
                  >
                    ✉️
                  </button>
                ) : null}
              </div>
            </div>
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
              id={this.state.questionIdx}
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
    allQs: state.question.allQs
  }
}

const mapDispatch = dispatch => {
  return {
    getLevelTwoQuestions: () => {
      dispatch(getLevelTwoQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelTwo)
