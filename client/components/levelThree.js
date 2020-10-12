import React from 'react'

/**
 * COMPONENT
 */
class LevelThree extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {

  //   }

  // }

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
        </div>
      </div>
    )
  }
}

export default LevelThree
