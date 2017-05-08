import React, { Component } from 'react';
import Player from '../Common/Player.jsx';

class Main extends Component {

  render() {
    return (
      <div>
        <ol className="main">
          {this.props.players.map(player => (
            <li key={player.name}>
              <Player player={player} onBanana={this.props.onBanana()} onBean={this.props.onBean()} addScore={this.props.addScore()} onLoss={this.props.onLoss()}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Main;
