import React, { Component } from 'react';
import './Scoring.css';

class Janif extends Component {

  render() {
    return (
      <div className={this.props.condition === 'janif' ? 'JanifSelected' : 'Janif'} onClick={() => this.props.onClick()}>0</div>
    );
  }
}

export default Janif;
