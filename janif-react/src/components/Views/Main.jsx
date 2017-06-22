import React, { Component } from 'react';
import PlayerCard from '../Common/PlayerCard.jsx';
import Next from '../Buttons/Next.jsx';
import './Main.css'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [
        {
          id: 0,
          name: 'NILS',
          score: 45,
          prevscore: 13,
          banana: false,
          bean: true,
          color: 'hsl(344, 33%, 56%)',
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 99,
          prevscore: 20,
          banana: true,
          bean: false,
          color: 'hsl(58, 33%, 56%)',
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: 13,
          prevscore: 51,
          banana: false,
          bean: false,
          color: 'hsl(205, 33%, 56%)',
        },
        {
          id: 3,
          name: 'PEPPERONI',
          score: 44,
          prevscore: 54,
          banana: true,
          bean: true,
          color: 'hsl(157, 33%, 56%)',
        }
      ],
    }
  }

  render() {
    return (
      <div className="Main">
        <div className="LeftColumn">
          <ol className="PlayerList">
            {this.state.players.sort((a, b) => {
              return a.score - b.score
            }).filter((e, i) => {
              return i % 2 === 0;
            }).map(player => (
              <li key={player.id}>
                <PlayerCard player={player}/>
              </li>
            ))}
          </ol>
        </div>
        <div className="RightColumn">
          <Next label='CONTINUE' onClick={() => this.props.goto({destination: 'scoring', header: false})}/>
          <ol className="PlayerList">
            {this.state.players.sort((a, b) => {
              return a.score - b.score
            }).filter((e, i) => {
              return i % 2 === 1;
            }).map(player => (
              <li key={player.id}>
                <PlayerCard player={player}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Main;
