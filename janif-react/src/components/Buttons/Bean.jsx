import React, { Component } from 'react';
import './Bean.css'

class Bean extends Component {
  render() {
    return (
      <div className={this.props.fresh ? 'Bean' : 'UsedBean'} onClick={() => this.props.onClick()}></div>
    );
  }
}

export default Bean;
