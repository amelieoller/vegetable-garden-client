import React, { Component } from "react";
import { connect } from "react-redux";
import { isEqual } from "lodash";

import { updateCrop } from "../actions/cropActions";
import { createCrop } from "../actions/cropActions";

class CropForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      days_to_maturity: "",
      date_planted: "",
      image_url: "",
      active: true
    };

    this.baseState = this.state;
  }

  resetForm = () => {
    this.setState(this.baseState);
  };

  componentDidMount() {
    if (!this.state.name) {
      this.setState(...this.state, this.props.crop);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path === "/crops/new") {
      this.resetForm();
    } else {
      if (!isEqual(nextProps.crop, this.props.crop)) {
        this.setState(...this.state, nextProps.crop);
      }
    }
  }

  handleOnChange = e => {
    const { name, value, checked, type } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleOnSubmit = (e, id) => {
    e.preventDefault();
    if (id) {
      this.props.updateCrop({ ...this.state }, id);
    } else {
      this.props.createCrop({ ...this.state });
      this.resetForm();
    }
  };

  render() {
    const { id } = this.props.crop;
    return (
      <div>
        <h1>
          {id ? "Edit " : "Add "}
          Crop
        </h1>
        <form onSubmit={e => this.handleOnSubmit(e, id ? id : false)}>
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
              value={this.state.date_planted.split("T")[0]}
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

export default connect(mapStateToProps, { updateCrop, createCrop })(CropForm);
