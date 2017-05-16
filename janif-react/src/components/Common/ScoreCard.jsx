import React, { Component } from 'react';
import './ScoreCard.css';
import Forward from '../Buttons/Forward.jsx';
import Backward from '../Buttons/Backward.jsx';
import DuelLoss from '../Buttons/DuelLoss.jsx';

class ScoreCard extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
    this.state = {
      input: '',
      change: {
        id: props.player.id,
        name: props.player.name,
        score: props.player.score,
        condition: props.player.condition
      }
    }
  }

  focus() {
    this.textInput.focus();
  }

  next() {
    console.log(this.props.player.id);
    console.log(this.props.player.name);
    console.log(this.state.input);
    console.log(this.state.change.condition);
    this.props.update({
      id: this.props.player.id,
      name: this.props.player.name,
      score: this.state.input,
      condition: this.state.condition
    });
    this.setState({input: ''});
    this.props.next();
    this.focus();
  }

  last() {
    this.props.last();
    this.focus();
  }

  onChange(e) {
    var str = e.target.value;
    this.setState({input : str});
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
          <div className="Name">{this.props.player.name}</div>
        </div>
        <div className="Body">
          <form onSubmit={this.onSubmit}>
            <input value={this.state.input} onChange={this.onChange} ref={(input) => { this.textInput = input; }} className="Score" min="0" max="50" size="3" maxLength="2" pattern="\d*" placeholder="+0" autoFocus={true}/>
          </form>
          <div className="Buttons">
            <Backward onClick={() => this.last()}/>
            <DuelLoss />
            <DuelLoss />
            <DuelLoss />
            <Forward onClick={() => this.next()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
