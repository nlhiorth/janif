import React, { Component } from 'react';
import Scoring from './Views/Scoring.jsx'

class ViewManager extends Component {

  render() {
    return (
      <div className="ViewManager">
        {true && <Scoring />}
      </div>
    );
  }
}

export default ViewManager;
