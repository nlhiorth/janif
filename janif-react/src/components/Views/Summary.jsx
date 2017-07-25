import React, { Component } from 'react';
import './Summary.css';
import SummaryCard from '../Common/SummaryCard.jsx';
import Next from '../Buttons/Next.jsx';
import Last from '../Buttons/Last.jsx';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changes: [
        {
          id: 0,
          name: 'NILS',
          score: 26,
          condition: 'loss',
          color: 'hsl(344, 33%, 56%)',
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 0,
          condition: 'janif',
          color: 'hsl(58, 33%, 56%)',
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: 13,
          condition: 'normal',
          color: 'hsl(205, 33%, 56%)',
        },
        {
          id: 3,
          name: 'PEPPERONI',
          score: -10,
          condition: 'win',
          color: 'hsl(157, 33%, 56%)',
        }
      ],
    }
  }

  render() {
    return (
      <div className="Summary">
        <div>
          <ol className="SummaryList">
            {this.state.changes.sort((a, b) => {
              return a.score - b.score
            }).map(player => (
              <li key={player.id}>
                <SummaryCard name={player.name} score={player.score} color={player.color}/>
              </li>
            ))}
          </ol>
        </div>
        <div className="SummaryButtons">
          <Last label='GO BACK'/>
          <Next label='CONTINUE' onClick={() => this.props.goto({destination: 'main', header: true})}/>
        </div>
      </div>
    );
  }
}

export default Summary;
