/* eslint-disable react/prop-types */
import { Profiler, useEffect, useState } from 'react';
import './style.css';
import { StateProvider } from './StateProvider';
import { subscribe } from '../pubsub';
import { GrandParent } from './Children';

const loadData = () => ({
  name: "This property doesn't change",
  date: Date.now()
});

function onRender(id, phase, actual) {
  console.log(`${id}:${phase} = ${Math.round(actual)}ms`);
}
///////////////////////////////////////
export default function Page1() {
  const [theData, setData] = useState(loadData());

  useEffect(() => {
    return subscribe("RELOAD", () => {
      setData(loadData());
    })
  }, []);

  return (
    <Profiler id="state-provider" onRender={onRender}>
      <StateProvider theData={theData}>
        <GrandParent />
      </StateProvider>
    </Profiler>
  );
}
