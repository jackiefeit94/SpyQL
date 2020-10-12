import React from 'react'
import {connect} from 'react-redux'
import {fetchQuestion} from '../store/questionStore'
import Modal from 'react-modal'

/**
 * COMPONENT
 */

// Current Q: {this.props.question.question.prompt}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
Modal.setAppElement(document.getElementById('form'))

class LevelOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      showHint: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.hintOnClick = this.hintOnClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchQuestion()
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    // alert('!!')
    if (this.state.value == this.props.question.question.plotAnswer) {
      alert(this.props.question.question.successText)
    } else {
      alert('❗Access Prohibited❗')
    }
    this.setState({value: ''})
  }

  hintOnClick(e) {
    e.preventDefault()
    this.setState({showHint: !this.state.showHint})
  }

  render() {

    return (
      <div className="level-container">
        <div className="flex-child-left">
          <div id="textbox">
            <p>⚠️ {this.props.question.question.prompt} ⚠️</p>
          </div>
          <div id="textbox">
            <p>Enter SQL queries here.</p>
          </div>
          <div id="textbox">
            <form id="form">
              <label>
                {this.props.question.question.plotQuestion}
                <br />
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" onClick={this.handleSubmit} />
            </form>
            <form>
              <button onClick={this.hintOnClick}>Hint</button>
              <div>
                {this.state.showHint ? (
                  <div>{this.props.question.question.hint}</div>
                ) : null}
              </div>
            </form>
          </div>
        </div>

        <div className="flex-child-right">
          <div id="textbox-table">
            <p id="table">Table goes here</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    question: state
  }
}

const mapDispatch = dispatch => {
  return {
    fetchQuestion: () => {
      dispatch(fetchQuestion())
    }
  }
}

export default connect(mapState, mapDispatch)(LevelOne)
