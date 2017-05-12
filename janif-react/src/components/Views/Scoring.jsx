import React, { Component } from 'react';
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curplayer: 0,
      players: [
        {
          id: 0,
          name: 'NILS',
          score: 43
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 42
        }
      ]
    }
  }

  renderPlayers() {
    this.state.players.filter(player => (
      player.id === this.state.curplayer;
    ));
  }

  render() {
    return (
      <div className="Scoring">
        <div>{this.renderPlayers()}</div>
      </div>
    );
  }
}

export default Scoring;
