import React, { Component } from 'react';
import './ScoreCard.css';
import Forward from '../Buttons/Forward.jsx';

class ScoreCard extends Component {

  render() {
    return (
      <div className="ScoreCard">
        <div className="Header">
          <div className="Name">{'NAME'}</div>
        </div>
        <div className="Body">
          <div className="Score">{43}</div>
          <div className="Buttons">
          <Forward />
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
