/* eslint-disable react/prop-types */
const delay = 250;

export function SlowRendering({id = "??"}) {
  const now = performance.now();
  console.log("slow - starting", id);

  // Evil blocking loop
  while (performance.now() - now < delay) {
    // Artificial delay -- do nothing for `delay`ms
  }
  console.log("slow - done", id);
  return <p>I am a very slow component. {id}</p>;
}

// const [, forceUpdate] = useReducer(x => x + 1, 0);
// const forceUpdate = useReducer(x => x + 1, 0)[1];