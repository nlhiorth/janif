import React, { Component } from 'react';
import './ScoreCard.css';
import Forward from '../Buttons/Forward.jsx';
import Backward from '../Buttons/Backward.jsx';
import DuelLoss from '../Buttons/DuelLoss.jsx';
import Loss from '../Buttons/Loss.jsx';
import Win from '../Buttons/Win.jsx';
import Janif from '../Buttons/Janif.jsx';

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
          condition: 'normal',
          color: 'hsl(344, 33%, 56%)',
        },
        {
          id: 1,
          name: 'CHRIS',
          score: '',
          condition: 'normal',
          color: 'hsl(58, 33%, 56%)',
        },
        {
          id: 2,
          name: 'PINGIZ',
          score: '',
          condition: 'normal',
          color: 'hsl(205, 33%, 56%)',
        },
        {
          id: 3,
          name: 'PEPPERONI',
          score: '',
          condition: 'normal',
          color: 'hsl(157, 33%, 56%)',
        }
      ],
    }
  }

  focus() {
    this.textInput.focus();
  }

  loss() {
    const player = Object.assign({}, this.state.players[this.state.curplayer]);

    if (player.condition === 'loss') {
      player.condition = 'normal';
      player.score -= 25;
    } else {
      player.condition = 'loss';
      player.score += 25;
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => this.next()));
  }

  janif() {
    const player = Object.assign({}, this.state.players[this.state.curplayer]);

    if (player.condition === 'janif') {
      player.condition = 'normal';
      player.score = 0;
    } else {
      player.condition = 'janif';
      player.score = 0;
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => this.next()));
  }

  win() {
    const player = Object.assign({}, this.state.players[this.state.curplayer]);

    if (player.condition === 'win') {
      player.condition = 'normal';
      player.score = 0;
    } else {
      player.condition = 'win';
      player.score = -10;
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }), (() => this.next()));
  }

  next() {
    const player = Object.assign({}, this.state.players[this.state.curplayer]);
    if (player.score === '') {
      player.score = 0;
      this.setState(prevState => ({
        players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
      }));
    }
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
    const player = Object.assign({}, this.state.players[this.state.curplayer]);

    if (str === '') {
      player.score = 0;
    } else {
      player.score = parseInt(str, 10);
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.state.curplayer ? player : pl)
    }));

    if (player.score > 9) {
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
      <div className="ScoreCard" style={{borderColor: this.state.players[this.state.curplayer].color}}>
        <div className="Header" style={{backgroundColor: this.state.players[this.state.curplayer].color}}>
          <div className="Name">{this.state.players[this.state.curplayer].name}</div>
        </div>
        <div className="Body">
          <form onSubmit={this.onSubmit}>
            <input value={this.state.players[this.state.curplayer].score} onChange={this.onChange} ref={(input) => { this.textInput = input; }} style={{color: this.state.players[this.state.curplayer].color}} className="Score" min="0" max="50" size="3" maxLength="2" pattern="\d*" placeholder="+0" autoFocus={true}/>
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
