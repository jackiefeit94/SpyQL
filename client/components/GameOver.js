import React from 'react'
import {connect} from 'react-redux'
import Typed from 'typed.js'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import history from '../history'
import {getVictoryLevel} from '../store/questionStore'

class GameOver extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        `Unfortunately, ^300 you did not stop the breach. ^700 <br>
        Play again? ^300 <br>
        Hit ENTER to restart...`
      ],
      startDelay: 1000,
      typeSpeed: 70
    }
    this.typed = new Typed(this.el, options)
    this.props.getVictoryLevel()
  }

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={() => history.push('/levelOne')}
        />
        <div className="text-editor-home">
          <div className="title-bar">
            <span className="title">🔒Confidential-File - bash - 80x24</span>
          </div>
          <div className="text-body-home">
            {'>> '}
            <span
              ref={el => {
                this.el = el
              }}
            />
            <span className="typed-cursor" />
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

export default connect(mapState, mapDispatch)(GameOver)
