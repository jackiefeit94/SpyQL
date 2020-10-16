import React from 'react'
import Typed from 'react-typed'
import history from '../history'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import clockRenderer from './countdownClock'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      start: true,
      gameover: false,
      clockDisplay: false
    }
  }
  // componentDidMount() {
  //   const options = {
  //     strings: [
  //       'Welcome, ^300 Special Agent Q. ^700 <br> I’m Spymaster L. ^300 <br> Today ^300 we’ve got a top-secret mission. ^1000 <br> Hit ENTER to accept...'
  //     ],
  //     startDelay: 1000,
  //     typeSpeed: 70,
  //     backSpeed: 70
  //   }
  //   this.typed = new Typed(this.el, options)
  // }

  // componentWillUnmount() {
  //   this.typed.destroy()
  // }
  handleChange() {
    this.setState({
      start: !start,
      gameover: !gameover,
      clockDisplay: !clockDisplay
    })
  }

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={(key, e) => {
            history.push('/levelOne')
          }}
        />
        {this.state.start ? (
          <div id="start-game">
            <div className="text-editor-home">
              <div className="title-bar">
                <span className="title">
                  🔒Confidential-File - bash - 80x24
                </span>
              </div>
              <div className="text-body-home">
                $
                <Typed
                  strings={[
                    'Welcome, ^300 Special Agent Q. ^700 <br> I’m Spymaster L. ^300 <br> Today ^300 we’ve got a top-secret mission. ^1000 <br> Hit ENTER to accept...'
                  ]}
                  typeSpeed={70}
                />
                {/* <span className="typed-cursor" /> */}
              </div>
            </div>
          </div>
        ) : (
          <div id="gameover">
            <Typed
              strings={[
                'Unfortunately, ^300 you did not stop the breach. ^700 <br> Play again? ^300 <br> Hit ENTER to restart...'
              ]}
              typeSpeed={70}
            />
          </div>
        )}
      </div>
    )
  }
}
