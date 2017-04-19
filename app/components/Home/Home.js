import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class Home extends Component {
  batters() {
    return this.props.batters.map((batter, i) => {
      if(batter.ab > 400) {
        return (
          <tbody key={i}>
            <tr>
              <td>{batter.name}</td>
            </tr>
          </tbody>
        )
      }
    })
  }

  pitchers() {
    return this.props.pitchers.map((pitcher, i) => {
      if(pitcher.inningPitched > 130 && i < 115) {
        return (
          <tbody key={i}>
            <tr>
              <td>{pitcher.name}</td>
            </tr>
          </tbody>
        )
      }
    })
  }

  render() {
    return (
    <section>
      <h1>Welcome To Fantasy Baseball Helper!</h1>
      <NavLink className='pitcher-link home-link' to='/pitchers'>Pitchers</NavLink>
      <NavLink className='batters-link home-link' to='/batters'>Batters</NavLink>

      <article className="home-batters">
        <h3 className="watch-home">Batters To Watch</h3>
        <table>
          { this.props.batters.length && this.batters() }
        </table>
      </article>

      <article className="home-pitchers">
        <h3 className="watch-home">Pitchers To Watch</h3>
        <table>
          { this.props.pitchers.length && this.pitchers() }
        </table>
      </article>
    </section>
    )
  }
}

  export default Home
