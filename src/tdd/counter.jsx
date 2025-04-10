import React from 'react';

// eslint-disable-next-line react/prop-types
const Counter = ({ doClick, count }) => (
  <div>
    <button onClick={doClick}>Increment</button>
    <span role="counter">{count}</span>
  </div>
)

// **************************
export const SimpleCounter = () => {
  const [count, setCount] = React.useState(0);
  const doClick = () => setCount(count + 1);
  
  return <Counter doClick={doClick} count={count} />;
};

// **************************
export const PromiseCounter = () => {
  const [count, setCount] = React.useState(0);
  const doClick = () => {
    Promise.resolve().then(() => setCount(count + 1));
  };
  
  return <Counter doClick={doClick} count={count} />;
};

// **************************
export const DelayedCounter = ({ delay = 20 }) => {
  const [count, setCount] = React.useState(0);
  const doClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, delay);
  };

  return <Counter doClick={doClick} count={count} />;
};
