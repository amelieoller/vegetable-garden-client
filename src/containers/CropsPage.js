import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/cropActions";

import CropsList from "../components/CropsList";
import CropShow from "./CropShow";
import CropForm from "./CropForm";

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
            component={CropForm}
          />
          <Route exact path={`${match.url}/new`} component={CropForm} />
          <Route exact path={`${match.url}/:cropId`} component={CropShow} />
          <Route
            exact
            path={match.url}
            render={() => (
              <h3>
                Select a Crop to View Details or
                <Link to={`${match.url}/new`}> Add a New Crop</Link>.
              </h3>
            )}
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
