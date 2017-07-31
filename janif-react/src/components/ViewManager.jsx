import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Header from './Common/Header';
import HeadSpace from './Common/HeadSpace';

import MainView from '../containers/MainView';
import ScoringView from '../containers/ScoringView';
import SummaryView from '../containers/SummaryView';
import SetupView from '../containers/SetupView';

import './ViewManager.css';

class ViewManager extends Component {
  render() {
    return (
      <div className="ViewManager">
        {this.props.header && <Header />}
        {this.props.header && <HeadSpace />}
        <CSSTransitionGroup
          transitionName="wipe"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {(this.props.curview === 'setup') && <SetupView key="scoring" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'scoring') && <ScoringView key="scoring" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'summary') && <SummaryView key="summary" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'main') && <MainView key="main" gotoView={this.props.gotoView} />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ViewManager;
