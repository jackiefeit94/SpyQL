import React from 'react'
import {connect} from 'react-redux'
import {CodeEditor} from './CodeEditor'
import Typed from 'react-typed'
import Popup from 'react-animated-popup'

class FakeTerminal extends React.Component {
  constructor() {
    super()
    this.state = {
      displayMessage:
        'I knew I could count on you. Here’s the deal: there’s been a breach. Someone has stolen a document containing the data of millions of civilians. If we don’t find the source and stop it, people’s personal information could be compromised…',
      questionIdx: 0,
      answer: '',
      clue: '',
      visible: false
    }
    this.handleQuery = this.handleQuery.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleQuery() {
    this.typed.reset()
    if (this.props.err.length) {
      this.setState({displayMessage: this.props.err})
    } else {
      this.setState({
        displayMessage: this.props.allQs[this.state.questionIdx].plotQuestion
      })
    }
  }

  handleChange(event) {
    this.setState({answer: event.target.value})
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
        clue: this.props.allQs[this.state.questionIdx].clue
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

  render() {
    return (
      <div>
        <div id="text-editor-wrap">
          <div className="title-bar">
            <span className="title">🔒Confidential-File - bash - 80x24</span>
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
            {this.props.allQs.length &&
              this.state.displayMessage.includes('count') && (
                <Typed
                  strings={[this.props.allQs[0].prompt]}
                  startDelay={14000}
                  typeSpeed={35}
                  showCursor={false}
                />
              )}

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
          <CodeEditor
            //code={this.props.state.code}
            options={this.props.options}
            updateCode={this.props.updateCode}
            formatQuery={this.props.formatQuery}
            createTable={this.props.createTable}
            handleQuery={this.handleQuery}
          />

          <button
            type="submit"
            onClick={() => this.setState({visible: !this.state.visible})}
          >
            Teach me
          </button>
          {this.props.allQs.length && (
            <Popup
              visible={this.state.visible}
              onClose={() => this.setState({visible: false})}
            >
              <p>
                <img
                  id="hint"
                  src={this.props.allQs[this.state.questionIdx].hint}
                />
              </p>
            </Popup>
          )}
        </div>
        <form id="form" onSubmit={this.handleSubmit}>
          <label>
            <br />
            <input
              type="text"
              value={this.state.answer}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" />
        </form>
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

export default connect(mapState)(FakeTerminal)
