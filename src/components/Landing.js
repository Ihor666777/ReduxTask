import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTournaments } from '../actions/loadTournaments'

class Landing extends Component {
  fetchTournaments() {
    this.props.dispatch(loadTournaments())
  }

  render(){
    return (
      <div>
        <button onClick={this.fetchTournaments.bind(this)}>click</button>
      </div>
    )
  }
}  

  export default connect(
    state => ({
      tracks: state
    })
  )(Landing);