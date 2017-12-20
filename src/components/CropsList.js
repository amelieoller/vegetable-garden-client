import React from "react";

import CropListItem from "./CropListItem";

const CropsList = ({ crops, actions, deleteCrop, updateCropActive }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Your Garden</h2>
          {crops
            .filter(crop => crop.active === true)
            .map(crop => (
              <CropListItem
                key={crop.id}
                crop={crop}
                deleteCrop={deleteCrop}
                updateCropActive={updateCropActive}
              />
            ))}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h2>Inactive Crops</h2>
          {crops
            .filter(crop => crop.active === false)
            .map(crop => (
              <CropListItem
                key={crop.id}
                crop={crop}
                deleteCrop={deleteCrop}
                updateCropActive={updateCropActive}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CropsList;
