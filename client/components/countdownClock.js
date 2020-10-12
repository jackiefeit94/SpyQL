import React from 'react'
import GameOver from './GameOver'

export const clockRenderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    return <GameOver />
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    )
  }
}
