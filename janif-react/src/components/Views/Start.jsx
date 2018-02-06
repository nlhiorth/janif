import React, { Component } from 'react';
import './Start.css';

class Start extends Component {

  render() {
    return (
      <div className="Start">
        <div className="StartLogo">JANIF</div>
        <div className="StartButton" onClick={() => this.props.gotoView('setup', false)}>NEW GAME</div>
        <div className="StartButton" onClick={() => this.props.gotoView('join', false)}>JOIN GAME</div>
      </div>
    );
  }
}

export default Start;
