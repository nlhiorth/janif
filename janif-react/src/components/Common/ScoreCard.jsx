import React, { Component } from 'react';
import './ScoreCard.css';
import Forward from '../Buttons/Forward.jsx';
import Backward from '../Buttons/Backward.jsx';
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
    const player = Object.assign({}, this.state.players[this.props.curplayer]);

    if (player.condition === 'loss') {
      player.condition = 'normal';
      player.score -= 25;
    } else {
      player.condition = 'loss';
      player.score += 25;
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.props.curplayer ? player : pl)
    }), (() => this.next()));
  }

  janif() {
    const player = Object.assign({}, this.state.players[this.props.curplayer]);

    if (player.condition === 'janif') {
      player.condition = 'normal';
      player.score = 0;
    } else {
      player.condition = 'janif';
      player.score = 0;
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.props.curplayer ? player : pl)
    }), (() => this.next()));
  }

  win() {
    const player = Object.assign({}, this.state.players[this.props.curplayer]);

    if (player.condition === 'win') {
      player.condition = 'normal';
      player.score = 0;
    } else {
      player.condition = 'win';
      player.score = -10;
    }

    this.setState(prevState => ({
      players: prevState.players.map(pl => pl.id === this.props.curplayer ? player : pl)
    }), (() => this.next()));
  }

  nextPlayer() {
    if (this.props.curplayer + 1 >= this.props.players.length) {
      this.props.gotoView('summary', false);
    } else {
      this.props.nextPlayer();
      this.focus();
    }
  }

  prevPlayer() {
    if (this.props.curplayer < 1) {
      this.props.gotoView('main');
    } else {
      this.props.prevPlayer();
      this.focus();
    }
  }

  onChange(e) {
    if (e.target.value !== '') {
      var points = parseInt(e.target.value, 10);
      this.props.setPoints(this.props.curplayer, points);

      if (e.target.value > 9) {
        this.nextPlayer();
      }
    } else {
      this.props.setPoints(this.props.curplayer, e.target.value);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    /* var score = this.state.input; */
    this.focus();
  }

  render() {
    return (
      <div className="ScoreCard" style={{borderColor: this.props.players[this.props.curplayer].color}}>
        <div className="Header" style={{backgroundColor: this.props.players[this.props.curplayer].color}}>
          <div className="Name">{this.props.players[this.props.curplayer].name.toUpperCase()}</div>
        </div>
        <div className="Body">
          <form onSubmit={this.onSubmit}>
            <input value={this.props.rounds[this.props.curplayer].points} onChange={this.onChange} ref={(input) => { this.textInput = input; }} style={{color: this.props.players[this.props.curplayer].color}} className="Score" min="0" max="50" size="3" maxLength="2" pattern="\d*" placeholder="+0" autoFocus={true}/>
          </form>
          <div className="Buttons">
            <Backward onClick={() => this.prevPlayer()}/>
            <Loss condition={this.props.rounds[this.props.curplayer].condition} onClick={() => this.props.onLoss(this.props.curplayer)}/>
            <Janif condition={this.props.rounds[this.props.curplayer].condition} onClick={() => this.props.onJanif(this.props.curplayer)}/>
            <Win condition={this.props.rounds[this.props.curplayer].condition} onClick={() => this.props.onWin(this.props.curplayer)}/>
            <Forward onClick={() => this.nextPlayer()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
