import React, { Component } from 'react';
import PlayerCard from '../Common/PlayerCard.jsx';
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
          score: 23,
          prevscore: 20,
          banana: true,
          bean: false,
          color: 'hsl(58, 33%, 56%)',
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: 79,
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
        <ol className="PlayerList">
          {this.state.players.sort((a, b) => {
            return a.score - b.score
          }).map(player => (
            <li key={player.id}>
              <PlayerCard player={player}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Main;
