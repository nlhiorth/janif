import React, { Component } from 'react';
import banana from '../../../img/banana.svg';
import used_banana from '../../../img/used-banana.svg';

class Win extends Component {

  render() {
    return (
      <img className="square button" src={this.props.condition === 'win' ? used_banana : banana} onClick={() => this.props.onClick()} alt="Win"></img>
    );
  }
}

export default Win;
