import React from 'react'
import Typed from 'typed.js'
//May use at a later time
//import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css'; causing error, need to fix

/**
 * COMPONENT
 */

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
        <div className="text-editor-wrap">
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
        <button type="submit">
          <Link to="/LevelOne">Enter</Link>
        </button>
      </div>
    )
  }
}
