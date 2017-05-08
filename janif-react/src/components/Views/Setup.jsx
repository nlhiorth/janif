import React, { Component } from 'react';
import Ready from '../Buttons/Ready.jsx';

class Setup extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
    this.state = {
      text: '',
      playernames: [],
    }
  }

  focus() {
    this.textInput.focus();
  }

  onChange(e) {
    this.setState({text : e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    var newPlayer = this.state.text;
    this.focus();
    if (newPlayer !== '') {
      this.setState((prevState) => ({
        playernames: prevState.playernames.concat(newPlayer),
        text: '',
      }));
      console.log('Added new player ' + newPlayer);
    } else {
      console.log("Didn't add empty player");
    }

  }

  render() {
    return (
      <div className="setupscreen">
        <div className="setupplayerlist">
          <ul>
            {this.state.playernames.map(player => (
              <li key={player}>{player}<span className="greenfont">{' ✔︎'}</span></li>
            ))}
          </ul>
        </div>

        <form className="setupform" onSubmit={this.onSubmit}>
          <div>
            <input value={this.state.text} ref={(input) => { this.textInput = input; }} className="namefield" onChange={this.onChange} placeholder="New player" autoFocus/>
          </div>
          <div className="buttonchoices">
            <button className="blue newbutton">{'Add'}</button>
            <Ready createPlayers={this.props.createPlayers()} playernames={this.state.playernames} hidden={(this.state.playernames.length > 1)}/>
          </div>
        </form>
      </div>
    );
  }
}

export default Setup;
