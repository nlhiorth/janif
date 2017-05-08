import React, { Component } from 'react';

class Start extends Component {

  render() {
    return (
      <div className="start">
        <div className="startlogo">Janif</div>
        <div className="startbutton" onClick={() => this.props.onSetup()}>New Game</div>
        <div className="starthelp blurred">Help</div>
        <div className="addapp blurred">Add webApp</div>
      </div>
    );
  }
}

export default Start;
