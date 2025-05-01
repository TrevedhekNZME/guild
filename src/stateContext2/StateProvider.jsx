/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import createStore from './createStore';

const rand = max => Math.round(Math.random() * max);

const makeData = () => ({
  name: "This property doesn't change",
  id: rand(100000000)
});

const InitialState = makeData();

function theReducer(state = {}, action) {
  console.log(action);
  return { ...state, ...makeData() };
}

export const StateContext = createContext({});
const store = createStore(theReducer, InitialState);

//
//
//
//
//
export const VER = 4;
//
const StateProviderVersion = [
  (props) => {
    const [state, dispatch] = useReducer(theReducer, InitialState);
    const value = { theData: state, dispatch };
    return (
      <StateContext.Provider value={value}>
        {props.children}
      </StateContext.Provider>
    );
  },
  (props) => {
    const { getState, dispatch } = store;
    const [theData, setData] = useState(getState());
    useEffect(() => {
      return store.subscribe(newState => {
        setData(() => newState);
      });
    }, []);

    return (
      <StateContext.Provider value={{theData, dispatch}}>
        {props.children}
      </StateContext.Provider>
    );
  },
  (props) => {
    const { getState, dispatch } = store;
    const [theData, setData] = useState(getState());
    useEffect(() => {
      return store.subscribe(newState => {
        setData(() => newState);
      });
    }, []);

    return (
      <StateContext.Provider value={{theData, dispatch}}>
        {props.children}
      </StateContext.Provider>
    );
  },
  (props) => {
    const theStore = useMemo(() => {
      return {
        ...store,
        get theData() {
          return store.getState();
        }
      }
    }, []);

    return (
      <StateContext.Provider value={theStore}>
        {props.children}
      </StateContext.Provider>
    );
  }
]

const HookVersion = [
  () => {
    // Version 1
    const value = useContext(StateContext);
    return value;
  },
  () => {
    // Version 2
    const value = useContext(StateContext);
    return value;
  },
  (selector = d => d) => {
    // Version 3
    const { getState } = store;
    const [theData, setData] = useState(selector(getState()));
    useEffect(() => {
      return store.subscribe(newState => {
        setData(() => selector(newState));
      });
    }, [selector]);
    return {theData};
  },
  (selector = d => d) => {
    // Version 4
    const theStore = useContext(StateContext);
    // Check for old context
    if (!theStore.getState) {
      theStore.getState = () => theStore.theData;
    }
  
    const [theData, setData] = useState(selector(theStore.getState()));

    useEffect(() => {
      if (!theStore.subscribe) return undefined;
      return theStore.subscribe(() => {
        setData(() => selector(theStore.getState()));
      });
    }, [selector, theStore]);

    return { theData, dispatch: theStore.dispatch };
  }
]

const StateProvider = StateProviderVersion[VER-1];
const useStateContext = HookVersion[VER - 1];

export {  StateProvider, useStateContext }

export const getStore = () => store;

// export const useID = () => {
//     const { getState } = store;
//     const [id, setData] = useState(getState().id);
//     useEffect(() => {
//       return store.subscribe(newState => {
//         setData(() => newState.id);
//       });
//     }, []);
//     return id;
//   }
// }
