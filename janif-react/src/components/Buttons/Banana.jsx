import React, { Component } from 'react';

class Banana extends Component {

  render() {
    return (
      <img className="square button" src = {this.props.used ? 'used-banana.svg' : 'banana.svg'} onClick={() => this.props.onClick()} ></img>
    );
  }
}

export default Banana;
