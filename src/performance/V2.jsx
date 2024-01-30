import React from "react";
import { SlowRendering } from "./SlowRendering";

export function Ver2() {
  return (
    <div>
      <SubState />
      <SlowRendering />
    </div>
  );
}

function SubState() {
  const [color, setColor] = React.useState('red');
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
    </>
  )
}
