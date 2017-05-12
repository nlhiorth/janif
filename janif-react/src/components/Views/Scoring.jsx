import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.last = this.last.bind(this);

    this.state = {
      curplayer: 0,
      players: [
        {
          id: 0,
          name: 'NILS',
          score: 43
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 42
        }
      ]
    }
  }

  next() {
    this.setState(prevState => ({
      curplayer: prevState.curplayer + 1
    }));
  }

  last() {
    this.setState(prevState => ({
      curplayer: prevState.curplayer - 1
    }));
  }

  render() {
    return (
      <div className="Scoring">
        <ScoreCard player={this.state.players.find(pl => (
          pl.id === this.state.curplayer
        ))} next={this.next} last={this.last}/>;
      </div>
    );
  }
}

export default Scoring;
