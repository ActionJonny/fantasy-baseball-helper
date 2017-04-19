import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class Pitchers extends Component {
  componentDidMount() {
    this.pitchers()
  }

  pitchers() {
    return this.props.pitchers.map((pitcher, i) => {
      if(pitcher.inningPitched > 60) {
        return (
          <tbody key={i}>
            <tr>
              <td>{pitcher.name}</td>
              <td>{pitcher.wins}</td>
              <td>{pitcher.losses}</td>
              <td>{pitcher.era}</td>
              <td>{pitcher.gamesPlayed}</td>
              <td>{pitcher.gamesStarted}</td>
              <td>{pitcher.saves}</td>
              <td>{pitcher.inningPitched}</td>
              <td>{pitcher.fip}</td>
              <td>{pitcher.whip}</td>
              <td>{pitcher.strikeoutsNine}</td>
              <td>{pitcher.walksNine}</td>
              <td>{pitcher.strikeoutsAndWalksNine}</td>
            </tr>
          </tbody>
        )
      }
    })
  }

  render() {
    return (
    <section>
      <h1>Pitcher Rankings</h1>
      <NavLink className='home' to='/'>Home Page</NavLink>
      <table>
        <tbody>
          <tr>
            <td>Player</td>
            <td>Wins</td>
            <td>Losses</td>
            <td>ERA</td>
            <td>Games</td>
            <td>Starts</td>
            <td>Saves</td>
            <td>Innings</td>
            <td>FIP</td>
            <td>WHIP</td>
            <td>SO/9</td>
            <td>BB/9</td>
            <td>SO/W</td>
          </tr>
        </tbody>
        { this.props.pitchers.length && this.pitchers() }
      </table>
    </section>
    )
  }
}

  export default Pitchers
