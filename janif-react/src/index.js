import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import janifApp from './reducers/reducers';
import { addPlayer, addScore, useBanana, useBean } from './actions/actions';

import './index.css';

let store = createStore(janifApp);
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addPlayer("Nils"));
store.dispatch(addPlayer("Ingvild"));
store.dispatch(addPlayer("Christoffer"));
store.dispatch(addPlayer("Martine"));
store.dispatch(addScore(23, 0));
store.dispatch(addScore(13, 1));
store.dispatch(addScore(36, 2));
store.dispatch(addScore(54, 3));
store.dispatch(useBanana(1));
store.dispatch(useBean(2));
store.dispatch(addScore(15, 3));
store.dispatch(addScore(27, 0));
store.dispatch(addScore(0, 0));
store.dispatch(addScore(41, 1));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
