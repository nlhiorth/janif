import React, { Component } from 'react';
import './SummaryCard.css';

class SummaryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SummaryCard">
        <div className="Name">{this.props.name}</div>
        <div className="Background">
          <div className="Score">{this.props.score}</div>
        </div>
      </div>
    );
  }
}

export default SummaryCard;
