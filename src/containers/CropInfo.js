import React, { Component } from "react";

class CropInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      error: false,
      description: "",
      sun_requirements: ""
    };
  }

  componentWillReceiveProps() {
    this.setState({ showResults: false });
  }

  moreInfo = () => {
    fetch(`https://openfarm.cc/api/v1/crops/?filter=${this.props.name}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          showResults: true,
          description: json.data[0].attributes.description,
          sun_requirements: json.data[0].attributes.sun_requirements
        });
      })
      .catch(error => this.setState({ error: true }));
  };

  render() {
    return (
      <div>
        <h2>More Information</h2>
        <button className="btn btn-primary" onClick={() => this.moreInfo()}>
          More Information on this Crop
        </button>
        {this.state.showResults ? (
          <div>
            <p>
              <strong>Description:</strong> {this.state.description}
            </p>
            <p>
              <strong>Sun Requirements:</strong> {this.state.sun_requirements}
            </p>
          </div>
        ) : null}

        {this.state.error ? (
          <p>There was an error, please try a different crop.</p>
        ) : null}
      </div>
    );
  }
}

export default CropInfo;
