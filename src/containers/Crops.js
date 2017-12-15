import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/cropActions'

import CropForm from './CropForm'
import Crop from '../components/Crop';

class Crops extends Component {

   componentDidMount() {
      const {crops, actions} = this.props      
      
      if(crops.length === 0) {
         actions.fetchCrops()
      }
   }

   render() {
      const {crops} = this.props      
      return (
         <div className="CropsContainer">
            <h1>Crops</h1>
            {crops.map((crop, index) => <Crop key={index} crop={crop} />)}
            <CropForm />
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