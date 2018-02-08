import React, { Component } from 'react';
import JoinView from '../../containers/JoinView';
import './Start.css';

class Start extends Component {
  join() {
    this.focus();
  }

  render() {
    return (
      <div className="Start">
        <div className="StartLogo">JANIF</div>
        <div className="StartButton" onClick={() => this.props.gotoView('setup', false)}>NEW GAME</div>
        <JoinView />
      </div>
    );
  }
}

export default Start;
