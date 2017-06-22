import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Scoring">
        <ScoreCard goto={this.props.goto}/>
      </div>
    );
  }
}

export default Scoring;
