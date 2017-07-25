import React, { Component } from 'react';
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  render() {
    return (
      <div className="Scoring">
        <ScoreCard goto={this.props.goto}/>
      </div>
    );
  }
}

export default Scoring;
