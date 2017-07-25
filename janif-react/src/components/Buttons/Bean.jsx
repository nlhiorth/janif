import React, { Component } from 'react';
import bean from '../../../img/bean.svg';
import used_bean from '../../../img/used-bean.svg';

class Bean extends Component {
  render() {
    return (
      <img className="square button" src={this.props.fresh ? bean : used_bean} onClick={() => this.props.onClick()} alt="Magic Bean"></img>
    );
  }
}

export default Bean;
