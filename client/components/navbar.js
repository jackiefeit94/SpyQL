import React from 'react'
import {Link} from 'react-router-dom'
import clock from './clock'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <h1>
            <Link to="/home">SpyQL</Link>
          </h1>
          {clock()}
          <br />
        </nav>

        {/* <nav>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/LevelOne">Level One</Link>
            <Link to="/LevelTwo">Level Two</Link>
            <Link to="/LevelThree">Level Three</Link>
          </div>
        </nav> */}
      </div>
    )
  }
}

export default Navbar
