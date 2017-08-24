import React, { Component } from 'react';
import {TransitionMotion, Motion, spring} from 'react-motion';

import Header from './Common/Header';
import HeadSpace from './Common/HeadSpace';

import MainView from '../containers/MainView';
import ScoringView from '../containers/ScoringView';
import SummaryView from '../containers/SummaryView';
import SetupView from '../containers/SetupView';

/* an
transitionName="wipe"
transitionEnterTimeout={500}
transitionLeaveTimeout={500}>
 style={{transform: 'translate(' + this.props.x + 'vw, 0)'}}
*/

class ViewManager extends Component {
  render() {
    return (
      <div className="ViewManager">
        {this.props.header && <Header resetState={this.props.resetState}/>}
        {this.props.header && <HeadSpace />}
        <Motion defaultStyle={{x: 100}} style={{x: spring(0)}}>
          {interpolatingStyle => (this.props.curview === 'setup') && <SetupView key="setup" style={{transform: 'translate3d(' + interpolatingStyle.x + 'vw, 0, 0)'}} gotoView={this.props.gotoView} />}
        </Motion>
        <Motion defaultStyle={{x: 100}} style={{x: spring(0)}}>
          {interpolatingStyle => (this.props.curview === 'scoring') && <ScoringView key="scoring" style={{transform: 'translate3d(' + interpolatingStyle.x + 'vw, 0, 0)'}} gotoView={this.props.gotoView} />}
        </Motion>
        <Motion defaultStyle={{x: 100}} style={{x: spring(0)}}>
          {interpolatingStyle => (this.props.curview === 'summary') && <SummaryView key="summary" style={{transform: 'translate3d(' + interpolatingStyle.x + 'vw, 0, 0)'}} gotoView={this.props.gotoView} />}
        </Motion>
        <Motion defaultStyle={{x: 100}} style={{x: spring(0)}}>
          {interpolatingStyle => (this.props.curview === 'main') && <MainView key="main" style={{transform: 'translate3d(' + interpolatingStyle.x + 'vw, 0, 0)'}} gotoView={this.props.gotoView} />}
        </Motion>
      </div>
    );
  }
}

export default ViewManager;
