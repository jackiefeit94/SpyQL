import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <h1>SpyQL</h1>
    <nav>
      <div>
        {/* The navbar will show these links after you log in */}
        <Link to="/home">Home</Link>
        <Link to="/LevelOne">Level One</Link>
        <Link to="/LevelTwo">Level Two</Link>
        <Link to="/LevelThree">Level Three</Link>
      </div>
    </nav>
  </div>
)

export default Navbar
