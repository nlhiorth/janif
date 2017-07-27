import { combineReducers } from 'redux';
import { ADD_PLAYER, ADD_SCORE, USE_BANANA, USE_BEAN, ROUND_LOSS, ROUND_WIN, ROUND_JANIF, SET_POINTS, NEXT_PLAYER, PREV_PLAYER, GOTO_VIEW } from '../actions/actions.js';

function players(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
          score: 0,
          prev: 0,
          banana: true,
          bean: true,
          color: 'hsl(' + (action.name.split('').reduce((acc, curval) => acc * (curval.codePointAt(0) - 64), 1) % 359) + ', 33%, 56%)'
        }
      ]

    case ADD_SCORE: case USE_BANANA: case USE_BEAN:
      return state.map(pl => (
        player(pl, action)
      ))

    default:
      return state;
  }
}

function player(state = {}, action) {
  switch (action.type) {
    case ADD_SCORE:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        score: ruleModify(state.score + action.points),
        prev: state.score
      })

    case USE_BANANA:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        score: state.prev,
        prev: 0,
        banana: false
      })

    case USE_BEAN:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        score: ruleModify(parseInt(state.score.toString().split('').reverse().join(''), 10)),
        prev: state.score,
        bean: false
      })

    default:
      return state;
  }
}

function scoring(state = {rounds: [], curplayer: 0}, action) {
  switch(action.type) {
    case ADD_PLAYER: case ROUND_LOSS: case ROUND_WIN: case ROUND_JANIF: case SET_POINTS:
      return Object.assign({}, state, {
        rounds: rounds(state.rounds, action)
      })

    case NEXT_PLAYER:
      if ((state.curplayer + 1) >= state.rounds.length) {
        return state;
      } else {
        return Object.assign({}, state, {
          curplayer: state.curplayer + 1
        })
      }

    case PREV_PLAYER:
      if ((state.curplayer - 1) < 0) {
        return state;
      } else {
        return Object.assign({}, state, {
          curplayer: state.curplayer - 1
        })
      }


    default:
      return state;
  }
}

function rounds(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          id: state.length,
          points: '',
          condition: "normal"
        }
      ]

    case ROUND_LOSS: case ROUND_WIN: case ROUND_JANIF: case SET_POINTS:
      return state.map(pl => (
        round(pl, action)
      ))

    default:
      return state;
  }
}

function round(state = {}, action) {
  switch (action.type) {
    case ROUND_LOSS:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        points: state.points + 25,
        condition: "loss"
      })

    case ROUND_WIN:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        points: state.points - 10,
        condition: "win"
      })

    case ROUND_JANIF:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        points: 0,
        condition: "janif"
      })

    case SET_POINTS:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        points: action.points
      })

    default:
      return state;
  }
}

function game(state = {curview: "main", header: true}, action) {
  switch (action.type) {
    case GOTO_VIEW:
      return Object.assign({}, state, {
        curview: action.view,
        header: action.header
      })

    default:
      return state;
  }
}

function ruleModify(score) {
  // Rule of 69
  if (score === 69) {
    return 79;
  }
  // Rule of 50s
  if (((score % 50) === 0) && score !== 0) {
    return score - 50;
  }
  // Rule of 41, 42 & 43
  if (score === 41) {
    return 14;
  }
  if (score === 42) {
    return 24
  }
  if (score === 43) {
    return 34;
  }
  return score;
}

const janifApp = combineReducers({
  players,
  scoring,
  game
});

export default janifApp;
