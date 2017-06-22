import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Scoring from './Views/Scoring.jsx'
import Summary from './Views/Summary.jsx'
import Main from './Views/Main.jsx'
import Header from './Common/Header.jsx';
import HeadSpace from './Common/HeadSpace.jsx';
import './ViewManager.css';

class ViewManager extends Component {
  constructor(props) {
    super(props);
    this.goto = this.goto.bind(this);
    this.state = {
      curView: 'main',
    };
  }

  goto(nextView) {
      this.setState((prevState) => ({
        curView: nextView,
      }), () => (console.log('Changed view to: ' + this.state.curView)));
  }

  render() {
    return (
      <div className="ViewManager">
        <Header />
        <HeadSpace />
        <CSSTransitionGroup
          transitionName="wipe"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {(this.state.curView === 'scoring') && <Scoring key="scoring" goto={this.goto} />}
          {(this.state.curView === 'summary') && <Summary key="summary" goto={this.goto} />}
          {(this.state.curView === 'main') && <Main key="main" goto={this.goto} />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ViewManager;
