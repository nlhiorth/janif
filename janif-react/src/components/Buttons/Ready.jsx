import React, { Component } from 'react';
import './Buttons.css'

class Ready extends Component {

  render() {
    return (
      <div className="Standard" style={!this.props.hidden ? {visibility: 'hidden'} : null} onClick={this.props.onClick}>{'READY!'}</div>
    );
  }
}

export default Ready;
