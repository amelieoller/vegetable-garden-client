import React from 'react';
import PropTypes from 'prop-types';

import CropListItem from './CropListItem';

const CropsList = ({ crops, deleteCrop, updateCropActive }) => (
  <div>
    <h2>Your Garden</h2>
    <div className="row">
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
    <hr />
    <h2>Inactive Crops</h2>
    <div className="row">
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
);

CropsList.propTypes = {
  crops: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteCrop: PropTypes.func.isRequired,
  updateCropActive: PropTypes.func.isRequired,
};

export default CropsList;
