import React, { Component } from 'react';
import gun from '../../../img/gun.svg';

class DuelLoss extends Component {
  render() {
    return (
      <img className="square button" src={gun} onClick={() => this.props.onClick()}></img>
    );
  }
}

export default DuelLoss;
