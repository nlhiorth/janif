import React, { Component } from 'react';
import './Buttons.css'

class Last extends Component {

  render() {
    return (
      <div className="Standard Green" onClick={() => this.props.onClick()}>{this.props.label}</div>
    );
  }
}

export default Last;
