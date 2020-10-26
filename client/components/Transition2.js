import React from 'react'
import Typed from 'react-typed'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import history from '../history'
import {Fade, Slide} from 'react-reveal'

const Transition2 = () => {
  return (
    <Fade slow>
      <div slow id="transition2">
        <KeyboardEventHandler
          handleKeys={['enter', 'return']}
          onKeyEvent={() => history.push('/LevelThree')}
        />
        <br />
        <Slide bottom>
          <div className="text-editor-home">
            <div className="text-body-home">
              {'>> '}
              <Typed
                strings={[
                  `Nice work, Special Agent Q.^300 <br>
                When you're ready, <br>
                Hit ENTER to start the next level...`
                ]}
                typeSpeed={50}
              />
            </div>
          </div>
        </Slide>
      </div>
    </Fade>
  )
}

export default Transition2
