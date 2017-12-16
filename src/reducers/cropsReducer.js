export default function cropsReducer(state = [], action) {
  switch (action.type) {
    case "GET_CROPS":
      return action.crops;
    case "CREATE_CROP":
      return state.concat(action.crop);
    case "DELETE_CROP":
      return state.filter(crop => crop.id !== action.id);
    case "UPDATE_CROP":
      return state.map(
        crop =>
          crop.id === action.id ? { ...crop, action: !crop.action } : crop
      );
    case "EDIT_CROP":
      return state.map(
        crop =>
          crop.id === action.crop.id
            ? Object.assign({}, ...crop, action.crop)
            : crop
      );
    default:
      return state;
  }
}
