import React from 'react'
import Typed from 'typed.js'
import history from '../history'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import {Container, Row} from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom'

export default class Home extends React.Component {
  componentDidMount() {
    const options = {
      strings: [
        'Welcome, ^300 Special Agent Q. ^700 <br> I’m Spymaster L. ^300 <br> Today ^300 we’ve got a top-secret mission. ^1000 <br> Hit ENTER to accept...'
      ],
      startDelay: 1000,
      typeSpeed: 70
    }
    this.typed = new Typed(this.el, options)
  }

  render() {
    return (
      <div>
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={() => history.push('/levelOne')}
        />
        <div margin={80} align="center">
          <h1>
            <Zoom slow opposite cascade collapse>
              <img scr="suspect.jpg" />
              SpyQL
            </Zoom>
          </h1>
        </div>
        <br />
        <Container className="text-editor-home">
          <Row className="title-bar">
            <span className="title">🔒Confidential-File - bash - 80x24</span>
          </Row>
          <Row className="text-body-home">
            $
            <span
              ref={el => {
                this.el = el
              }}
            />
            <span className="typed-cursor" />
          </Row>
        </Container>
      </div>
    )
  }
}
