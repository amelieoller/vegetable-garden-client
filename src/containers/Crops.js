import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/cropActions'

import Crop from '../components/Crop';

class Crops extends Component {

   componentDidMount() {
      if(this.props.crops.crops.length === 0) {
         this.props.actions.fetchCrops()
      }
   }

   render() {
      return (
         <div className="CropsContainer">
            <h1>Crops</h1>
            {this.props.crops.crops.map((crop, index) =>
               <Crop key={index} crop={crop} />
            )}
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      crops: state.crops
   }
}

const mapDispatchToProps = (dispatch) => {
   return {actions: bindActionCreators(actions, dispatch)};   
}

export default connect(mapStateToProps, mapDispatchToProps)(Crops);