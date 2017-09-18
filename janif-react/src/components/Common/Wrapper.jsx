import React, { Component } from 'react';
import '../ViewManager.css';

class Wrapper extends Component {
  render() {
    console.log("henlo");
    return (
      <div className="Wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default Wrapper;
