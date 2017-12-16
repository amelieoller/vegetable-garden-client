import React, { Component } from "react";
import { connect } from "react-redux";

import { createCrop } from "../actions/cropActions";

class CropNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      days_to_maturity: "",
      date_planted: "",
      image_url: "",
      active: false
    };
  }

  handleOnChange = event => {
    const { name, value, checked, type } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const crop = Object.assign({}, this.state);

    this.props.createCrop(crop);
    this.setState({
      name: "",
      days_to_maturity: "",
      date_planted: "",
      image_url: "",
      active: false
    });
  };

  render() {
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

export default connect(null, { createCrop })(CropNew);
