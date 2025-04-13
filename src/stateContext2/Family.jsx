/* eslint-disable react/prop-types */
import './style.css';
import { getRandomColr, useStateContext } from './StateProvider';

////////////////////////////////////////
export const Parent = () => (
  <RandomDiv>
    <h2>Parent</h2>
    <Child1 />
    <Child2 />
  </RandomDiv>
);

////////////////////////////////////////
const Child1 = () => {
  const { theData } = useStateContext();
  return (
    <RandomDiv className="child">
      The name = <span>{theData.name}</span>
    </RandomDiv>
  );
}

const Child2 = () => {
  const { theData } = useStateContext();
  return (
    <RandomDiv className="child">
      The ID = <span>{theData.id}</span>
    </RandomDiv>
  );
}

export const RandomDiv = props => (
  <div style={getRandomColr()}>{props.children}</div>
)