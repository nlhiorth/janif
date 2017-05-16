import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './Scoring.css';
import ScoreCard from '../Common/ScoreCard.jsx';

class Scoring extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.last = this.last.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      curplayer: 0,
      changes: [
        {
          id: 0,
          name: 'NILS',
          score: 43,
          condition: 'normal'
        },
        {
          id: 1,
          name: 'CHRIS',
          score: 42,
          condition: 'normal'
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: 13,
          condition: 'normal'
        }
      ],
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

  update(change) {
    console.log('hellolo');
    this.setState(prevState => ({
      changes: prevState.changes.map(ch => ch.id === change.id ? change : ch)
    }), (() => console.log(this.state.changes)));

  }

  render() {
    return (
      <div className="Scoring">
        <ScoreCard player={this.state.changes.find(pl => (
          pl.id === this.state.curplayer
        ))} next={this.next} last={this.last} update={this.update}/>
      </div>
    );
  }
}

export default Scoring;
