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
      input: ''
    }
  }

  focus() {
    this.textInput.focus();
  }

  next() {
    this.props.next();
    this.focus();
  }

  last() {
    this.props.last();
    this.focus();
  }

  onChange(e) {
    this.setState({input : e.target.value});
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
