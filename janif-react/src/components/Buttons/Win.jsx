import React, { Component } from 'react';
import './Scoring.css'

class Win extends Component {

  render() {
    return (
      <div className={this.props.condition === 'win' ? 'WinSelected' : 'Win'} style={{backgroundColor: this.props.color}} onClick={() => this.props.onClick()}>-10</div>
    );
  }
}

export default Win;
