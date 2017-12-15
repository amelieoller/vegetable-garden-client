import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cropActions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

class CropListItem extends Component {
  handleOnClick = id => {
    return fetch(`${API_URL}/crops/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          this.props.actions.deleteCrop(id);
        } else {
          window.alert("Unable to delete");
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    const { crop, match } = this.props;

    return (
      <div className="CropCard">
        <h3>
          <Link to={`/crops/${crop.id}`}>{crop.name}</Link>
        </h3>
        <p>Days to Maturity: {crop.days_to_maturity}</p>
        <button
          className={"btn btn-danger " + `delete_crop_${crop.id}`}
          onClick={() => this.handleOnClick(crop.id)}
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
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default withRouter(connect(null, mapDispatchToProps)(CropListItem));
