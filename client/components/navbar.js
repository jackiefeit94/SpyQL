import React from 'react'
import {connect} from 'react-redux'
import clock from './clock'
import {Nav, Navbar as NavbarBootstrap} from 'react-bootstrap'
import styled from 'styled-components'
import {
  getLevelOneQuestions,
  getLevelTwoQuestions,
  getLevelThreeQuestions
} from '../store/questionStore'

const Styles = styled.div`
  .navbar {
    background: url('1.jpg');
    background-size: 60%;
    background-position: right;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: red;
    }
  }
`

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Styles>
        {this.state.level ? (
          <NavbarBootstrap align="center">
            <NavbarBootstrap.Brand href="/">
              <h1>SpyQL</h1>
            </NavbarBootstrap.Brand>
            <Nav className="ml-auto">
              <Nav.Item align="center">
                {this.props.level ? clock() : null}
              </Nav.Item>
              <br />
              {/* levelOne music */}
              <Nav.Item align="center">
                {this.props.level === 1 ? (
                  <audio controls="controls">
                    <source
                      src="./musicfox_demo_MF-78.mp3"
                      type="audio/mp3"
                      preload="auto"
                    />
                    Your brower does not support the audio element
                  </audio>
                ) : null}
              </Nav.Item>
              {/* levelTwo music */}
              <Nav.Item align="center">
                {this.props.level === 2 ? (
                  <audio controls="controls">
                    <source
                      src="./musicfox_demo_MF-801.mp3"
                      type="audio/mp3"
                      preload="auto"
                    />
                    Your brower does not support the audio element
                  </audio>
                ) : null}
              </Nav.Item>
              {/* levelThree music */}
              <Nav.Item align="center">
                {this.props.level === 3 ? (
                  <audio controls="controls">
                    <source
                      src="./musicfox_demo_MF-892.mp3"
                      type="audio/mp3"
                      preload="auto"
                    />
                    Your brower does not support the audio element
                  </audio>
                ) : null}
              </Nav.Item>
            </Nav>
          </NavbarBootstrap>
        ) : null}
      </Styles>
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
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
