import React, { Component } from 'react';
import './Scoring.css'

class Loss extends Component {

  render() {
    return (
      <div className={this.props.condition === 'loss' ? 'LossSelected' : 'Loss'} onClick={() => this.props.onClick()}></div>
    );
  }
}

export default Loss;
