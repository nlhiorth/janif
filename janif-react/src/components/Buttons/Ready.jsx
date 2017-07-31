import React, { Component } from 'react';

class Ready extends Component {

  render() {
    return (
      <div className="green newbutton" style={!this.props.hidden ? {visibility: 'hidden'} : null} onClick={this.props.onClick}>{'Ready!'}</div>
    );
  }
}

export default Ready;
