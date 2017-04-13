import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pitchers extends Component {
  componentDidMount(dispatch) {
  this.props.pitcherData()
  }

  render() {
    return (
    <div>
    Hello
    </div>
    )
  }
}

  export default Pitchers
