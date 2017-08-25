import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

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
        {this.props.header && <Header resetState={this.props.resetState}/>}
        {this.props.header && <HeadSpace />}
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
          {(this.props.curview === 'main') &&
            <div key="main" className="View">
              <MainView key="main" gotoView={this.props.gotoView} />
            </div>
          }
        </Transition>
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
          {(this.props.curview === 'setup') &&
            <div key="setup" className="View">
              <SetupView key="setup" gotoView={this.props.gotoView} />
            </div>
          }

        </Transition>
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
          {(this.props.curview === 'summary') &&
            <div key="summary" className="View">
              <SummaryView key="summary" gotoView={this.props.gotoView} />
            </div>
          }

        </Transition>
      </div>
    );
  }
}

export default ViewManager;
