import React, { Component } from 'react';
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  render() {
    return (
      <div className="Scoring" style={this.props.style}>
        <ScoreCard players={this.props.players} curplayer={this.props.players[this.props.scoring.index]} index={this.props.scoring.index} rounds={this.props.scoring.rounds} curround={this.props.scoring.rounds[this.props.scoring.index]} onLoss={this.props.onLoss} onWin={this.props.onWin} onJanif={this.props.onJanif} nextPlayer={this.props.nextPlayer} prevPlayer={this.props.prevPlayer} setPoints={this.props.setPoints}gotoView={this.props.gotoView}/>
      </div>
    );
  }
}

export default Scoring;
