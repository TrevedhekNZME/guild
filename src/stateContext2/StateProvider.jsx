/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const rand = max => Math.round(Math.random() * max);

const makeData = () => ({
  name: "This property doesn't change",
  id: rand(100000000)
});

function theReducer(state = {}, action) {
  console.log(action);
  return { ...state, ...makeData() };
}

export const StateContext = createContext(null);

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(theReducer, makeData());
  const value = { theData: state, dispatch };
  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => {
  const value = useContext(StateContext);
  if (!value) {
    throw new Error("Oops, are you using StateProvider?");
  }
  return value;
}

export function getRandomColr() {
  return {
    padding: "1rem",
    backgroundColor: `rgb(${rand(55) + 200},${rand(55) + 200},${rand(55) + 200})`
  }
}