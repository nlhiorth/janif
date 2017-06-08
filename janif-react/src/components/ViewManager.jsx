import React, { Component } from 'react';
import Scoring from './Views/Scoring.jsx'
import Summary from './Views/Summary.jsx'
import Main from './Views/Main.jsx'

class ViewManager extends Component {

  render() {
    return (
      <div className="ViewManager">
        {false && <Scoring />}
        {false && <Summary />}
        {true && <Main />}
      </div>
    );
  }
}

export default ViewManager;
