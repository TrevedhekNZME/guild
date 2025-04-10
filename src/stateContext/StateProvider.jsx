/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

const StateContext = createContext(null);

export const StateProvider = (props) => (
  <StateContext.Provider value={props.theData}>
    {props.children}
  </StateContext.Provider>
)

export const useStateContext = () => {
  const data = useContext(StateContext);
  if (!data) {
    throw new Error("Oops, are you using StateProvider?");
  }
  return data;
}
