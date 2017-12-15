export default function cropsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_CROPS':
      return action.crops
    case 'CREATE_CROP':
      return state.concat(action.crop)
    default:
      return state
  }
}