export default function cropsReducer(state = {loading: false, crops: []}, action) {
  switch (action.type) {
    case 'LOADING_CROPS':
      return Object.assign({}, state, {loading: true});
    case 'GET_CROPS':
      return {loading: false, crops: action.crops}
    default:
      return state
  }
}