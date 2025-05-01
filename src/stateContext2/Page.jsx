/* eslint-disable react/prop-types */
import { Profiler, useCallback } from 'react';
import './style.css';
import { getStore, StateProvider, useStateContext, VER } from './StateProvider';
import { Parent, RandomDiv } from './Family';

function onRender(id, phase, actual) {
  console.log(`${id}:${phase} = ${Math.round(actual)} ms`);
}
///////////////////////////////////////
export default function Page() {

  return (
    <Profiler id="state-provider" onRender={onRender}>
      <StateProvider>
        <RandomDiv id="version">Version {VER}</RandomDiv>
        <Parent />
        {VER===1 && <Reload1 />}
        {VER > 1 && <Reload2 />}
      </StateProvider>
    </Profiler>
  );
}

const Reload1 = () => {
  const { dispatch } = useStateContext();
  const doClick = useCallback(() => {
    console.clear();
    dispatch({ type: "reload" });
  }, [dispatch]);
  return (
    <RandomDiv id="reload-button">
      <p>Version {VER}</p>
      <button onClick={doClick}>Reload Data</button>
    </RandomDiv>
  );
}
const Reload2 = () => {
  const { dispatch } = getStore();
  const doClick = useCallback(() => {
    console.clear();
    dispatch({ type: "reload" });
  }, [dispatch]);
  return (
    <RandomDiv id="reload-button">
      <p>Version {VER}</p>
      <button onClick={doClick}>Reload Data</button>
    </RandomDiv>
  );
}
