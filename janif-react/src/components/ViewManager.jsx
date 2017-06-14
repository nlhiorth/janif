import React, { Component } from 'react';
import Scoring from './Views/Scoring.jsx'
import Summary from './Views/Summary.jsx'
import Main from './Views/Main.jsx'
import Header from './Common/Header.jsx';
import HeadSpace from './Common/HeadSpace.jsx';

class ViewManager extends Component {

  render() {
    return (
      <div className="ViewManager">
        <Header />
        <HeadSpace />
        {false && <Scoring />}
        {false && <Summary />}
        {true && <Main />}
      </div>
    );
  }
}

export default ViewManager;
