export default function cropsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_CROPS':
      return action.crops
    case 'CREATE_CROP':
      return state.concat(action.crop)
    case 'DELETE_CROP':
      return state.filter(crop => crop.id !== action.id)
    default:
      return state
  }
}