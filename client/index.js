import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import clockRenderer from './components/countdownClock'
import Countdown from 'react-countdown'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
      <Countdown date={Date.now() + 30000} renderer={clockRenderer} _ />
    </Router>
  </Provider>,
  document.getElementById('app')
)
