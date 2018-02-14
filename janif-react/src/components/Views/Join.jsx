import React, { Component } from 'react';
import Ready from '../Buttons/Ready.jsx';
import './Setup.css';
import '../Buttons/Buttons.css'
import './Start.css';
import './Join.css';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      showForm: false,
      showButton: true,
      showSubmit: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    }, () => {
      if (this.checkId(this.state.input)) {
        this.setState({
          showSubmit: true
        });
      } else {
        this.setState({
          showSubmit: false
        });
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.input !== '') {
      this.props.spectate();
      this.props.newID(this.state.input);
      this.props.gotoView('main');
    }
  }

  showForm() {
    this.setState({
      showForm: true,
      showButton: false
    }, () => this.focus())
  }

  checkId(id) {
    var testid = Math.floor(id / 1e1);
    testid = (testid * 10) + (testid*3 % 10);
    return (testid == id);
  }

  render() {
    return (
      <div className="Join">
        {this.state.showButton && <div className="StartButton" onClick={() => this.showForm()}>JOIN GAME</div>}
        {this.state.showForm && <form className="setupform" onSubmit={this.onSubmit}>
          <div>
            <input value={this.state.input} ref={input => this.textInput = input} className="joinInput" onChange={this.onChange} style={{color: 'hsl(' + (this.state.input.split('').reduce((acc, curval) => acc * (curval.codePointAt(0) - 64), 1) % 359) + ', 33%, 56%)'}} min="100000" max="999999" maxLength="6" pattern="\d*" placeholder="GameID"/>
          </div>
          {this.state.showSubmit && <div><button className="Standard Stripped">{'JOIN'}</button></div>}
        </form>}
      </div>
    );
  }
}

export default Join;
