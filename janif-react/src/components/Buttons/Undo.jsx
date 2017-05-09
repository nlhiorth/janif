import React, { Component } from 'react';

class Undo extends Component {

  render() {
    return (
      <div className="undo" onClick={() => this.props.onClick()}>{'Undo ⤺'}</div>
    );
  }
}

export default Undo;
