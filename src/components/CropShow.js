import React from "react";
import { connect } from "react-redux";

import DateFormat from "../components/DateFormat";
import CropInfo from "../containers/CropInfo";

const CropShow = ({ crop }) => {
  const maturityDate = (date, daysToMaturity) => {
    const maturityDate = new Date(date);
    maturityDate.setDate(maturityDate.getDate() + daysToMaturity);
    return maturityDate;
  };

  const pastDue = maturityDate => {
    let message = "";
    if (maturityDate < new Date()) {
      message = "Your crop should be ready.";
    } else {
      message = "Your crop is not ready yet.";
    }
    return message;
  };

  const { image_url, name, days_to_maturity, date_planted, active } = crop;

  return (
    <div className="row">
      <div className="col-md-3">
        <img src={image_url} className="square-image large-image" alt={name} />
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
        <p>
          Maturity Date:{" "}
          <strong>
            <DateFormat
              date={maturityDate(crop.date_planted, crop.days_to_maturity)}
            />
          </strong>
        </p>
        <p>{pastDue(maturityDate(crop.date_planted, crop.days_to_maturity))}</p>
      </div>
      <div className="col-md-6">
        <CropInfo name={crop.name} />
      </div>
    </div>
  );
};

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
