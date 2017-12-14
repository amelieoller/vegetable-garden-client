import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchCrops() {
   return dispatch => {
      dispatch({ type: 'LOADING_CROPS' })
      return fetch(`${API_URL}/crops`)
         .then(response => response.json())
         .then(crops => dispatch({type: 'GET_CROPS', crops}))
         .catch(error => console.log(error))
   }
}