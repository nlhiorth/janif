import React, { Component } from 'react';
import backward from '../../../img/backward.svg';

class Backward extends Component {
  render() {
    return (
      <img className="backward" src={backward} onClick={() => this.props.onClick()} alt="Backward"></img>
    );
  }
}

export default Backward;
