import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Home, LevelOne, LevelTwo, LevelThree, GameOver} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/levelOne" component={LevelOne} />
        <Route path="/levelTwo" component={LevelTwo} />
        <Route path="/levelThree" component={LevelThree} />
        <Route path="/gameover" component={GameOver} />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
