import React, { Component } from 'react';

class Dialogue extends Component {

  render() {
    return (
      <div className="overlay">
        <div className="dialogue">
          <div className="prompt">{'Quit current game?'}</div>
          <div className="answers">
            <div className="red newbutton" onClick={this.props.onYes}>{'Quit'}</div>
            <div className="green newbutton" onClick={this.props.onNo}>{'Return'}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialogue;
