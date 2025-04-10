/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ClickTest } from './clickPropagation';

test("Click Propagation", () => {
  const onClick = evt => {
    console.log(["click", evt.target?.outerHTML, evt.currentTarget?.outerHTML]);
  }
  const { container } = render(<ClickTest onClick={onClick} />);
  container.addEventListener("click", (evt) => {
    console.log(["click-top", evt.target?.outerHTML, evt.currentTarget?.outerHTML]);
  });
  const img = container.querySelector("img");
  // const txt = container.querySelector("span");
  fireEvent.click(img);
  // fireEvent.click(txt);
})