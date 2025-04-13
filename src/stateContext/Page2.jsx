/* eslint-disable react/prop-types */
import { Profiler } from 'react';
import './style.css';
import { GrandParent } from './Children2';

function onRender(id, phase, actual) {
  console.log(`${id}:${phase} = ${Math.round(actual)}ms`);
}
///////////////////////////////////////
export default function Page2() {
  return (
    <Profiler id="store-provider" onRender={onRender}>
      <h1>V2</h1>
      <GrandParent />
    </Profiler>
  );
}
