/* eslint-disable react/prop-types */
import { Profiler, useCallback } from 'react';
import './style.css';
import { StateProvider, useStateContext } from './StateProvider';
import { Parent, RandomDiv } from './Family';

function onRender(id, phase, actual) {
  console.log(`${id}:${phase} = ${Math.round(actual*1000)} micros`);
}
///////////////////////////////////////
export default function Page() {

  return (
    <StateProvider>
      <h1>V1</h1>
      <Profiler id="state-provider" onRender={onRender}>
        <Parent />
        <Reload />
      </Profiler>
    </StateProvider>
  );
}

const Reload = () => {
  const { dispatch } = useStateContext();
  const doClick = useCallback(() => dispatch({ type: "reload" }), [dispatch]);
  return <RandomDiv><button onClick={doClick}>Reload Data</button></RandomDiv>
}
