import React from 'react'
import Typed from 'react-typed'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import history from '../history'

const Victory = () => {
  return (
    <div id="victory">
      <KeyboardEventHandler
        handleKeys={['enter', 'return']}
        onKeyEvent={(key, e) => history.push('/home')}
      />
      <div className="text-editor-home">
        {/* <div className='title-bar'>
                        <span className='title'>🔒Confidential-File - bash - 80x24</span>
                    </div> */}
        <div className="text-body-home">
          $
          <Typed
            strings={[
              'Congratulations, Special Agent Q.^300 <br> Play again? ^300 <br> Hit ENTER to restart...'
            ]}
            typeSpeed={50}
          />
        </div>
      </div>
    </div>
  )
}

export default Victory