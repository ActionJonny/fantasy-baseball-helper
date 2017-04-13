import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import Pitchers from '../Pitchers/PitchersContainer'

class App extends Component {

  render() {
    return (
      <div>
        home
        <Route exact path='/pitchers' render= { ({ match, location, history}) => <PitchersContainer history={history} /> }/>
      </div>
    )
  }
}

export default App
