/* eslint-disable react/prop-types */
import { Profiler } from 'react';
import './style.css';
import { GrandParent } from './Children2';
import createStore from './createStore';
import { StoreProvider } from './StoreProvider2';

const loadData = () => ({
  name: "This property doesn't change",
  date: Date.now()
});

function theReducer(state = {}, action) {
  return {
    ...state,
    ...loadData(),
    action
  }
}

function onRender(id, phase, actual) {
  console.log(`${id}:${phase} = ${Math.round(actual)}ms`);
}
///////////////////////////////////////
export default function Page3() {
  const theStore = createStore(theReducer);
  return (
    <Profiler id="store2-provider" onRender={onRender}>
      <StoreProvider store={theStore}>
        <h1>V3</h1>
        <GrandParent />
      </StoreProvider>
    </Profiler>
  );
}
