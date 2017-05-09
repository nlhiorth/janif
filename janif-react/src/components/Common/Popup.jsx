import React, { Component } from 'react';

class Popup extends Component {

  render() {
    return (
      <div className="overlay transparent">
        <div className="popup">
          <div className={this.props.animation}>
            {this.props.firstnumber}
          </div>
          <div className={this.props.animation === 'flip' ? 'flop' : (this.props.animation === 'swap' ? 'swop' : (this.props.animation === 'sixtynine' ? 'sixtynone' : 'fifto'))}>
            {this.props.secondnumber}
          </div>
          <div className="playername">
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
