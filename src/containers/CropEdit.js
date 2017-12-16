import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";

import { updateCrop } from "../actions/cropActions";

class CropEdit extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.crop.name || "",
      days_to_maturity: this.props.crop.days_to_maturity || "",
      date_planted: this.props.crop.date_planted || "",
      image_url: this.props.crop.image_url || "",
      active: this.props.crop.active || false
    };
  }

  handleOnChange = event => {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleOnSubmit = (event, id) => {
    event.preventDefault();
    const crop = Object.assign({}, this.state);

    this.props.updateCrop(crop, id);
  };

  render() {
    return (
      <div>
        <h1>Edit Crop</h1>
        <form
          onSubmit={event => this.handleOnSubmit(event, this.props.crop.id)}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={this.state.name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="days_to_maturity">Days To Maturity:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="days_to_maturity"
              value={this.state.days_to_maturity}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date_planted">Date Planted</label>
            <input
              type="date"
              onChange={this.handleOnChange}
              name="date_planted"
              value={this.state.date_planted}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="image_url"
              value={this.state.image_url}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={this.state.active}
                name="active"
                onChange={this.handleOnChange}
              />{" "}
              Active
            </label>
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
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

export default connect(mapStateToProps, { updateCrop })(CropEdit);
