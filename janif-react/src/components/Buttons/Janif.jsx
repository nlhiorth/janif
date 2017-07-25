import React, { Component } from 'react';
import banana from '../../../img/banana.svg';
import used_banana from '../../../img/used-banana.svg';

class Janif extends Component {

  render() {
    return (
      <img className="square button" src={this.props.condition === 'janif' ? used_banana : banana} onClick={() => this.props.onClick()} alt="Janif"></img>
    );
  }
}

export default Janif;
