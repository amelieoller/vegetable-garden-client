const API_URL = process.env.REACT_APP_API_URL;

const getCrops = crops => {
  return {
    type: "GET_CROPS",
    crops
  };
};

const addCrop = crop => {
  return {
    type: "CREATE_CROP",
    crop
  };
};

const removeCrop = id => {
  return {
    type: "DELETE_CROP",
    id
  };
};

const editCrop = crop => {
  return {
    type: "UPDATE_CROP",
    crop
  };
};

const editCropActive = crop => {
  return {
    type: "UPDATE_CROP_ACTIVE",
    crop
  };
};

// *** Async Actions ***
export const fetchCrops = () => {
  return dispatch => {
    return fetch(`${API_URL}/crops`)
      .then(response => response.json())
      .then(crops => dispatch(getCrops(crops)))
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
        dispatch(addCrop(crop));
      })
      .catch(error => console.log(error));
  };
};

export const deleteCrop = id => {
  return dispatch => {
    return fetch(`${API_URL}/crops/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          dispatch(removeCrop(id));
        } else {
          window.alert("Unable to delete");
        }
      })
      .catch(error => console.log(error));
  };
};

export const updateCropActive = crop => {
  return dispatch => {
    return fetch(
      `${API_URL}/crops/${crop.id}?active=${crop.active ? false : true}`,
      {
        method: "PUT"
      }
    )
      .then(response => {
        if (response.ok) {
          dispatch(editCropActive(crop));
        } else {
          window.alert("Unable to update");
        }
      })
      .catch(error => console.log(error));
  };
};

export const updateCrop = (crop, id) => {
  return dispatch => {
    return fetch(`${API_URL}/crops/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(crop)
    })
      .then(response => response.json())
      .then(crop => {
        dispatch(editCrop(crop));
      })
      .catch(error => console.log(error));
  };
};
