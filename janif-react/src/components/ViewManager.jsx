import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';
import './ViewManager.css';

import Header from './Common/Header';
import HeadSpace from './Common/HeadSpace';
import Wrapper from './Common/Wrapper';

import MainView from '../containers/MainView';
import ScoringView from '../containers/ScoringView';
import SummaryView from '../containers/SummaryView';
import SetupView from '../containers/SetupView';
import JoinView from '../containers/JoinView';
import StartView from '../containers/StartView';
import { socket } from '../index';

class ViewManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: [
        'start',
        'setup',
        'main',
        'scoring',
        'summary'
      ]
    }
    this.exitGame = this.exitGame.bind(this);
  }

  exitGame() {
    if (!this.props.spectate) {
      socket.send(JSON.stringify({action: 'END_GAME', data: this.props.gameId}));
    }
    this.props.resetState();
  }

  render() {
    return (
      <div className="ViewManager">
        {this.props.header && <Header resetState={this.exitGame} gameId={this.props.gameId} />}
        {this.props.header && <HeadSpace />}
        <Transition
          component={false}
          appear={{
            opacity: 0,
            translateY: -2000
          }}
          enter={{
            opacity: 1,
            translateY: spring(0)
          }}
          leave={{
            opacity: 0,
            translateY: -2000
          }}
        >
          {(this.props.curview === 'start') &&
            <div key="start">
              <Wrapper>
                  <StartView />
              </Wrapper>
            </div>
          }
        </Transition>
        <Transition
          component={false}
          appear={{
            opacity: 0,
            translateX: 1000
          }}
          enter={{
            opacity: 1,
            translateX: spring(0)
          }}
          leave={{
            opacity: 0,
            translateX: -1000
          }}
        >
          {(this.props.curview === 'main') &&
            <div key="main">
              <Wrapper>
                  <MainView />
              </Wrapper>
            </div>
          }
        </Transition>
        <Transition
          component={false}
          appear={{
            opacity: 0,
            translateX: 1000
          }}
          enter={{
            opacity: 1,
            translateX: spring(0)
          }}
          leave={{
            opacity: 0,
            translateX: -1000
          }}
        >
          {(this.props.curview === 'scoring') &&
            <div key="scoring">
              <Wrapper>
                <ScoringView />
              </Wrapper>
            </div>
          }

        </Transition>
        <Transition
          component={false}
          appear={{
            opacity: 0,
            translateX: 1000
          }}
          enter={{
            opacity: 1,
            translateX: spring(0)
          }}
          leave={{
            opacity: 0,
            translateX: -1000
          }}
        >
          {(this.props.curview === 'setup') &&
            <div key="setup">
              <Wrapper>
                <SetupView />
              </Wrapper>
            </div>
          }

        </Transition>
        <Transition
          component={false}
          appear={{
            opacity: 0,
            translateX: 1000
          }}
          enter={{
            opacity: 1,
            translateX: spring(0)
          }}
          leave={{
            opacity: 0,
            translateX: -1000
          }}
        >
          {(this.props.curview === 'join') &&
            <div key="join">
              <Wrapper>
                <JoinView />
              </Wrapper>
            </div>
          }

        </Transition>
        <Transition
          component={false}
          appear={{
            opacity: 0,
            translateX: 1000
          }}
          enter={{
            opacity: 1,
            translateX: spring(0)
          }}
          leave={{
            opacity: 0,
            translateX: -1000
          }}
        >
          {(this.props.curview === 'summary') &&
            <div key="summary">
              <Wrapper>
                <SummaryView />
              </Wrapper>
            </div>
          }

        </Transition>
      </div>
    );
  }
}

export default ViewManager;
