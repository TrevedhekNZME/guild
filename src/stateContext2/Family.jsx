/* eslint-disable react/prop-types */
import './style.css';
import { StateContext, useStateContext, VER } from './StateProvider';
import { useContext } from 'react';

////////////////////////////////////////
export const Parent = () => (
  <RandomDiv>
    <h2>Parent</h2>
    {VER < 3 && <Child1 />}
    {VER > 2 && <Child1v3 />}
    <Child2 />
    <Child3 />
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

const Child1v3 = () => {
  const {theData:name} = useStateContext(d => d.name);
  return (
    <RandomDiv className="child">
      The name = <span>{name}</span>
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

const Child3 = () => {
  const { theData } = useContext(StateContext);
  return (
    <>
      <h3>useContext versions</h3>
      <RandomDiv className="child">
        The name with useContent = <span>{theData.name}</span>
      </RandomDiv>
      <RandomDiv className="child">
        The ID with useContent = <span>{theData.id}</span>
      </RandomDiv>
    </>
  );
}

// let colr = 0;
// const codes = "fcc ccf cfc".split(" ");
// function getRandomColr() {
//   const code = codes[colr];
//   colr = (colr + 1) % 4;
//   return {
//     padding: "1rem",
//     backgroundColor: `#${code}`
//   }
// }
const theStyle = { padding: "1rem", border: "solid thin #eee"};
const getRandomColr = () => theStyle;

export const RandomDiv = props => (
  <div style={getRandomColr()}>{props.children}</div>
)