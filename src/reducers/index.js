import { combineReducers } from "redux";

import cropsReducer from "./cropsReducer";

export default combineReducers({
  crops: cropsReducer
});
