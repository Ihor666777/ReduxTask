import axios from 'axios';

export function loadTournaments() {
  return function (dispatch) {
    axios.get('https://ws.fanteam.com/match_collections?sport=football&tab=admin_created&statuses[]=waiting&page=0&per_page=30&bearer[white_label]=fanteam')  
      .then((response) => {
        dispatch({type:'FETCH_TOURNAMENTS_SUCCESS', payload: response.data})
      })
      .catch((err) => {
        dispatch({type:'FETCH_TOURNAMENTS_FAILED', payload: err})
      })
  }
}