import React from 'react';

const Crop = ({crop}) => (
   <div className="CropCard">
      <h3>{crop.name}</h3>
      <p>Days to Maturity: {crop.days_to_maturity}</p>
   </div>
)

export default Crop;