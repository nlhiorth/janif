import React, { Component } from 'react';
import './Navigation.css';

class Forward extends Component {
  render() {
    return (
      <div className="Forward" style={{backgroundColor: this.props.color}} onClick={() => this.props.onClick()}></div>
    );
  }
}

export default Forward;
