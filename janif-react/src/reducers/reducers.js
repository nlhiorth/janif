import { combineReducers } from 'redux';
import { ADD_PLAYER, ADD_SCORE, USE_BANANA, USE_BEAN } from '../actions/actions.js';

function players(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          id: state.length,
          score: 0,
          prev: 0,
          banana: true,
          bean: true,
          color: 'hsl(' + (action.name.split('').reduce((acc, curval) => acc * curval.codePointAt(0), 1) % 359) + ', 33%, 56%)'
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
  players
});

export default janifApp;
