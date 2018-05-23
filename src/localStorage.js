export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      console.log("'state' item not in localStorage");
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (_error) {
    console.log(_error);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (_error) {
    // Ignore write errors
  }
};