import React, { Component } from 'react';
import ScoreForm from './ScoreForm.jsx';
import Bean from '../Buttons/Bean.jsx';
import Banana from '../Buttons/Banana.jsx';
import DuelLoss from '../Buttons/DuelLoss.jsx';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="name">
          <span className="score">{this.props.player.score}</span>
          <span>{' ' + this.props.player.name}</span>
        </div>
        <div className="buttonrow">
          <ScoreForm addScore={this.props.addScore} id={this.props.player.id}/>
          <div className="buttoncontainer">
            <DuelLoss onClick={() => this.props.onLoss(this.props.player.id)}/>
          </div>
          <div className="buttoncontainer">
            <Banana used={this.props.player.banana} onClick={() => this.props.onBanana(this.props.player.id)}/>
          </div>
          <div className="buttoncontainer last">
            <Bean used={this.props.player.bean} onClick={() => this.props.onBean(this.props.player.id)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
