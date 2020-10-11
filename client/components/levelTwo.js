import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
const LevelTwo = () => {
  return (
    <div className="levelTwo-container">
      <div className="flex-child-left">
        <div id="textbox">
          <p>Welcome, Special Agent Q...</p>
        </div>
        <div id="textbox">
          <p>Enter SQL queries here.</p>
        </div>
        <div id="textbox">
          <p>Enter more queries here.</p>
        </div>
      </div>

      <div className="flex-child-right">
        <div id="textbox-table">
          <p id="table">Table goes here</p>
        </div>
      </div>
    </div>
  )
}

export default LevelTwo
