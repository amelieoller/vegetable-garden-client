import React, { Component } from "react";
import { connect } from "react-redux";

import { updateCropFormData } from "../actions/cropFormActions";
import { createCrop } from "../actions/cropActions";

class CropNew extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentCropFormData = Object.assign({}, this.props.cropFormData, {
      [name]: value
    });
    this.props.updateCropFormData(currentCropFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createCrop(this.props.cropFormData);
  };

  render() {
    const { name, days_to_maturity } = this.props.cropFormData;
    return (
      <div>
        <h1>Add Crop</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="days_to_maturity">Days To Maturity:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="days_to_maturity"
              value={days_to_maturity}
              className="form-control"
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cropFormData: state.cropFormData
  };
};

export default connect(mapStateToProps, { updateCropFormData, createCrop })(
  CropNew
);
