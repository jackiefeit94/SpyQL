import React from 'react'
import history from '../history'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

const clock = () => (
  <CountdownCircleTimer
    isPlaying
    duration={500}
    colors={[['#0f0', 0.33], ['#a444f2', 0.33], ['#fc0f1f', 0.33]]}
    size={100}
    strokeWidth={3}
    trailColor="#0d0d0c"
  >
    {({remainingTime}) => {
      if (remainingTime === 0) {
        history.push('/gameover')
      } else {
        const timeFormat = new Intl.NumberFormat('en', {
          minimumIntegerDigits: 2
        })
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        return `${timeFormat.format(hours)}:${timeFormat.format(
          minutes
        )}:${timeFormat.format(seconds)}`
      }
    }}
  </CountdownCircleTimer>
)

export default clock
