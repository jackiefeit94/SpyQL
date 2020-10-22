import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>
          <Link to="/home">SpyQL</Link>
        </h1>
        <nav>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/LevelOne">Level One</Link>
            <Link to="/LevelTwo">Level Two</Link>
            <Link to="/LevelThree">Level Three</Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
