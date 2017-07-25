import React, { Component } from 'react';
import './PlayerCard.css';
import Banana from '../Buttons/Banana.jsx';
import Bean from '../Buttons/Bean.jsx';

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard" style={{borderColor: this.props.player.color}}>
        <div className="Header" style={{backgroundColor: this.props.player.color}}>
          <div className="Name">{this.props.player.name.toUpperCase()}</div>
        </div>
        <div className="Body">
          <div className="Score" style={{color: this.props.player.color}}>
            {this.props.player.score}
          </div>
          <div className="Buttons">
            <Banana fresh={this.props.player.banana} onClick={() => this.props.onBanana(this.props.player.id)}/>
            <Bean fresh={this.props.player.bean} onClick={() => this.props.onBean(this.props.player.id)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
