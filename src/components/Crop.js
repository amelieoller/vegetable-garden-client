import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/cropActions'

const API_URL = process.env.REACT_APP_API_URL;

class Crop extends Component {

   handleOnClick = (id) => {
      return fetch(`${API_URL}/crops/${id}`, {
         method: 'DELETE'
      })
         .then(response => { 
            if (response.ok) {
               this.props.actions.deleteCrop(id)
            } else {
               window.alert('Unable to delete')
            }
         })
			.catch(error => console.log(error))
   }

   render() {
      const {id, name, days_to_maturity} = this.props.crop
      
      return (
         <div className="CropCard">
            <h3>{name}</h3>
            <p>Days to Maturity: {days_to_maturity}</p>
            <button className={`delete_crop_${id}`} onClick={() => this.handleOnClick(id)}>Delete</button>
         </div>
      )
   }
}

const mapStateToProps = (state, ownProps) => {
   return {
      crops: state.crops,
      crop: ownProps.crop
   }
}

const mapDispatchToProps = (dispatch) => {
   return {actions: bindActionCreators(actions, dispatch)};   
}

export default connect(mapStateToProps, mapDispatchToProps)(Crop);