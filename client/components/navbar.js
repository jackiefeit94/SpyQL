import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllQuestions} from '../store/questionStore'

class Navbar extends React.Component {
  componentDidMount() {
    this.props.getAllQuestions()
  }

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

const mapDispatch = dispatch => {
  return {
    getAllQuestions: () => {
      dispatch(getAllQuestions())
    }
  }
}

export default connect(null, mapDispatch)(Navbar)
