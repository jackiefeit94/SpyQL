import React from 'react'
import clockRenderer from './countdownClock'
import Countdown from 'react-countdown'

class LevelThree extends React.Component {
  render() {
    return (
      <div className="level-container">
        <div className="flex-child-left">
          <div id="textbox" />
          <div id="textbox">
            Code Editor Here
            <button type="submit">Submit Query!</button>
          </div>
          <div id="textbox">
            <p>Plot Question Here</p>
          </div>
        </div>
        <div className="flex-child-right">
          <div id="textbox-table">
            <p id="table">Table goes here</p>
          </div>
          <Countdown date={Date.now() + 10000} renderer={clockRenderer} />
        </div>
      </div>
    )
  }
}

export default LevelThree
