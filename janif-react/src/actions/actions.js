/* Action types */

export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_SCORE = 'ADD_SCORE';
export const USE_BANANA = 'USE_BANANA';
export const USE_BEAN = 'USE_BEAN';

/* Action creators */

export function addPlayer(name) {
  return {
    type: ADD_PLAYER,
    name
  }
}

export function addScore(points, id) {
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
