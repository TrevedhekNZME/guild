/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';

const StoreContext = createContext(null);

export const StoreProvider = (props) => (
  <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
)

const defaultSelector = data => data;

export const useStore = (selector) => {
  const select = selector || defaultSelector;
  const store = useContext(StoreContext);
  const [value, setValue] = useState(select(store.getData()));

  useEffect(() => {
    return store.subscribe(() => {
      const data = select(store.getData());
      setValue(data);
    })
  }, [select, store]);
  return value;
}
