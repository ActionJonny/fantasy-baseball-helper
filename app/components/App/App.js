import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import Pitchers from '../Pitchers/Pitchers'

class App extends Component {

  render() {
    return (
      <div>
        home
        <Route exact path='/pitchers' render= { ({ match, location, history}) => <Pitchers history={history} /> }/>
      </div>
    )
  }
}

export default App
