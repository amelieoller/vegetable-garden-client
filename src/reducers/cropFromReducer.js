const initialState = {
   name: '',
   days_to_maturity: ''
}

export default function cropFormReducer(state = initialState, action){
   switch(action.type) {
      case 'UPDATED_DATA':
         return action.cropFormData
      case 'RESET_CROP_FORM':
         return initialState;
      default:
         return state;
   }
}