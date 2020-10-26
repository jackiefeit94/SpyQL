import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Home,
  LevelOne,
  LevelTwo,
  LevelThree,
  GameOver,
  Victory
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/levelOne" component={LevelOne} />
        <Route path="/levelTwo" component={LevelTwo} />
        <Route path="/levelThree" component={LevelThree} />
        <Route path="/gameover" component={GameOver} />
        <Route path="/victory" component={Victory} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
