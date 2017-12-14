import React from 'react';

const Crops = (props) => (
   <div className="CropsContainer">
      <h1>Crops</h1>
      {props.crops.map(crop =>
         <div key={crop.id} className="CropCard">
            <h3>{crop.name}</h3>
            <p>Days to Maturity: {crop.days_to_maturity}</p>
         </div>
      )}
   </div>
)

export default Crops;