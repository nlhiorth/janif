import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import janifApp from './reducers/reducers';
//import { loadState, saveState } from './localStorage';
import { newID, updatePlayers } from './actions/actions';
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
