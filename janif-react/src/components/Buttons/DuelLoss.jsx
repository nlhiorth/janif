import React, { Component } from 'react';

class DuelLoss extends Component {
  render() {
    return (
      <img className="square button" src="gun.svg" onClick={() => this.props.onClick()}></img>
    );
  }
}

export default DuelLoss;
