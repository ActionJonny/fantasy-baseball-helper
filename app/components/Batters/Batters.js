import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

class Batters extends Component {
  componentDidMount() {
    this.batters()
  }

  batters() {
    return this.props.batters.map((batter, i) => {
      if(batter.ab > 200) {
        return (
          <tbody key={i}>
            <tr>
              <td>{batter.name}</td>
              <td>{batter.hits}</td>
              <td>{batter.doubles}</td>
              <td>{batter.triples}</td>
              <td>{batter.homers}</td>
              <td>{batter.runs}</td>
              <td>{batter.rbi}</td>
              <td>{batter.ba}</td>
              <td>{batter.slg}</td>
              <td>{batter.obp}</td>
              <td>{batter.ops}</td>
            </tr>
          </tbody>
        )
      }
    })
  }

  render() {
    return (
    <section>
      <h1>Batters Rankings</h1>
      <NavLink className='home' to='/'>Home Page</NavLink>
      <table>
        <tbody>
          <tr>
            <td>Player</td>
            <td>Hits</td>
            <td>Doubles</td>
            <td>Triples</td>
            <td>HR</td>
            <td>Runs</td>
            <td>RBI</td>
            <td>AVG</td>
            <td>Slugging</td>
            <td>OBP</td>
            <td>OPS</td>
          </tr>
        </tbody>
        { this.props.batters.length && this.batters() }
      </table>
    </section>
    )
  }
}

  export default Batters
