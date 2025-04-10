/* eslint-disable react/prop-types */
import './style.css';
import { useStateContext } from './StateProvider';
import { publish } from '../pubsub';
import { SlowRendering } from '../performance/SlowRendering';

function doReload() {
  publish("RELOAD");
}

////////////////////////////////////////
export const GrandParent = () => (
  <div className="granny">
    <h2>Data loaded:</h2>
    <SlowRendering id="granny" />
    <Parent />
    <ChildFull />
    <button onClick={doReload}>Reload</button>
  </div>
);

////////////////////////////////////////
const Parent = () => {
  const data = useStateContext();
  return (
    <div className="parent">
      <SlowRendering id="parent" />
      <Child1 data={data} />
      <Child2 data={data} />
    </div>
  )
}

////////////////////////////////////////
const Child1 = ({ data }) => (
  <div className="child">
    The name = <span>{data.name}</span>
    <SlowRendering id="name" />
  </div>
)

const Child2 = ({ data }) => (
  <div className="child">
    The timestamp = <span>{new Date(data.date).toISOString()}</span>
    <SlowRendering id="date" />
  </div>
)

const ChildFull = () => {
  const data = useStateContext();
  return (
    <div className="child">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
