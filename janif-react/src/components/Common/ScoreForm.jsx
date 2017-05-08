import React, { Component } from 'react';

class ScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value : e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.state.value;
    this.props.addScore(this.props.id, value)
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <form className="scoreform" onSubmit={this.handleSubmit}>
          <div className="buttoncontainer">
            <input className="inputform" type="number" onChange={this.handleChange} value={this.state.value} min="0" max="50" size="2" maxLength="2" pattern="\d*" placeholder="0"/>
          </div>
          <div className="buttoncontainer">
            <button className="square button submit">{'+'}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ScoreForm;
