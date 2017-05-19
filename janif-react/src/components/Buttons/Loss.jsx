import React, { Component } from 'react';
import banana from '../../../img/banana.svg';
import used_banana from '../../../img/used-banana.svg';

class Loss extends Component {

  render() {
    return (
      <img className="square button" src = {this.props.condition === 'loss' ? used_banana : banana} onClick={() => this.props.onClick()} ></img>
    );
  }
}

export default Loss;
