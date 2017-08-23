import React, { Component } from 'react';
import './Summary.css';
import './Setup.css';
import SummaryCard from '../Common/SummaryCard.jsx';
import Next from '../Buttons/Next.jsx';
import Last from '../Buttons/Last.jsx';

class Summary extends Component {
  mergePoints() {
    this.props.rounds.map(player => (
      this.props.addScore(player.id, player.points)
    ));
    this.props.gotoView("main");
    this.props.clearScoring();
  }

  render() {
    return (
      <div className="Summary">
        <div>
          <ol className="SummaryList">
            {this.props.rounds.slice().sort((a, b) => {
              return a.points - b.points
            }).map(player => (
              <li key={player.id}>
                <SummaryCard name={this.props.players[player.id].name} score={(player.points !== '') ? player.points : 0} color={this.props.players[player.id].color}/>
              </li>
            ))}
          </ol>
        </div>
        <div className="PaddedRow">
          <div className="buttonchoices">
            <Last label='GO BACK'/>
            <Next label='CONTINUE' onClick={() => this.mergePoints()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
