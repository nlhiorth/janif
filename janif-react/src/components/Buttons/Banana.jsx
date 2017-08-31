import React, { Component } from 'react';
import './Banana.css';

class Banana extends Component {
  render() {
    return (
        <div className={this.props.fresh ? 'Banana' : 'UsedBanana'} onClick={() => this.props.onClick()}></div>
    );
  }
}

export default Banana;
