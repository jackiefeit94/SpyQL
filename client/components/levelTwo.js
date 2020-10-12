import React from 'react'
import {connect} from 'react-redux'
import {
  getAllQuestions,
  fetchQuestion,
  getNextQuestion
} from '../store/questionStore'

class LevelTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      idx: 0,
      showPrompt: false,
      showQuestion: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleQuery = this.handleQuery.bind(this)
  }

  componentDidMount() {
    this.props.getAllQuestions()
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.idx <= 3) {
      this.setState({
        idx: this.state.idx + 1,
        showPrompt: false,
        showQuestion: true
      })
    }
  }

  handleQuery() {
    this.setState({
      showPrompt: true,
      showQuestion: false
    })
  }

  render() {
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
                <p>{this.props.allQs[this.state.idx].plotQuestion}</p>
              )}
          </div>
          <div id="textbox">
            Code Editor Here
            <button type="submit" onClick={this.handleQuery}>
              Submit Query!
            </button>
          </div>
          <div id="textbox">
            <p>Plot Question Here</p>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="answer" placeholder="Answer" />
              <input type="submit" value="Submit" />
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
    },
    getNextQuestion: idx => {
      dispatch(getNextQuestion(idx))
    }
  }
}

export default connect(mapState, mapDispatch)(LevelTwo)
