import React, { Component } from 'react';
import './Scoring.css'

class Win extends Component {

  render() {
    return (
      <div className={this.props.condition === 'win' ? 'WinSelected' : 'Win'} onClick={() => this.props.onClick()}></div>
    );
  }
}

export default Win;
