import React from "react";
import { connect } from "react-redux";

const CropShow = ({ crop }) => (
  <div>
    <h2>{crop.name}</h2>
    <p>Days to Maturity: {crop.days_to_maturity}</p>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const crop = state.crops.find(
    crop => crop.id === +ownProps.match.params.cropId
  );

  if (crop) {
    return { crop };
  } else {
    return { crop: {} };
  }
};

export default connect(mapStateToProps)(CropShow);
