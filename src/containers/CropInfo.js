import React, { Component } from "react";

class CropInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      error: false,
      description: "",
      sun_requirements: "",
      row_spacing: "",
      spread: ""
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

        function search(key, resultsArray) {
          for (var i = 0; i < resultsArray.length; i++) {
            if (resultsArray[i].attributes[key] !== null) {
              return resultsArray[i].attributes[key];
            }
          }
        }

        this.setState({
          showResults: true,
          description: search("description", json.data),
          sun_requirements: search("sun_requirements", json.data),
          row_spacing: search("row_spacing", json.data),
          spread: search("spread", json.data)
        });
      })
      .catch(error => this.setState({ error: true }));
  };

  render() {
    const {
      showResults,
      description,
      sun_requirements,
      row_spacing,
      spread,
      error
    } = this.state;

    return (
      <div>
        <h2>More Information</h2>
        <button className="btn btn-primary" onClick={() => this.moreInfo()}>
          More Information on this Crop
        </button>
        {showResults ? (
          <div>
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Sun Requirements:</strong> {sun_requirements}
            </p>
            <p>
              <strong>Row Spacing:</strong> {row_spacing} cm
            </p>
            <p>
              <strong>Spread:</strong> {spread} cm
            </p>
          </div>
        ) : null}

        {error ? <p>There was an error, please try a different crop.</p> : null}
      </div>
    );
  }
}

export default CropInfo;
