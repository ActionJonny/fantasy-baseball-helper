import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import pitcherData from '../../data/pitchers.js'
import batterData from '../../data/batters.js'

import HomeContainer from '../Home/HomeContainer'
import PitchersContainer from '../Pitchers/PitchersContainer'
import BattersContainer from '../Batters/BattersContainer'
import WatchListContainer from '../WatchList/WatchListContainer'

class App extends Component {

  componentDidMount() {
    this.props.getPitchers(pitcherData)
    this.props.getBatters(batterData)
  }

  render() {
    return (
      <section>
        <Route exact path='/'
          render= { ({ match, location, history }) =>
          <HomeContainer history={history} /> }/>

        <Route exact path='/pitchers'
          render= { ({ match, location, history }) =>
          <PitchersContainer history={history} /> }/>

        <Route exact path='/batters'
          render= { ({ match, location, history }) =>
          <BattersContainer history={history} /> }/>

        <Route exact path='/watch'
          render= { ({ match, location, history }) =>
          <WatchListContainer history={history} /> }/>
      </section>
    )
  }
}

export default App
