import React, { Component } from 'react';
import './ScoreCard.css';
import Forward from '../Buttons/Forward.jsx';
import Backward from '../Buttons/Backward.jsx';
import DuelLoss from '../Buttons/DuelLoss.jsx';
import Loss from '../Buttons/Loss.jsx';
import Win from '../Buttons/Win.jsx';
import Janif from '../Buttons/Janif.jsx';


/*
Note to self, do everything in ScoreCard instead of Scoring
*/

class ScoreCard extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
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

  focus() {
    this.textInput.focus();
  }

  loss() {
    const player = this.state.players[this.state.curplayer];
    player.condition = 'loss';
    player.score += 25;
    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => this.next()));
  }

  janif() {
    const player = this.state.players[this.state.curplayer];
    player.condition = 'janif';
    player.score = 0;
    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => this.next()));
  }

  win() {
    const player = this.state.players[this.state.curplayer];
    player.condition = 'win';
    player.score = -10;
    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => this.next()));
  }

  next() {
    if (this.state.curplayer + 1 < this.state.players.length) {
      this.setState(prevState => ({
        curplayer: prevState.curplayer + 1
      }));
    } else {
      // Go to next page
    }
    this.focus();
  }

  last() {
    if (this.state.curplayer > 0) {
      this.setState(prevState => ({
        curplayer: prevState.curplayer - 1
      }));
    }
    this.focus();
  }

  onChange(e) {
    var str = e.target.value;
    const player = this.state.players[this.state.curplayer];
    player.score = parseInt(str);
    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => console.log(this.state.players)));
    if (str.length === 2) {
      this.next();
    }
  }

  onSubmit(e) {
    e.preventDefault();
    var score = this.state.input;
    this.focus();
  }

  render() {
    return (
      <div className="ScoreCard">
        <div className="Header">
          <div className="Name">{this.state.players[this.state.curplayer].name}</div>
        </div>
        <div className="Body">
          <form onSubmit={this.onSubmit}>
            <input value={this.state.players[this.state.curplayer].score} onChange={this.onChange} ref={(input) => { this.textInput = input; }} className="Score" min="0" max="50" size="3" maxLength="2" pattern="\d*" placeholder="+0" autoFocus={true}/>
          </form>
          <div className="Buttons">
            <Backward onClick={() => this.last()}/>
            <Loss condition={this.state.players[this.state.curplayer].condition} onClick={() => this.loss()}/>
            <Janif condition={this.state.players[this.state.curplayer].condition} onClick={() => this.janif()}/>
            <Win condition={this.state.players[this.state.curplayer].condition} onClick={() => this.win()}/>
            <Forward onClick={() => this.next()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
