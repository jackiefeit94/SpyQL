import React from 'react'
import {connect} from 'react-redux'
import {fetchQuestion} from '../store/questionStore'

/**
 * COMPONENT
 */

// Current Q: {this.props.question.question.prompt}

class LevelOne extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion()
  }

  render() {
    console.log(this.props)
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
            <p>{this.props.question.question.plotQuestion}</p>
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
