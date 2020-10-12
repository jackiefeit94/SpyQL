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
        'Welcome, Special Agent Q. I’m Spymaster L. Today we’ve got a top-secret mission. Hit ENTER to accept . . .'
      ],
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
        <div id="welcome">
          <span
            ref={el => {
              this.el = el
            }}
          />
        </div>
        <button type="submit">
          <Link to="/LevelOne">Enter</Link>
        </button>
      </div>
    )
  }
}
