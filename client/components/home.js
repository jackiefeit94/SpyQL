import React from 'react'
import Typed from 'typed.js'
//May use at a later time
//import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css'; causing error, need to fix
import history from '../history'

/**
 * COMPONENT
 */

export default class Home extends React.Component {
  constructor() {
    super()
    this.handleEnter = this.handleEnter.bind(this)
  }

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

  handleEnter(event) {
    console.log('entering')
    if (event.charCode === 13) {
      history.push('/levelOne')
    }
  }

  render() {
    return (
      <div>
        <div className="text-editor-wrap" onKeyDown={this.handleEnter}>
          <div className="title-bar">
            <span className="title">🔒Confidential-File - bash - 80x24</span>
          </div>
          <div className="text-body">
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
