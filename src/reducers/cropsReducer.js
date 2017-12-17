export default function cropsReducer(state = [], action) {
  switch (action.type) {
    case "GET_CROPS":
      return action.crops;
    case "CREATE_CROP":
      return state.concat(action.crop);
    case "DELETE_CROP":
      return state.filter(crop => crop.id !== action.id);
    case "UPDATE_CROP_ACTIVE":
      return state.map(
        crop =>
          crop.id === action.crop.id ? { ...crop, active: !crop.active } : crop
      );
    case "UPDATE_CROP":
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
