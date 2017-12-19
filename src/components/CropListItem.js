import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cropActions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import DateFormat from "./DateFormat";

const CropListItem = ({ crop, match, actions }) => {
  const handleOnClick = id => {
    actions.deleteCrop(id);
  };

  const handleOnCheck = crop => {
    actions.updateCropActive(crop);
  };

  return (
    <div className="CropCard col-sm-2">
      <img
        src={crop.image_url}
        className="square-image small-image"
        alt={crop.name}
      />
      <h3>
        <Link to={`/crops/${crop.id}`}>{crop.name}</Link>
      </h3>
      <p>Days to Maturity: {crop.days_to_maturity}</p>
      <p>
        Planted on <DateFormat date={crop.date_planted} />
      </p>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={crop.active}
            onChange={() => handleOnCheck(crop)}
          />{" "}
          Active
        </label>
      </div>
      <button
        className={"btn btn-danger " + `delete_crop_${crop.id}`}
        onClick={() => handleOnClick(crop.id)}
      >
        Delete
      </button>
      <Link
        to={`${match.url}/${crop.id}/Edit`}
        className={"btn btn-primary " + `edit_crop_${crop.id}`}
      >
        Edit
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default withRouter(connect(null, mapDispatchToProps)(CropListItem));
