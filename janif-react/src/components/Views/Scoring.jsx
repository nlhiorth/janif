import React, { Component } from 'react';
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  render() {
    return (
      <div className="Scoring">
        <ScoreCard players={this.props.players} curplayer={this.props.scoring.curplayer} rounds={this.props.scoring.rounds} onLoss={this.props.onLoss} onWin={this.props.onWin} onJanif={this.props.onJanif} nextPlayer={this.props.nextPlayer} prevPlayer={this.props.prevPlayer} setPoints={this.props.setPoints}gotoView={this.props.gotoView}/>
      </div>
    );
  }
}

export default Scoring;
