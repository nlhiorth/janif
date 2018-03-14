var crypto = require('crypto');
const util = require('util')

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

var obj = {};

var activeGames = {};

function parseIncoming(ws, obj) {
  obj = JSON.parse(obj)

  if (obj.action === 'NEW_GAME') {
    var hash = makeGameId();

    activeGames[hash] = {admin : ws, players : [], state : {}, lastupdate: Date.now()};
    console.log(new Date(activeGames[hash].lastupdate).toTimeString() + ' ── Started new game with ID: ' + hash);

    ws.send(JSON.stringify({action : 'NEW_GAME_ID', data : hash}))
  }

  if (obj.action === 'STATE_UPDATE') {
    let gameId = obj.data.game.id;
    let game = activeGames[gameId];
    let gameIdEmpty = gameId === '';

    if (!gameIdEmpty && (JSON.stringify(game.state) !== JSON.stringify(obj.data.players))) {
      game.state = obj.data.players
      game.lastupdate = Date.now();

      sendUpdate(gameId);
      logActiveGames();
    }
    activeGames = sessionCleanup(activeGames);
  }

  if (obj.action === 'NEW_SPECTATOR') {
    let gameId = obj.data;
    let game = activeGames[gameId];

    if (game !== undefined) {
      game.players.push(ws);
      console.log(new Date().toTimeString() + ' ── Player joined game with ID ' + gameId);
      sendUpdate(gameId);
    }
  }

  if (obj.action === 'END_GAME') {
    let gameId = obj.data;
    removeGame(gameId);
  }
}

function makeGameId() {
  const low = 10000;
  const high = 100000;
  var id = Math.floor(Math.random() * (high - low) + low);
  id = (id * 10) + (id*3 % 10);
  return id;
}

function sessionCleanup(games) {
  const ttl = 43200000; //12 hours in milliseconds
  Object.keys(games).forEach(val => {
    if ((games[val].lastupdate + ttl) < Date.now()) {
      console.log(new Date().toTimeString() + ' ── Found inactive game with ID ' + val);
      removeGame(val);
    }
  });
  return games;
}

function removeGame(gameId) {
  let game = activeGames[gameId];
  let json = {
    action : 'CLEAR_GAME'
  }

  game.admin.send(JSON.stringify(json));
  game.players.forEach((player) => {
    if (player.readyState == player.OPEN) {
      player.send(JSON.stringify(json));
    }
  })

  delete activeGames[gameId];
  console.log(new Date().toTimeString() + ' ── Removed game with ID ' + gameId);
}

function sendUpdate(gameId) {
  let game = activeGames[gameId];
  let json = {
    action : 'UPDATE_PLAYERS',
    data : game.state
  }

  game.admin.send(JSON.stringify(json));
  game.players.forEach((player) => {
    if (player.readyState == player.OPEN) {
      player.send(JSON.stringify(json));
    }
  });
  console.log(new Date().toTimeString() + ' ── Sent updates for game with ID ' + gameId);
}

function logActiveGames() {
  let games = activeGames;
  console.log(new Date().toTimeString() + ' ┬─ Active games:');
  Object.keys(games).forEach(val => {
    console.log('                        └─ #' + val + ' last updated ' + new Date(games[val].lastupdate).toTimeString());
  });
}

function reject(ws, message = 'Game not found') {
  let json = {
    action: 'CONNECTION_REJECTED',
    data: message
  }
  ws.send(JSON.stringify(json));
}

wss.on('connection', function connection(ws, req) {
  const ip = req.connection.remoteAddress;
  console.log(new Date().toTimeString() + ' ── New connection from ' + ip);
  ws.on('message', function incoming(message) {
    parseIncoming(ws, message)
  });
});
