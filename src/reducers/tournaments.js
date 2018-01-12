export default function reducer (state = [], action) {
  switch (action.type) {
    case 'FETCH_TOURNAMENTS_STARTED':{
      break;
    }
    case 'FETCH_TOURNAMENTS_SUCCESS':{
      let data = action.payload;
      return data.tournaments.map(trnmInfo => {
        let matchColections = data.matchCollections.filter((colection)=>(colection.id === trnmInfo.matchCollectionId))
        return Object.assign(...state, trnmInfo, { matchColections })  
      })
      break;
    }
    case 'FETCH_TOURNAMENTS_FAILED':{
      return action.paload
      break;
    }
  }
  return state;
}

