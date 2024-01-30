const delay = 900;

export function SlowRendering() {
  const now = performance.now();
  console.log("starting");
  while (performance.now() - now < delay) {
    // Artificial delay -- do nothing for `delay`ms
  }
  console.log("done");
  return <p>I am a very slow component tree.</p>;
}

// const [, forceUpdate] = useReducer(x => x + 1, 0);
// const forceUpdate = useReducer(x => x + 1, 0)[1];