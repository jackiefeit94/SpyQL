import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {
  Home,
  LevelOne,
  LevelTwo,
  LevelThree,
  GameOver,
  Victory,
  Transition,
  Transition2
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(props) {
    super(props)

    this.currentPathname = null
    this.currentSearch = null
  }

  componentDidMount() {
    const {history} = this.props

    history.listen((newLocation, action) => {
      if (action === 'PUSH') {
        if (
          newLocation.pathname !== this.currentPathname ||
          newLocation.search !== this.currentSearch
        ) {
          // Save new location
          this.currentPathname = newLocation.pathname
          this.currentSearch = newLocation.search

          // Clone location object and push it to history
          history.push({
            pathname: newLocation.pathname,
            search: newLocation.search
          })
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1)
      }
    })
  }

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
        <Route path="/transition" component={Transition} />
        <Route path="/transition2" component={Transition2} />
      </Switch>
    )
  }
}

export default withRouter(Routes)
