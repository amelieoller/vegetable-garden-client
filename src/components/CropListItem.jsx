import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import DateFormat from './DateFormat';

const CropListItem = ({
  crop: {
    imageUrl, name, datePlanted, daysToMaturity, id, active,
  },
  crop,
  match,
  deleteCrop,
  updateCropActive,
}) => (
  <div className="CropCard col-12 col-sm-6 col-md-4 col-lg-3">
    {imageUrl ? (
      <div className="square" style={{ backgroundImage: `url(${imageUrl})` }} />
    ) : (
      <div
        className="square"
        style={{
          backgroundImage:
            'url(https://x.kinja-static.com/assets/images/logos/placeholders/default.png)',
        }}
      />
    )}
    <h3>
      <Link to={`/crops/${id}`}>{name}</Link>
    </h3>
    <p>
      Days to Maturity:
      {daysToMaturity}
    </p>
    <p>
      Planted on
      {' '}
      <DateFormat date={new Date(datePlanted)} />
    </p>
    <div className="checkbox">
      <label htmlFor={`crop-${crop.id}`}>
        <input
          id={`crop-${crop.id}`}
          type="checkbox"
          checked={active}
          onChange={() => {
            updateCropActive(crop);
          }}
        />
        {' '}
        Active
      </label>
    </div>
    <button type="submit" className="btn btn-danger margin-right" onClick={() => deleteCrop(id)}>
      Delete
    </button>
    <Link to={`${match.url}/${id}/Edit`} className="btn btn-primary">
      Edit
    </Link>
  </div>
);

CropListItem.propTypes = {
  crop: PropTypes.shape({
    active: PropTypes.bool,
    created_at: PropTypes.string,
    datePlanted: PropTypes.string,
    daysToMaturity: PropTypes.number,
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    updated_at: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  deleteCrop: PropTypes.func.isRequired,
  updateCropActive: PropTypes.func.isRequired,
};

export default withRouter(CropListItem);
