import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const LevelTwo = () => {
  return (
    <div id="levelTwo">
      <div className="split left">
        <div className="centered">
          <div id="textbox">
            <p>Welcome, Special Agent Q...</p>
          </div>
          <div id="textbox">
            <p>Enter SQL queries here.</p>
          </div>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <div id="textbox-table">
            <p id="table">Table goes here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LevelTwo
