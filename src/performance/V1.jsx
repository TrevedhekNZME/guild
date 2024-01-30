import React from "react";
import { SlowRendering } from "./SlowRendering";

export function Ver1() {
  const [color, setColor] = React.useState('red');
  return (
    <div>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
      <SlowRendering />
    </div>
  );
}
