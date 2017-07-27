import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Summary from './Views/Summary.jsx'
import Header from './Common/Header.jsx';
import HeadSpace from './Common/HeadSpace.jsx';

import MainView from '../containers/MainView.js'
import ScoringView from '../containers/ScoringView.js'

import './ViewManager.css';

class ViewManager extends Component {
  constructor(props) {
    super(props);
    //this.props.gotoView = this.props.gotoView.bind(this);
    this.state = {
      curView: 'main',
      header: true,
    };
  }
  /*
  goto(nextView) {
      this.setState((prevState) => ({
        curView: nextView.destination,
        header: nextView.header
      }), () => (console.log('Changed view to: ' + this.props.curview)));
  }
  */

  render() {
    return (
      <div className="ViewManager">
        {this.props.header && <Header />}
        {this.props.header && <HeadSpace />}
        <CSSTransitionGroup
          transitionName="wipe"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {(this.props.curview === 'scoring') && <ScoringView key="scoring" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'summary') && <Summary key="summary" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'main') && <MainView key="main" gotoView={this.props.gotoView} />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ViewManager;
