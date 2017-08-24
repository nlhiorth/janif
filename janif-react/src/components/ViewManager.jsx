import React, { Component } from 'react';

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
*/

class ViewManager extends Component {
  render() {
    return (
      <div className="ViewManager">
        {this.props.header && <Header resetState={this.props.resetState}/>}
        {this.props.header && <HeadSpace />}
          {(this.props.curview === 'setup') && <SetupView key="scoring" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'scoring') && <ScoringView key="scoring" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'summary') && <SummaryView key="summary" gotoView={this.props.gotoView} />}
          {(this.props.curview === 'main') && <MainView key="main" gotoView={this.props.gotoView} />}
      </div>
    );
  }
}

export default ViewManager;
