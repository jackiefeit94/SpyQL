import React from 'react'
import Typed from 'typed.js'
//May use at a later time
//import {Button} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css'; causing error, need to fix
import history from '../history'
import KeyboardEventHandler from 'react-keyboard-event-handler'

export default class Home extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        'Welcome, ^300 Special Agent Q. ^700 <br> I’m Spymaster L. ^300 <br> Today ^300 we’ve got a top-secret mission. ^1000 <br> Hit ENTER to accept...'
      ],
      startDelay: 1000,
      typeSpeed: 70,
      backSpeed: 70
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={(key, e) => history.push('/levelOne')}
        />
        <div className="text-editor-home">
          <div className="title-bar">
            <span className="title">🔒Confidential-File - bash - 80x24</span>
          </div>
          <div className="text-body-home">
            $
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
