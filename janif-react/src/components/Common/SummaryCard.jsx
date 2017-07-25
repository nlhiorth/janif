import React, { Component } from 'react';
import './SummaryCard.css';

class SummaryCard extends Component {
  render() {
    return (
      <div className="SummaryCard" style={{backgroundColor: this.props.color, borderColor: this.props.color}}>
        <div className="Name">{this.props.name}</div>
        <div className="Background">
          <div className="Score" style={{color: this.props.color}}>{(this.props.score >= 0) ? '+'+this.props.score : this.props.score}</div>
        </div>
      </div>
    );
  }
}

export default SummaryCard;
