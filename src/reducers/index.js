import { combineReducers } from 'redux';
import cropsReducer from './cropsReducer';
import cropFormReducer from './cropFromReducer';

export default combineReducers({
   crops: cropsReducer,
   cropFormData: cropFormReducer
})