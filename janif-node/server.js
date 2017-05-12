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

function getRooms(){
  const rooms = firebase.database().ref('roomsInUse');
  return 0;
}

// REST API
app.get('/rooms', function(req, res) {
  return 0;
});

app.get('/room', function(req, res) {
  firebase.database().ref('sessions/' + sessionId).set({
    sessionId : sessionId,
    roomCode  : roomCode,
    players   : players,
  });
  console.log(roomNum);
  res.send(roomNum);
});

app.post(/^\/(\d+)\/score\//, function(req, res) {
  console.log(req.params[0])
  console.log(req.body);
  firebase.database().ref('/session/'+req.params[0]+'/score/').set(
    req.body.scoreupdate.map( (player) => (
      {
        userid    : player.id,
        score     : player.score,
        condition : player.condition,
      }
    )));
  console.log("RECIEVED: " + JSON.stringify(req.body));
  res.send("Data posted!" + req.params[0]);
});


app.get('/score', function(req, res) {
  result = firebase.database().ref('score/' + sessionId).set({
    userid    : userid,
    score     : score,
    condition : condition,
  });
  res.send(result);
});

app.post('/session', function(req, res) {
  const sessionId = req.body.sessionId;
  const roomCode  = req.body.roomCode;
  const players   = req.body.players;
  writeSessionData(sessionId, roomCode, players);
  console.log("RECIEVED: " + JSON.stringify(req.body));
  res.send("Data recieved!");
});

// READY FOR CONNECTIONS
app.listen(3001);

console.log('Listening on port 3001...');
