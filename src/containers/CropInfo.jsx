import React, { Component } from 'react';

class CropInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      error: false,
      description: '',
      sunRequirements: '',
      rowSpacing: '',
      spread: '',
    };
  }

  componentWillReceiveProps() {
    this.setState({ showResults: false });
  }

  moreInfo() {
    const { name } = this.props;

    fetch(`https://openfarm.cc/api/v1/crops/?filter=${name}`)
      .then(response => response.json())
      .then((json) => {
        function search(key, resultsArray) {
          for (let i = 0; i < resultsArray.length; i += 1) {
            if (resultsArray[i].attributes[key] !== null) {
              return resultsArray[i].attributes[key];
            }
          }
        }

        if (json.data.length !== 0) {
          this.setState({
            showResults: true,
            description: search('description', json.data),
            sunRequirements: search('sun_requirements', json.data),
            rowSpacing: search('row_spacing', json.data),
            spread: search('spread', json.data),
          });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const {
      showResults, description, sunRequirements, rowSpacing, spread, error,
    } = this.state;

    return (
      <div>
        <h2>More Information</h2>
        <button type="submit" className="btn btn-primary" onClick={() => this.moreInfo()}>
          More Information on this Crop
        </button>
        {showResults ? (
          <div>
            <p>
              <strong>Description:</strong>
              {' '}
              {description}
            </p>
            <p>
              <strong>Sun Requirements:</strong>
              {' '}
              {sunRequirements}
            </p>
            <p>
              <strong>Row Spacing:</strong>
              {' '}
              {rowSpacing}
              {' '}
cm
            </p>
            <p>
              <strong>Spread:</strong>
              {' '}
              {spread}
              {' '}
cm
            </p>
          </div>
        ) : null}

        {error ? <p>There was an error, please try a different crop.</p> : null}
      </div>
    );
  }
}

export default CropInfo;
