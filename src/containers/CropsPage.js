import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cropActions";

import CropsList from "../components/CropsList";
import CropShow from "./CropShow";
import CropNew from "./CropNew";
import CropEdit from "./CropEdit";

class CropsPage extends Component {
  componentDidMount() {
    const { crops, actions } = this.props;

    if (crops.length === 0) {
      actions.fetchCrops();
    }
  }

  render() {
    const { crops, match } = this.props;

    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path={`${match.url}/:cropId/edit`}
            component={CropEdit}
          />
          <Route path={`${match.url}/new`} component={CropNew} />
          <Route path={`${match.url}/:cropId`} component={CropShow} />
          <Route
            exact
            path={match.url}
            render={() => <h3>Select a Crop to View Details</h3>}
          />
        </Switch>
        <hr />
        <CropsList crops={crops} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crops: state.crops
  };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CropsPage);
