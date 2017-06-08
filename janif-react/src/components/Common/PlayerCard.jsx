import React, { Component } from 'react';
import './PlayerCard.css';
import Banana from '../Buttons/Banana.jsx';
import Bean from '../Buttons/Bean.jsx';

class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PlayerCard" style={{borderColor: this.props.player.color}}>
        <div className="Header" style={{backgroundColor: this.props.player.color}}>
          <div className="Name">{this.props.player.name}</div>
        </div>
        <div className="Body">
          <div className="Score" style={{color: this.props.player.color}}>
            {this.props.player.score}
          </div>
          <div className="Buttons">
            <Banana onClick={this.props.onBanana}/>
            <Bean onClick={this.props.onBean}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
