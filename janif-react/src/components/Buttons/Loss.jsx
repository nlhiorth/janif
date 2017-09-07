import React, { Component } from 'react';
import './Scoring.css'

class Loss extends Component {

  render() {
    return (
      <div className={this.props.condition === 'loss' ? 'LossSelected' : 'Loss'} style={{backgroundColor: this.props.color}} onClick={() => this.props.onClick()}>+25</div>
    );
  }
}

export default Loss;
