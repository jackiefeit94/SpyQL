import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import clockRenderer from './components/countdownClock'
import Countdown from 'react-countdown'
import gameOver from './components/gameOver'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
      <Countdown
        date={Date.now() + 30000}
        renderer={clockRenderer}
        onComplete={() => gameOver()}
      />
    </Router>
  </Provider>,
  document.getElementById('app')
)
