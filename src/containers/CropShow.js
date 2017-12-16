import React from "react";
import { connect } from "react-redux";

import DateFormat from "../components/DateFormat";

const CropShow = ({ crop }) => (
  <div className="row">
    <div className="col-md-3">
      <img
        src={crop.image_url}
        className="square-image large-image"
        alt={crop.name}
      />
    </div>
    <div className="col-md-4">
      <h2>{crop.name}</h2>
      <p>Days to Maturity: {crop.days_to_maturity}</p>
      <p>
        Date Planted: <DateFormat date={crop.date_planted} />
      </p>
      <p>
        This crop is <strong>{crop.active ? "" : "not"}</strong> active in your garden.
      </p>
    </div>
    <div className="col-md-5">
      <h2>More Information</h2>
      <button className="btn btn-primary">More Information on this Crop</button>
    </div>
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
