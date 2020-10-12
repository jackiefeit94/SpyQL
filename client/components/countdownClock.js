import React from 'react'
import gameOver from './gameOver'

export const clockRenderer = ({hours, minutes, seconds}) => {
  return (
    <span>
      {hours}:{minutes}:{seconds}
    </span>
  )
}
