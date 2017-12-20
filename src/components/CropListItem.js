import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import DateFormat from "./DateFormat";

const CropListItem = ({ crop, match, deleteCrop, updateCropActive }) => {
  const handleOnClick = id => {
    deleteCrop(id);
  };

  const handleOnCheck = crop => {
    updateCropActive(crop);
  };

  const { image_url, name, date_planted, days_to_maturity, id, active } = crop;

  return (
    <div className="CropCard col-sm-2">
      {image_url ? (
        <div
          className="square"
          style={{ backgroundImage: `url(${image_url})` }}
        />
      ) : (
        <div
          className="square"
          style={{
            backgroundImage:
              "url(https://x.kinja-static.com/assets/images/logos/placeholders/default.png)"
          }}
        />
      )}
      <h3>
        <Link to={`/crops/${id}`}>{name}</Link>
      </h3>
      <p>Days to Maturity: {days_to_maturity}</p>
      <p>
        Planted on <DateFormat date={date_planted} />
      </p>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={active}
            onChange={() => handleOnCheck(crop)}
          />{" "}
          Active
        </label>
      </div>
      <button
        className="btn btn-danger margin-right"
        onClick={() => handleOnClick(id)}
      >
        Delete
      </button>
      <Link to={`${match.url}/${id}/Edit`} className="btn btn-primary">
        Edit
      </Link>
    </div>
  );
};

export default withRouter(CropListItem);
