const firebase = require('firebase');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
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

function writeSessionData(session_id, room_code, players) {
  firebase.database().ref('sessions/' + sessionID).set({
    session_id: session_id,
    room_code: room_code,
    players: players,
  });
  console.log('wrote session data for session: '+session_id);
}

app.post('/session', function(req, res) {
  var user_name=req.body.username;
  var password=req.body.password;
  console.log(user_name + password);
  res.send("Data recieved!");
});

app.listen(3000);

console.log('Listening on port 3000...');
