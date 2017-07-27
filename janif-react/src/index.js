import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import janifApp from './reducers/reducers';
import { addPlayer, addScore, useBanana, useBean, roundLoss, roundWin, roundJanif, setPoints, nextPlayer, prevPlayer, gotoView } from './actions/actions';

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
store.dispatch(addScore(0, 23));
store.dispatch(addScore(1, 13));
store.dispatch(addScore(2, 36));
store.dispatch(addScore(3, 54));
store.dispatch(useBanana(1));
store.dispatch(useBean(2));
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
store.dispatch(gotoView("summary", true));
store.dispatch(gotoView("scoring", false));
store.dispatch(gotoView("main"));


/*unsubscribe();*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
