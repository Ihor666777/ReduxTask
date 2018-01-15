import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTournaments } from '../actions/loadTournaments'
import './landing.css'

class Landing extends Component {
  fetchTournaments() {
    this.props.dispatch(loadTournaments())
  }

  render(){
    console.log(this.props.tournaments)
    return (
      <div>
        <button onClick={this.fetchTournaments.bind(this)}>Load Tournaments</button>
        <ul>{this.props.tournaments.reducer.map((tourn, index) => 
           <div key = {index} class='infoBlock'>
             <li>GW: {tourn.matchColections.map(data => data.gameweeks + ',' )}</li>
             <li>Starting time: {tourn.matchColections.map(data => data.startTime)}</li>
             <li>BuyIn: {tourn.buyIn} $</li>
          </div>
        )}
        </ul>
     </div>
    )
  }
}  

  export default connect(
    state => ({
      tournaments: state
    })
  )(Landing);


  