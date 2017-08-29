import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {

  render() {
    return (
      <div className="Animation">
        <div className="">{this.props.children}</div>
      </div>
    );
  }
}

export default Animation;
