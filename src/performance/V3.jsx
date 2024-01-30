import React from "react";
import { SlowRendering } from "./SlowRendering";

export function Ver3() {
  return (
    <SuperState>
      <p>Hello, world!</p>
      <SlowRendering />
    </SuperState>
  );
}

function SuperState({ children }) {
  const [color, setColor] = React.useState('red');
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
}
