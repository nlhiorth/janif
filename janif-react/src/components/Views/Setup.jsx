import React, { Component } from 'react';
import Ready from '../Buttons/Ready.jsx';
import './Setup.css';
import '../Buttons/Buttons.css'

class Setup extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
    setTimeout(() => this.focus(), 750);
  }

  focus() {
    this.textInput.focus();
  }

  onChange(e) {
    this.props.setName(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    this.focus();
    if (this.props.input !== '') {
      this.props.addPlayer(this.props.input);
      this.props.setName('');
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
              <input value={this.props.input} ref={(input) => { this.textInput = input; }} className="namefield" onChange={this.onChange} placeholder="New player"/>
            </div>
            <div className="buttonchoices">
              <div><button className="Standard Stripped">{'ADD'}</button></div>
              <div><Ready onClick={() => this.props.gotoView("main")} hidden={(this.props.players.length > 1)}/></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Setup;
