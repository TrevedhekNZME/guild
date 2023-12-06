/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

const DataContext = createContext(null);

export const DataProvider = (props) => (
  <DataContext.Provider value={props.theData}>
    {props.children}
  </DataContext.Provider>
)

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error("Oops, are you using DataProvider?");
  }
  return data;
}
