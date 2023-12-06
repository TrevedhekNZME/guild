/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './style.css';
import { DataProvider, useDataContext } from './DataProvider';
import { publish, subscribe } from '../pubsub';

const loadData = () => ({
  name: "NZ Herald Navigation",
  slug: "nzh-web-nav",
  date: Date.now(),
  id: Math.round(Math.random() * 100),
});

///////////////////////////////////////
export default function Page1() {
  const [theData, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      setData(loadData());
    }, 1000);
  }, []);

  useEffect(() => {
    return subscribe("RELOAD", () => {
      setData(null);
      setTimeout(() => {
        setData(loadData());
      }, 1000);
    })
  }, []);

  return theData ? (
    <DataProvider theData={theData}>
      <GrandParent />
    </DataProvider>
  ) : (
    <h1>Please wait...</h1>
  );
}

////////////////////////////////////////
const GrandParent = () => (
  <div className="granny">
    <h2>Data loaded:</h2>
    <Parent />
    <Child4 />
    <button onClick={() => publish("RELOAD")}>Reload</button>
  </div>
)

////////////////////////////////////////
const Parent = () => {
  const data = useDataContext();
  return (
    <div className="parent">
      <Child1 data={data} />
      <Child2 data={data} />
      <Child3 data={data} />
    </div>
  )
}

////////////////////////////////////////
const Child1 = ({ data }) => (
  <div className="child">
    The name = <span>{data.name}</span>
  </div>
)

const Child2 = ({ data }) => (
  <div className="child">
    The slug = <span>{data.slug}</span>
  </div>
)

const Child3 = ({ data }) => (
  <div className="child">
    The timestamp = <span>{new Date(data.date).toISOString()}</span>
  </div>
)

const Child4 = () => {
  const data = useDataContext();
  return (
    <div className="child">
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
