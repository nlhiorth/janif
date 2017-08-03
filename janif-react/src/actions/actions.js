/* Action types */

export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_SCORE = 'ADD_SCORE';
export const USE_BANANA = 'USE_BANANA';
export const USE_BEAN = 'USE_BEAN';
export const ROUND_LOSS = 'ROUND_LOSS';
export const ROUND_WIN = 'ROUND_WIN';
export const ROUND_JANIF = 'ROUND_JANIF';
export const SET_POINTS = 'SET_POINTS';
export const NEXT_PLAYER = 'NEXT_PLAYER';
export const PREV_PLAYER = 'PREV_PLAYER';
export const GOTO_VIEW = 'GOTO_VIEW';
export const CLEAR_SCORING = 'CLEAR_SCORING';
export const SET_NAME = 'SET_NAME';
export const RESET_STATE = 'RESET_STATE';

/* Action creators */

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    name
  }
}

export function addScore(id, points = 0) {
  return {
    type: ADD_SCORE,
    id,
    points
  }
}

export function useBanana(id) {
  return {
    type: USE_BANANA,
    id
  }
}

export function useBean(id) {
  return {
    type: USE_BEAN,
    id
  }
}

export function roundLoss(id) {
  return {
    type: ROUND_LOSS,
    id
  }
}

export function roundWin(id) {
  return {
    type: ROUND_WIN,
    id
  }
}

export function roundJanif(id) {
  return {
    type: ROUND_JANIF,
    id
  }
}

export function setPoints(id, points = 0) {
  return {
    type: SET_POINTS,
    id,
    points
  }
}

export function nextPlayer() {
  return {
    type: NEXT_PLAYER,
  }
}

export function prevPlayer() {
  return {
    type: PREV_PLAYER
  }
}

export function gotoView(view, header = true) {
  return {
    type: GOTO_VIEW,
    view,
    header
  }
}

export function clearScoring() {
  return {
    type: CLEAR_SCORING
  }
}

export function setName(input) {
  return {
    type: SET_NAME,
    input
  }
}

export function resetState() {
  return {
    type: RESET_STATE
  }
}
