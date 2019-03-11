import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/cropActions';

import CropsList from '../components/CropsList';
import CropShow from './CropShow';
import CropForm from './CropForm';

class CropsPage extends Component {
  componentDidMount() {
    const {
      crops,
      actions: { fetchCrops },
    } = this.props;

    if (crops.length === 0) {
      fetchCrops();
    }
  }

  render() {
    const {
      crops,
      match,
      actions: { updateCropActive, deleteCrop },
    } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route exact path={`${match.url}/:cropId/edit`} component={CropForm} />
          <Route exact path={`${match.url}/new`} component={CropForm} />
          <Route exact path={`${match.url}/:cropId`} component={CropShow} />
          <Route
            exact
            path={match.url}
            render={() => (
              <h3>
                Select a Crop to View Details or
                <Link to={`${match.url}/new`}> Add a New Crop</Link>
.
              </h3>
            )}
          />
        </Switch>
        <hr />
        <CropsList crops={crops} updateCropActive={updateCropActive} deleteCrop={deleteCrop} />
      </div>
    );
  }
}

CropsPage.propTypes = {
  crops: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  crops: state.crops,
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CropsPage);
