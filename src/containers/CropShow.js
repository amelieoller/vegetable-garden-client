import React, { Component } from "react";
import { connect } from "react-redux";

import DateFormat from "../components/DateFormat";
import CropInfo from "./CropInfo";

class CropShow extends Component {
  render() {
    const {
      image_url,
      name,
      days_to_maturity,
      date_planted,
      active
    } = this.props.crop;

    return (
      <div className="row">
        <div className="col-md-3">
          <img
            src={image_url}
            className="square-image large-image"
            alt={name}
          />
        </div>
        <div className="col-md-3">
          <h2>{name}</h2>
          <p>Days to Maturity: {days_to_maturity}</p>
          <p>
            Date Planted: <DateFormat date={date_planted} />
          </p>
          <p>
            This crop is <strong>{active ? "" : "not"}</strong> active in your
            garden.
          </p>
        </div>
        <div className="col-md-6">
          <CropInfo name={this.props.crop.name} />
        </div>
      </div>
    );
  }
}

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
