import React, { Component } from 'react';

import Crops from './Crops'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      crops: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/crops`)
      .then(response => response.json())
      .then(crops => this.setState({
        crops: crops,
        loading: false
      }))
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ?
          <h3>loading...</h3>
        :
          <Crops crops={this.state.crops}/>
        }
      </div>
    );
  }
}

export default App;