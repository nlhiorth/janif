import React, { Component } from 'react';

class Bean extends Component {

  render() {
    return (
      <img className="square button" src = {this.props.used ? 'used-magic-bean.svg' : 'magic-bean.svg'} onClick={() => this.props.onClick()} ></img>
    );
  }
}

export default Bean;
