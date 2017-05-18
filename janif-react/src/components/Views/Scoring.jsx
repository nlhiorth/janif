import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changes: [
        {
          id: 0,
          name: 'NILS',
          score: 43,
          condition: 'normal'
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 42,
          condition: 'normal'
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: 13,
          condition: 'normal'
        }
      ],
    }
  }

  render() {
    return (
      <div className="Scoring">
        <ScoreCard />
      </div>
    );
  }
}

export default Scoring;
