import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';
import './ViewManager.css';

import Header from './Common/Header';
import HeadSpace from './Common/HeadSpace';

import MainView from '../containers/MainView';
import ScoringView from '../containers/ScoringView';
import SummaryView from '../containers/SummaryView';
import SetupView from '../containers/SetupView';
import StartView from '../containers/StartView';

/* an
transitionName="wipe"
transitionEnterTimeout={500}
transitionLeaveTimeout={500}>

<Transition
  component={false}
  appear={{
    opacity: 0,
    translateX: 500
  }}
  enter={{
    opacity: 1,
    translateX: spring(0)
  }}
  leave={{
    opacity: 0,
    translateX: -500
  }}
>
  {(this.props.curview === 'scoring') &&
    <div key="scoring" className="View">
      <ScoringView key="scoring" gotoView={this.props.gotoView} />
    </div>
  }

</Transition>
*/

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
  }

  render() {
    return (
      <div className="ViewManager">
        <Transition
          component={false}
          appear={{
            translateY: -200
          }}
          enter={{
            translateY: spring(0)
          }}
          leave={{
            translateY: -200
          }}
        >
          {this.props.header &&
            <div key="header">
              <Header resetState={this.props.resetState}/>
            </div>
          }
        </Transition>

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
            <div key="start" className="View">
                <StartView />
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
            <div key="main" className="View">
                <MainView />
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
            <div key="scoring" className="View">
              <ScoringView />
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
            <div key="setup" className="View">
              <SetupView />
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
            <div key="summary" className="View">
              <SummaryView />
            </div>
          }

        </Transition>
      </div>
    );
  }
}

export default ViewManager;
