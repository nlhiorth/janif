export function loadState() {
  try {
    const localstate = localStorage.getItem('state');
    if (localstate === null) {
      return undefined;
    }
    return JSON.parse(localstate);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state) {
  localStorage.setItem('state', JSON.stringify(state));
}
