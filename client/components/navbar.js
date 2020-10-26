import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import clock from './clock'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.level)
    return (
      <div className="navbar">
        <nav>
          <h1>
            <Link to="/home">SpyQL</Link>
          </h1>
          {this.props.level ? clock() : null}
          <br />
        </nav>
        {/* 
        <nav>
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

const mapState = state => {
  return {
    level: state.question.level
  }
}

const mapDispatch = dispatch => {
  return {
    getLevelOneQuestions: () => {
      dispatch(getLevelOneQuestions())
      dispatch(getLevelTwoQuestions())
      dispatch(getLevelThreeQuestions())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
