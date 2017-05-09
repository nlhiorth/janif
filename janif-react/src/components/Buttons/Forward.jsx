import React, { Component } from 'react';
import forward from '../../../img/forward.svg';

class Forward extends Component {
  render() {
    return (
      <img className="forward" src={forward} onClick={() => this.props.onClick()}></img>
    );
  }
}

export default Forward;
