import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="help blurred">{'?'}</div>
        <div className="title">{'Janif'}</div>
        <div className="close" onClick={this.props.onClose}>{'X'}</div>
      </div>
    );
  }
}

export default Header;
