import React, { Component } from 'react';
import './ScoreCard.css';
import Forward from '../Buttons/Forward.jsx';
import Backward from '../Buttons/Backward.jsx';
import DuelLoss from '../Buttons/DuelLoss.jsx';

class ScoreCard extends Component {

  render() {
    return (
      <div className="ScoreCard">
        <div className="Header">
          <div className="Name">{'NAME'}</div>
        </div>
        <div className="Body">
          <div className="Score">{'+43'}</div>
          <div className="Buttons">
            <Backward />
            <DuelLoss />
            <DuelLoss />
            <DuelLoss />
            <Forward />
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
