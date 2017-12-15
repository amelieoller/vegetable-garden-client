import { resetCropForm } from "./cropFormActions";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCrops = () => {
  return dispatch => {
    return fetch(`${API_URL}/crops`)
      .then(response => response.json())
      .then(crops => dispatch({ type: "GET_CROPS", crops }))
      .catch(error => console.log(error));
  };
};

export const createCrop = crop => {
  return dispatch => {
    return fetch(`${API_URL}/crops`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(crop)
    })
      .then(response => response.json())
      .then(crop => {
        dispatch({ type: "CREATE_CROP", crop });
        dispatch(resetCropForm());
      })
      .catch(error => console.log(error));
  };
};

export const deleteCrop = id => {
  return {
    type: "DELETE_CROP",
    id
  };
};
