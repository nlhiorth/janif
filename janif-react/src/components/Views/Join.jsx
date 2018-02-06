import React, { Component } from 'react';
import Ready from '../Buttons/Ready.jsx';
import './Setup.css';
import '../Buttons/Buttons.css'

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
    setTimeout(() => this.focus(), 750);
  }

  focus() {
    this.textInput.focus();
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
    //this.props.setName(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    this.focus();
    if (this.state.input !== '') {
      this.props.spectate();
      this.props.newID(this.state.input);
      this.props.gotoView('main');
      /*this.props.addPlayer(this.state.input);
      this.props.setName('');*/
    }
  }

  render() {
    return (
      <div className="Setup">
        <div className="SetupContainer">
          <div className="setupplayerlist">
            <ul>
              {this.props.players.map(player => (
                <li key={player.id}><div style={{color: '#FFF', backgroundColor: player.color}}>{player.name.toUpperCase()}</div></li>
              ))}
            </ul>
          </div>

          <form className="setupform" onSubmit={this.onSubmit}>
            <div>
              <input value={this.state.input} ref={(input) => { this.textInput = input; }} className="namefield" onChange={this.onChange} style={{color: 'hsl(' + (this.state.input.split('').reduce((acc, curval) => acc * (curval.codePointAt(0) - 64), 1) % 359) + ', 33%, 56%)'}} placeholder="GameID"/>
            </div>
            <div className="buttonchoices">
              <div><button className="Standard Stripped">{'JOIN'}</button></div>
              <div><Ready onClick={() => this.props.gotoView("main")} hidden={(this.props.players.length > 1)}/></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Join;
