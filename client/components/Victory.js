import React from 'react'
import Typed from 'react-typed'
import {connect} from 'react-redux'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import {getVictoryLevel} from '../store/questionStore'
import history from '../history'

class Victory extends React.Component {
  componentDidMount() {
    this.props.getVictoryLevel()
  }

  render() {
    return (
      <div id="victory">
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={() => history.push('/')}
        />
        <div className="text-editor-home">
          <div className="text-body-home">
            {'>> '}
            <Typed
              strings={[
                `Congratulations, Special Agent Q.^300 <br>
              Play again? ^300 <br>
              Hit ENTER to restart...`
              ]}
              typeSpeed={50}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    level: state.question.level
  }
}

const mapDispatch = dispatch => {
  return {
    getVictoryLevel: () => {
      dispatch(getVictoryLevel())
    }
  }
}
export default connect(mapState, mapDispatch)(Victory)
