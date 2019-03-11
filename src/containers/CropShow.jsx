import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DateFormat from '../components/DateFormat';
import CropInfo from './CropInfo';

const CropShow = ({ crop }) => {
  const maturityDate = (date, daysToMaturity) => {
    const matDate = new Date(date);
    matDate.setDate(matDate.getDate() + daysToMaturity);
    return toString(matDate);
  };

  const pastDue = (matDate) => {
    let message = '';
    if (matDate < new Date()) {
      message = 'Your crop should be ready.';
    } else {
      message = 'Your crop is not ready yet.';
    }
    return message;
  };

  const {
    imageUrl, name, daysToMaturity, datePlanted, active,
  } = crop;

  return (
    <div className="row">
      <div className="col-sm-3">
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
      </div>
      <div className="col-sm-3">
        <h2>{name}</h2>
        <p>
          Days to Maturity:
          {daysToMaturity}
        </p>
        <p>
          Date Planted:
          {' '}
          <DateFormat date={datePlanted} />
        </p>
        <p>
          This crop is
          {' '}
          <strong>{active ? '' : 'not'}</strong>
          {' '}
active in your garden.
        </p>
        <p>
          Maturity Date:
          {' '}
          <strong>
            <DateFormat date={maturityDate(datePlanted, daysToMaturity)} />
          </strong>
        </p>
        <p>{pastDue(maturityDate(datePlanted, daysToMaturity))}</p>
      </div>
      <div className="col-sm-6">
        <CropInfo name={name} />
      </div>
    </div>
  );
};

CropShow.propTypes = {
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
};

const mapStateToProps = (state, ownProps) => {
  const crop = state.crops.find(c => c.id === +ownProps.match.params.cropId);

  if (crop) {
    return { crop };
  }
  return { crop: {} };
};

export default connect(mapStateToProps)(CropShow);
