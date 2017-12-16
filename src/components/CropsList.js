import React from "react";

import CropListItem from "./CropListItem";

const CropsList = ({ crops }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2>Your Garden</h2>
          {crops
            .filter(crop => crop.active === true)
            .map(crop => <CropListItem key={crop.id} crop={crop} />)}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <h2>Inactive Crops</h2>
          {crops
            .filter(crop => crop.active === false)
            .map(crop => <CropListItem key={crop.id} crop={crop} />)}
        </div>
      </div>
    </div>
  );
};

export default CropsList;
