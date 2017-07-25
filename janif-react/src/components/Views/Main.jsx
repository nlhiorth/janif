import React, { Component } from 'react';
import PlayerCard from '../Common/PlayerCard.jsx';
import Next from '../Buttons/Next.jsx';
import './Main.css'

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="Main">
        <div className="LeftColumn">
          <ol className="PlayerList">
            {this.props.players.sort((a, b) => {
              return a.score - b.score
            }).filter((e, i) => {
              return i % 2 === 0;
            }).map(player => (
              <li key={player.id}>
                <PlayerCard player={player} onBanana={this.props.onBanana} onBean={this.props.onBean}/>
              </li>
            ))}
          </ol>
        </div>
        <div className="RightColumn">
          <Next label='CONTINUE' onClick={() => this.props.goto({destination: 'scoring', header: false})}/>
          <ol className="PlayerList">
            {this.props.players.sort((a, b) => {
              return a.score - b.score
            }).filter((e, i) => {
              return i % 2 === 1;
            }).map(player => (
              <li key={player.id}>
                <PlayerCard player={player} onBanana={this.props.onBanana} onBean={this.props.onBean}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Main;
