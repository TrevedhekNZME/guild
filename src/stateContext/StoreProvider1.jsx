/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { publish, subscribe } from '../pubsub';

function createStore() {
  const loadData = () => ({
    name: "This property doesn't change",
    date: Date.now()
  });

  const STORE = { data: loadData() };

  subscribe("RELOAD", () => {
    STORE.data = loadData();
    publish("STORE_UPDATED", STORE.data)
  })

  return STORE;
}

const GlobalStore = createStore();

const defaultSelector = data => data;

// Removing the Context structure in favour of an external Singleton approach
// solves the top-level "granny" component rendering. Only components that directly use the
// `useStore` hook now update. But the `name` component still updates needlessly.
export const useStore = (selector) => {
  const select = selector || defaultSelector;
  const [value, setValue] = useState(select(GlobalStore.data));

  useEffect(() => {
    return subscribe("STORE_UPDATED", () => {
      const data = select(GlobalStore.data);
      setValue(data);
    })
  }, [select]);
  return value;
}
