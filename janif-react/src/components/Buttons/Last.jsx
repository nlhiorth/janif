import React, { Component } from 'react';
import './Buttons.css'

class Last extends Component {

  render() {
    return (
      <div className="Standard" onClick={() => this.props.onClick()}>{this.props.label}</div>
    );
  }
}

export default Last;
