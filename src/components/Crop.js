import React, {Component} from 'react';

const API_URL = process.env.REACT_APP_API_URL;

class Crop extends Component {

   render() {
      const {id, name, days_to_maturity} = this.props.crop
      
      return (
         <div className="CropCard">
            <h3>{name}</h3>
            <p>Days to Maturity: {days_to_maturity}</p>
         </div>
      )
   }
}

export default Crop;