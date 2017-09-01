import React, { Component } from 'react';
import './Scoring.css';

class Backward extends Component {
  render() {
    return (
      <div className="Backward" style={{backgroundColor: this.props.color}} onClick={() => this.props.onClick()}></div>
    );
  }
}

export default Backward;
