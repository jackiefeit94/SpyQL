import React from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import Typed from 'react-typed'
import Table from './table'
import {CodeEditor} from './CodeEditor'
import {getLevelTwoQuestions} from '../store/questionStore'
import history from '../history'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Flip from 'react-reveal/Flip'

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
  }

  componentDidMount() {
    this.props.getLevelTwoQuestions()
  }

  /* If player SQL query from code editor results in error
  display error in terminal, otherwise, move to next question  */
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

  //updating state with code in editor
  updateCode(newCode) {
    this.setState({query: newCode})
  }

  /* handle escape chars in api request url */
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

  /* make api request with player's sql query, and generate
  table if data is returned */
  async createTable(idx) {
    let table = this.props.allQs[idx]
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

  render() {
    const options = {lineNumbers: true}
    return (
      <Container>
        <Row className="level-container">
          {/* flex left */}
          <Col className="item flex-child-left">
            {/* fake terminal */}
            <Flip bottom cascade>
              <div id="text-editor-wrap">
                <div className="title-bar">
                  <span className="title">
                    🔒Confidential-File - bash - 80x24
                  </span>
                </div>
                <div className="text-body">
                  {this.props.allQs.length && (
                    <Typed
                      strings={['>> ' + this.state.displayMessage]}
                      typedRef={typed => {
                        this.typed = typed
                      }}
                      typeSpeed={35}
                    />
                  )}
                  {this.state.questionIdx === 6 ? (
                    <div>
                      Unlock next level
                      <br />
                      <Button
                        className="unlock"
                        onClick={() => history.push('/transition2')}
                        type="submit"
                      >
                        🔑
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </Flip>
          </Col>

          {/* flex right */}
          <Col className="item flex-child-right">
            <Flip top>
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
            </Flip>
            <CodeEditor
              options={options}
              updateCode={this.updateCode}
              formatQuery={this.formatQuery}
              createTable={this.createTable}
              id={this.state.questionIdx}
              handleQuery={this.handleQuery}
            />
            <Button
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
            </Button>
          </Col>
        </Row>
      </Container>
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
    getLevelTwoQuestions: () => {
      dispatch(getLevelTwoQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelTwo)
