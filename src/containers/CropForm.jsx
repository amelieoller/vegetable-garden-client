import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { updateCrop, createCrop } from '../actions/cropActions';

class CropForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      daysToMaturity: 0,
      datePlanted: '',
      imageUrl: '',
      active: true,
    };

    this.baseState = this.state;
  }

  componentDidMount = () => {
    const { name } = this.state;
    const { crop } = this.props;

    if (!name) {
      this.setState(prevState => ({ ...prevState, ...crop }));
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { crop } = this.props;

    if (nextProps.match.path === '/crops/new') {
      this.resetForm();
    } else if (!isEqual(nextProps.crop, crop)) {
      this.setState(prevState => ({ ...prevState, ...nextProps.crop }));
    }
  };

  handleOnChange = (e) => {
    const {
      name, value, checked, type,
    } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  resetForm = () => this.setState(this.baseState);

  handleOnSubmit = (e, id) => {
    e.preventDefault();
    if (id) {
      this.props.updateCrop({ ...this.state }, id);
    } else {
      this.props.createCrop({ ...this.state });
      this.resetForm();
    }
    this.setState({ redirectToNewPage: true });
  };

  render() {
    const {
      crop: { id },
    } = this.props;
    const {
      redirectToNewPage, name, daysToMaturity, datePlanted, imageUrl, active,
    } = this.state;

    if (redirectToNewPage) {
      return <div>{id ? <Redirect to={`/crops/${id}`} /> : <Redirect to="/crops" />}</div>;
    }

    return (
      <div>
        <h1>
          {id ? 'Edit ' : 'Add '}
          Crop
        </h1>
        <form onSubmit={e => this.handleOnSubmit(e, id || false)}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
              className="form-control"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="daysToMaturity">Days To Maturity:</label>
            <input
              id="daysToMaturity"
              type="number"
              onChange={this.handleOnChange}
              name="daysToMaturity"
              value={daysToMaturity}
              className="form-control"
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="datePlanted">Date Planted</label>
            <input
              id="datePlanted"
              type="date"
              onChange={this.handleOnChange}
              name="datePlanted"
              value={datePlanted ? datePlanted.split('T')[0] : ''}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              id="imageUrl"
              type="text"
              onChange={this.handleOnChange}
              name="imageUrl"
              value={imageUrl}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="active">
              <input
                id="active"
                type="checkbox"
                checked={active}
                name="active"
                onChange={this.handleOnChange}
              />
              {' '}
              Active
            </label>
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

CropForm.propTypes = {
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
    path: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const crop = state.crops.find(c => c.id === +ownProps.match.params.cropId);

  if (crop) {
    return { crop };
  }
  return { crop: {} };
};

export default connect(
  mapStateToProps,
  { updateCrop, createCrop },
)(CropForm);
