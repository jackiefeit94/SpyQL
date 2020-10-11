import React from 'react'
import {connect} from 'react-redux'
import {fetchQuestion} from '../store/questionStore'

/**
 * COMPONENT
 */
class LevelOne extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>This is Level One</h3>
        <h2>Current Q: {this.props.question.question.prompt}</h2>
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
