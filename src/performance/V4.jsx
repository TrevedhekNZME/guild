import React from "react";
import { SlowRendering } from "./SlowRendering";

export function Ver4a({children}) {
  const [color, setColor] = React.useState('red');
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      {children}
    </div>
  );
}
export function Ver4() {
  return (<Ver4a><SlowRendering /></Ver4a>);
}
