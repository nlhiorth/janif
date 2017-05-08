import React, { Component } from 'react';
import Dialogue from './Common/Dialogue.jsx';
import Popup from './Common/Popup.jsx';
import Start from './Views/Start.jsx';
import Setup from './Views/Setup.jsx';
import Main from './Views/Main.jsx';
import Header from './Common/Header.jsx';
import Undo from './Buttons/Undo.jsx';


class Game extends Component {

  constructor(props) {
    super(props);

    this.saveState = this.saveState.bind(this);
    this.setDialogue = this.setDialogue.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.createPlayers = this.createPlayers.bind(this);
    this.handleBanana = this.handleBanana.bind(this);
    this.handleBean = this.handleBean.bind(this);
    this.addScore = this.addScore.bind(this);
    this.handleLoss = this.handleLoss.bind(this);
    this.unDo = this.unDo.bind(this);

    if (props.savestate) {
      this.state = props.savestate;
    } else {
      this.state = {
        players: [],
        history: [],
        dialogue: false,
        blurred: false,
        start: true,
        ready: false,
        popup: false,
        from: 0,
        to: 0,
        style: 'flip'
      }
    }
  }

  saveState() {
    var temp = Object.assign({}, this.state);

    localStorage.setItem('janif', JSON.stringify(temp));
  }

  unDo() {
    this.setState(prevState => {
      return ({
        players: prevState.history[prevState.history.length-1],
        history: prevState.history.slice(0, prevState.history.length-1),
      })
    }, (() => this.saveState()));
  }

  onSetup() {
    this.setState({start: false});
    console.log('Start the setup');
  }

  setDialogue() {
    this.setState({dialogue: !this.state.dialogue, blurred: !this.state.blurred});
  }

  resetGame() {
    localStorage.clear();
    this.setState({
      players: [],
      history: [],
      dialogue: false,
      blurred: false,
      start: true,
      ready: false,
      popup: false,
      from: 0,
      to: 0,
      style: 'flip'
    });
  }

  animate(from, to, style) {
    this.setState({popup: true, from: from, to: to, style: style});

    setTimeout((() => this.setState({popup: false}, (() => this.saveState()))), 2000);
  }

  ruleModify(i) {

    // Rule of 69
    if (i === 69) {
      i = 79;
      console.log(this.state.name + ' was struck by 69');
      this.animate(69, 79, 'sixtynine');
      return i;
    }

    // Rule of 50s
    if (((i % 50) === 0) && i !== 0) {
      i -= 50;
      console.log(this.state.name + ' jumped down to ' + i);
      this.animate(i+50, i, 'fifty');
      return i;
    }

    // Rule of 41, 42 & 43
    if (i === 41) {
      i = 14;
      console.log(this.state.name + ' autoswitched to ' + i);
      this.animate(41, 14, 'flip');
    }
    if (i === 42) {
      i = 24;
      console.log(this.state.name + ' autoswitched to ' + i);
      this.animate(42, 24, 'flip');
    }
    if (i === 43) {
      i = 34;
      console.log(this.state.name + ' autoswitched to ' + i);
      this.animate(43, 34, 'flip');
    }

    return i;
  }

  addScore(id, points) {
    if ((points !== '') && (points !== 0)) {
      const player = Object.assign({}, this.state.players[id]);
      player.prev = player.score;
      player.score += +points;
      player.score = this.ruleModify(player.score);

      // Set and save state
      this.setState(prevState => {
        return ({
          players: prevState.players.map(pl => pl.id === player.id ? player : pl),
          history: [...prevState.history, prevState.players.map(pl => {
            return Object.assign({}, pl);
          })],
        })
      }, (() => this.saveState()));
    }
  }

  handleLoss(id) {
    this.pew();
    const player = Object.assign({}, this.state.players[id]);
    player.prev = player.score;
    player.score += 25;
    player.score = this.ruleModify(player.score);

    // Set and save state
    this.setState(prevState => {
      return ({
        players: prevState.players.map(pl => pl.id === player.id ? player : pl),
        history: [...prevState.history, prevState.players.map(pl => {
          return Object.assign({}, pl);
        })],
      })
    }, (() => this.saveState()));
    console.log(player.name + ' was punished with 25 points');
  }

  pew() {
    console.log('pew');
  }

  handleBanana(id) {
    if (!this.state.players[id].banana) {
      const player = Object.assign({}, this.state.players[id]);
      player.banana = true;
      console.log(player.name + ' restored from ' + player.score + ' to ' + player.prev + ' using a banana');
      this.animate(player.score, player.prev, 'swap');
      player.score = player.prev;

      // Set and save state
      this.setState(prevState => {
        return ({
          players: prevState.players.map(pl => pl.id === player.id ? player : pl),
          history: [...prevState.history, prevState.players.map(pl => {
            return Object.assign({}, pl);
          })],
        })
      }, (() => this.saveState()));
    } else {
      console.log(this.state.players[id].name + ' has already used their banana!');
    }
  }

  handleBean(id) {
    if (!this.state.players[id].bean) {
      const player = Object.assign({}, this.state.players[id]);
      player.bean = true;
      player.prev = player.score;
      player.score = parseInt(player.score.toString().split('').reverse().join(''), 10);
      player.score = this.ruleModify(player.score);
      console.log(player.name + ' flipped from ' + this.state.players[id].score + ' to ' + player.score + ' using a magic bean!');
      this.animate(this.state.players[id].score, player.score, 'flip');

      // Set and save state
      this.setState(prevState => {
        return ({
          players: prevState.players.map(pl => pl.id === player.id ? player : pl),
          history: [...prevState.history, prevState.players.map(pl => {
            return Object.assign({}, pl);
          })],
        })
      }, (() => this.saveState()));
    } else {
      console.log(this.state.players[id].name + ' has already used their magic bean!');
    }
  }

  createPlayers(playernames) {
    console.log('creating players...');
    console.log(playernames);
    playernames.map(playername => (
      this.setState(prevState => ({
        players: prevState.players.concat({
          name: playername,
          id: prevState.players.length,
          score: 0,
          banana: false,
          bean: false,
          value: '',
          prev: 0,
        })
      }), console.log('created player ' + playername))
    ));
  }

  render() {
    return (
      <div>
        {this.state.dialogue ? <Dialogue onNo={this.setDialogue} onYes={this.resetGame}/> : null}
        {this.state.popup && <Popup firstnumber={this.state.from} secondnumber={this.state.to} animation={this.state.style}/>}
        <div className={this.state.blurred ? "blurred" : "screen"}>
          {this.state.start && <Start onSetup={() => this.onSetup()}/>}

          {((this.state.players.length < 1) && !this.state.start) ? <Setup createPlayers={() => this.createPlayers}/> : null}

          <Header onClose={this.setDialogue}/>
          <Main players={this.state.players} onBanana={() => this.handleBanana} onBean={() => this.handleBean} addScore={() => this.addScore} onLoss={() => this.handleLoss}/>
          {(this.state.history.length > 0) ? <Undo onClick={() => this.unDo()}/> : null}
        </div>
      </div>
    );
  }
}

export default Game;
