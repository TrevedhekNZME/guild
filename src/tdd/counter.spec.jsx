/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { DelayedCounter, SimpleCounter, PromiseCounter } from './counter';


test("increments the count", () => {
  render(<SimpleCounter />);
  expect(screen.getByText('0')).toBeDefined();

  fireEvent.click(screen.getByText('Increment'));

  const countSpan = screen.getByText('1');
  console.log(0, countSpan?.outerHTML);
  expect(countSpan).toBeDefined();
});


test.skip("increments the count in a promise", async () => {
  render(<PromiseCounter />)
  expect(screen.getByText('0')).toBeDefined();

  fireEvent.click(screen.getByText('Increment'));
  // act(() => fireEvent.click(screen.getByText('Increment')));
  // await act(async () => fireEvent.click(screen.getByText('Increment')));

  const countSpan = screen.getByText('1');
  // const countSpan = screen.findByText('1');
  // const countSpan = await screen.findByText('1');
  console.log(1, countSpan?.outerHTML);
  expect(countSpan).toBeDefined();
  // expect(countSpan.textContent).toBe("1");
});


test.skip("increments the count after a delay", async () => {
  render(<DelayedCounter delay={2} />);
  expect(screen.getByText('0')).toBeDefined();

  // fireEvent.click(screen.getByText('Increment'));
  await act(async () => fireEvent.click(screen.getByText('Increment')));

  const countSpan = screen.getByText('1');
  // const countSpan = screen.findByText('1');
  // const countSpan = await screen.findByText('1');
  console.log(2, countSpan?.outerHTML);
  expect(countSpan.textContent).toBe("1");
});


test.skip("increments the count after a LONG delay", async () => {
  // vi.useFakeTimers();

  render(<DelayedCounter delay={2000} />);
  expect(screen.getByText('0')).toBeDefined();

  await act(async () => fireEvent.click(screen.getByText('Increment')));
  // fireEvent.click(screen.getByText('Increment'));
  
  // vi.runAllTimers();
  // await vi.runAllTimers();
  // await act(async () => vi.runAllTimers());
  
  const countSpan = await screen.findByText('1');
  // const countSpan = screen.getByText('1');
  console.log(2, countSpan?.outerHTML);
  expect(countSpan.textContent).toBe("1");
  
  // vi.restoreAllMocks();
});
