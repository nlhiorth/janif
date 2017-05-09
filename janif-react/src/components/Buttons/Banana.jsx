import React, { Component } from 'react';
import banana from '../../../img/banana.svg';
import used_banana from '../../../img/used-banana.svg';

class Banana extends Component {

  render() {
    return (
      <img className="square button" src = {this.props.used ? used_banana : banana} onClick={() => this.props.onClick()} ></img>
    );
  }
}

export default Banana;
