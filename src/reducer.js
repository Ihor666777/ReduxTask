export default function(state = {}, action) {
  switch(action.type) {
    case 'SUCESS':
      return {
        isLoading: false,
        img: action.payload,
        error: false,
      }
    case 'LOADING':
      return { isLoading: true }
    case 'ERROR':
      return {
        isLoading: false,
        img: '',
        error: action.payload,
      }
    default:
      return state
  }
}