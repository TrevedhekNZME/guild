/* eslint-disable react/prop-types */
import './style.css';
import { useStore } from './StoreProvider1';
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

const nameSelector = d => d.name;

const dateSelector = d => d.date;

////////////////////////////////////////
const Parent = () => {
  const data = useStore(nameSelector);
  const test = useStore(() => "A Const");
  console.log(test);
  return (
    <div className="parent">
      <SlowRendering id="parent" />
      <Child1 data={data} />
      <Child2 />
    </div>
  )
}

////////////////////////////////////////
const Child1 = ({ data }) => (
  <div className="child">
    The name = <span>{data}</span>
    <SlowRendering id="name" />
  </div>
)

const Child2 = () => {
  const data = useStore(dateSelector);
  return (
    <div className="child">
      The timestamp = <span>{new Date(data).toISOString()}</span>
      <SlowRendering id="date" />
    </div>
  );
}

const ChildFull = () => {
  const data = useStore();
  return (
    <div className="child">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
