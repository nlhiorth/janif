import React, { Component } from 'react';
import './SummaryCard.css';

class SummaryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curplayer: 0,
      players: [
        {
          id: 0,
          name: 'NILS',
          score: '',
          condition: 'normal'
        },
        {
          id: 1,
          name: 'CHRIS',
          score: '',
          condition: 'normal'
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: '',
          condition: 'normal'
        }
      ],
    }
  }

  render() {
    return (
      <div className="SummaryCard">

      </div>
    );
  }
}

export default SummaryCard;
