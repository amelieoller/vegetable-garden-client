import React from "react";

import CropListItem from "./CropListItem";

const CropList = ({ crops }) => {
  return (
    <div>{crops.map(crop => <CropListItem key={crop.id} crop={crop} />)}</div>
  );
};

export default CropList;
