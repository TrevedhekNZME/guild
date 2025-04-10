import React from 'react';

export function ClickTest(props) {
  return (
    <div role="main">
      <div>
        <button type="button" onClick={props.onClick}>
          <span style={{pointerEvents:"none"}}>Some Text Here</span>
          <img src="https://placehold.co/20x20"/>
        </button>
      </div>
    </div>
  )
}
