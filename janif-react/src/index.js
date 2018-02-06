import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import janifApp from './reducers/reducers';
import { loadState, saveState } from './localStorage';
import { addPlayer, addScore, useBanana, useBean, roundLoss, roundWin, roundJanif, setPoints, nextPlayer, prevPlayer, gotoView, newID, updatePlayers } from './actions/actions';
import './index.css';

//const localstate = loadState();
const localstate = {};
let store = createStore(janifApp, localstate);
console.log(store.getState());
export const socket = new WebSocket('ws://localhost:3001');
socket.addEventListener('message', function (event) {
  const message = JSON.parse(event.data);

  switch (message.action) {
    case 'NEW_GAME_ID':
      store.dispatch(newID(message.data));
      break;

    case 'UPDATE_PLAYERS':
      console.log(message.data)
      store.dispatch(updatePlayers(message.data));
      break;

    default:
      console.log('Message from server: ', message);
  }
});

store.subscribe(() => {
  //console.log(store.getState());
  if (store.getState().game.curview === 'main' && !store.getState().game.spectate) {

    console.log(store.getState());
    if (store.getState().players.length > 0) {
      console.log('sending a state update');
      socket.send(JSON.stringify({action: 'STATE_UPDATE', data: store.getState()}));
    } else {
      console.log('joining game');
      socket.send(JSON.stringify({action: 'NEW_SPECTATOR', data: store.getState().game.id}));
    }
  }
  //saveState(store.getState());
});
/*
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
*/
/*
store.dispatch(addPlayer("Nils"));
store.dispatch(addPlayer("Ingvild"));
store.dispatch(addPlayer("Christoffer"));
store.dispatch(addPlayer("Martine"));
*/
/*
store.dispatch(addScore(0, 23));
store.dispatch(addScore(1, 13));
store.dispatch(addScore(2, 36));
store.dispatch(addScore(3, 54));
store.dispatch(useBanana(1));
store.dispatch(useBean(2));
*/
/*
store.dispatch(addScore(3, 15));
store.dispatch(addScore(0, 27));
store.dispatch(addScore(0, 0));
store.dispatch(addScore(1, 41));
store.dispatch(setPoints(0, 0));
store.dispatch(setPoints(1, 13));
store.dispatch(setPoints(2, 0));
store.dispatch(setPoints(3, 25));
store.dispatch(roundWin(0));
store.dispatch(roundLoss(1));
store.dispatch(roundJanif(2));
store.dispatch(nextPlayer()); // 1
store.dispatch(nextPlayer()); // 2
store.dispatch(prevPlayer()); // curplayer = 1
store.dispatch(prevPlayer()); // curplayer = 0
store.dispatch(prevPlayer()); // curplayer = 0
store.dispatch(nextPlayer());
store.dispatch(nextPlayer());
store.dispatch(nextPlayer()); // curplayer = 3
store.dispatch(nextPlayer()); // curplayer = 3
*/
/*store.dispatch(gotoView("summary", true));
store.dispatch(gotoView("scoring", false));
store.dispatch(gotoView("main"));
store.dispatch(gotoView("setup"));
*/


/*unsubscribe();*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
