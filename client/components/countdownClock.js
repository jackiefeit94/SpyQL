import React from 'react'
import gameOver from './gameOver'

export const clockRenderer = ({hours, minutes, seconds, completed}) => {
  console.log(completed)
  if (completed) {
    return <gameOver />
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    )
  }
}
