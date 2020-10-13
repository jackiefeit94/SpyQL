import React from 'react'
import history from '../history'

const clockRenderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    history.push('/gameover')
    return <></>
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    )
  }
}

export default clockRenderer
