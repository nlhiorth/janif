import React, { Component } from 'react';
import Scoring from './Views/Scoring.jsx'
import Summary from './Views/Summary.jsx'

class ViewManager extends Component {

  render() {
    return (
      <div className="ViewManager">
        {false && <Scoring />}
        {true && <Summary />}
      </div>
    );
  }
}

export default ViewManager;
