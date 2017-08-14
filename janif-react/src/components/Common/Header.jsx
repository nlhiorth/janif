import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="help">{'❮'}</div>
        <div className="title">{'JANIF'}</div>
        <div className="close" onClick={this.props.resetState}>{'X'}</div>
      </div>
    );
  }
}

export default Header;
