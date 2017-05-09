import React, { Component } from 'react';
import bean from '../../../img/bean.svg';
import used_bean from '../../../img/used-bean.svg';

class Bean extends Component {

  render() {
    return (
      <img className="square button" src = {this.props.used ? used_bean : bean} onClick={() => this.props.onClick()} ></img>
    );
  }
}

export default Bean;
