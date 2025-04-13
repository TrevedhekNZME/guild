const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];

  const update = newState => {
    state = newState;
    listeners.forEach(listener => listener());
  };

  const store = {
    getState: () => state,
    subscribe: listener => {
      listeners.push(listener);
      return () => listeners.filter(l => l !== listener);
    },
    dispatch: action => {
      const newState = reducer(state, action);
      // TODo : any checks here?
      update(newState);
    }
  };

  // Initialize state
  store.dispatch({ type: "@@INIT" });
  return store;
};

export default createStore;
