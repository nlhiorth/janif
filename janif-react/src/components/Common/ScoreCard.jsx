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
    setTimeout(() => this.focus(), 750);
    this.state = {
      flip: false,
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
    if (this.props.index + 1 >= this.props.players.length) {
      this.props.gotoView('summary', false);
    } else {
      this.setState({
        flip: true
      });
      setTimeout(() => {this.props.nextPlayer(); this.setState({flip: false})}, 250);
      this.focus();
    }
  }

  prevPlayer() {
    if (this.props.index < 1) {
      this.props.gotoView('main');
    } else {
      this.setState({
        flip: true
      });
      setTimeout(() => {this.props.prevPlayer(); this.setState({flip: false})}, 250);
      this.focus();
    }
  }

  onChange(e) {
    if (e.target.value !== '') {
      var points = parseInt(e.target.value, 10);
      this.props.setPoints(this.props.curplayer.id, points);

      if (e.target.value > 9) {
        this.nextPlayer();
      }
    } else {
      this.props.setPoints(this.props.curplayer.id, e.target.value);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    /* var score = this.state.input; */
    this.focus();
  }

  render() {
    return (
      <div className={this.state.flip ? 'CardFlip' : 'CardFlop'}>
        <div className="ScoreCard" style={{borderColor: this.props.curplayer.color}}>
          <div className="Header" style={{backgroundColor: this.props.curplayer.color}}>
            <div className="Name">{this.props.curplayer.name.toUpperCase()}</div>
          </div>
          <div className="Body">
            <form onSubmit={this.onSubmit}>
              <input value={this.props.curround.points} onChange={this.onChange} ref={(input) => { this.textInput = input; }} style={{color: this.props.curplayer.color}} className="Score" min="0" max="50" size="3" maxLength="2" pattern="\d*" placeholder="+0"/>
            </form>
            <div className="Buttons">
              <Backward onClick={() => this.prevPlayer()}/>
              <Loss condition={this.props.curround.condition} onClick={() => this.props.onLoss(this.props.curplayer.id)}/>
              <Janif condition={this.props.curround.condition} onClick={() => this.props.onJanif(this.props.curplayer.id)}/>
              <Win condition={this.props.curround.condition} onClick={() => this.props.onWin(this.props.curplayer.id)}/>
              <Forward onClick={() => this.nextPlayer()}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
