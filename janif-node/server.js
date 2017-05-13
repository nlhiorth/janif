const firebase = require('firebase');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let roomNum = 0;
let sessionNum = 0;

// Initialize express to using bodyparser for POST data
app.use(bodyParser.json()); // support json encoded bodies
//app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDu3d7I2pAEVz8Izas7OYQDaGkj5shKFyI',
  authDomain: 'janif-backend.firebaseapp.com',
  databaseURL: 'https://janif-backend.firebaseio.com',
  projectId: 'janif-backend',
  storageBucket: 'janif-backend.appspot.com',
  messagingSenderId: '114103878367',
};
firebase.initializeApp(config);
const database = firebase.database();

// DATABASE FUNCTIONS
function writeSessionData(sessionId, roomCode, players) {
  firebase.database().ref('sessions/' + sessionId).set({
    sessionId : sessionId,
    roomCode  : roomCode,
    players   : players,
  });
  console.log('wrote session data for session: '+ sessionId);
}

function getSessions(){
  const sessions = firebase.database().ref('session');
  return sessions;
}

// REST API
app.get('/room', function(req, res) {
  res.send(getRooms());
});

app.post('/room', function(req, res) {
  firebase.database().ref('session/' + sessionId).set({
    sessionId : sessionId,
    roomCode  : roomCode,
    players   : players,
  });
  console.log(roomNum);
  res.send(roomNum);
});

// POST - url:3001/{sessionid}/score/
app.post(/^\/(\d+)\/score\//, function(req, res) {
  firebase.database().ref('/session/'+req.params[0]+'/score/').set(
    req.body.scoreupdate.map(
      (player) => ({
        userid    : player.id,
        score     : player.score,
        condition : player.condition,
      })));
  res.send("Data posted!" + req.params[0]);
});


// POST - url:3001/{sessionid}/player/
app.post(/^\/(\d+)\/players\//, function(req, res) {
  firebase.database().ref('/session/'+req.params[0]+'/players/').set(
    req.body.players.map(
      (player) => ({
        id    :   player.id,
        score :   player.score,
        name  :   player.name,
        banana:   player.banana,
        bean  :   player.bean,
      })));
  res.send("Data posted!" + req.params[0]);
});

// GET - url:3001/{sessionid}/score/
app.get(/^\/(\d+)\/score\//, function(req, res) {
  const result = database.ref("session/"+req.params[0]).getDatabase();
  res.send(result);
});

// READY FOR CONNECTIONS
app.listen(3001);

console.log('Listening on port 3001...');
