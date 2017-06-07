import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Summary.css';
import SummaryCard from '../Common/SummaryCard.jsx';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changes: [
        {
          id: 0,
          name: 'NILS',
          score: 26,
          condition: 'loss'
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 0,
          condition: 'janif'
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: 13,
          condition: 'normal'
        },
        {
          id: 3,
          name: 'PEPPERONI',
          score: -10,
          condition: 'win',
        }
      ],
    }
  }

  render() {
    return (
      <div className="Summary">
        <ol className="SummaryList">
          {this.state.changes.sort((a, b) => {
            return a.score - b.score
          }).map(player => (
            <li key={player.id}>
              <SummaryCard name={player.name} score={player.score}/>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Summary;
