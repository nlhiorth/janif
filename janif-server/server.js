var crypto = require('crypto');
const util = require('util')

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });

var obj = {};

var activeGames = {};

function parseIncoming(ws, obj) {
  obj = JSON.parse(obj)
  console.log(obj)

  if (obj.action === 'NEW_GAME') {
    var hash = crypto.createHash('md5').update(new Date().getTime().toString()).digest('hex').slice(0,5);

    if (activeGames[hash] !== undefined) {
      console.log("PLAYER JOINED");
      activeGames[hash].players.push(ws);
    } else {
      activeGames[hash] = {admin : ws, players : [], state : {}};
    }

    ws.send(JSON.stringify({action : 'NEW_GAME_ID', data : hash}))
  }

  if (obj.action === 'STATE_UPDATE') {

    let gameId = obj.data.game.id;
    let game = activeGames[gameId];
    let gameIdEmpty = gameId === ''

    //console.log('OBJ_RECEIVED',obj)
    //console.log('GAME_OBJ', game);



    if (!gameIdEmpty && (JSON.stringify(game.state) !== JSON.stringify(obj.data.players))) {
      console.log(JSON.stringify(game.state), JSON.stringify(obj.data.players))
      game.state = obj.data.players

      let json = {
        action : 'UPDATE_PLAYERS',
        data : game.state
      }

      game.admin.send(JSON.stringify(json))
      game.players.forEach((player) => {
        player.send(JSON.stringify(json));
      })
    }
  }

  if (obj.action === 'NEW_SPECTATOR') {
    let gameId = obj.data;
    let game = activeGames[gameId];

    if (activeGames[gameId] !== undefined) {
      console.log("PLAYER JOINED");
      activeGames[gameId].players.push(ws);

      let json = {
        action : 'UPDATE_PLAYERS',
        data : game.state
      }

      game.players.forEach((player) => {
        player.send(JSON.stringify(json));
      })
    }
  }
}

wss.on('connection', function connection(ws) {
  console.log("CLIENT CONNECTED");
  ws.on('message', function incoming(message) {
    parseIncoming(ws, message)
  });
});
