/*
Generic store structure across most(all?) state management tools:
- initialize the state
- read state - usually a getState() method
- update state - eg: dispatch(...), setState(...)
- signal changes - eg: subscribers, observers, publishing events etc.
*/

// ---------------------------- //
const makeEmitter = () => {
  const listeners = new Set();

  const subscribe = listener => {
    if (typeof listener !== "function") {
      throw new TypeError("Invalid Parameter: listener");
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  // Signal changes
  const notify = (newState, oldState) => {
    listeners.forEach(listener => {
      try {
        listener(newState, oldState);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    });
  };
  return { subscribe, notify };
}

// ---------------------------- //
const createStore = (reducer, initialState) => {
  let state = initialState;

  // Signal changes
  const { subscribe, notify } = makeEmitter();

  // Update the state
  const dispatch = action => {
    const oldState = state;
    state = Object.freeze(reducer(state, action));
    // TODO : any checks here?
    notify(state, oldState);
  };

  const store = {
    getState: () => state,
    subscribe,
    dispatch
  };

  // Initialize state
  dispatch({ type: "@@INIT" });
  return store;
};

export default createStore;

// Helper for the below:
function getByPath(object, path, defaultValue) {
  if (!object || !path) return defaultValue;
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
  const result = pathArray.reduce((acc, key) => acc && acc[key], object);
  return result === undefined ? defaultValue : result;
}

// Alternative that assumes the state update is handled externally,
// and so is only concerned with distributing the state changes.
export const createStateMonitor = initialState => {
  let state = initialState;

  // Signal changes
  const { subscribe, notify } = makeEmitter();

  // Read state, by default the full state object but optionally the given slice(s) defined by `path`.
  const getState = path => {
    if (!path) return state;
    return getByPath(state, path, null);
  };

  // Update the state
  const setState = newState => {
    const oldState = state;
    state = newState;
    notify(state, oldState);
  };

  return { getState, subscribe, setState };
}