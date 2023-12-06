import { useEffect } from "react";
import "./style.css";

function log(msg) {
  console.log(`${Date.now()}`.slice(-6), msg);
}

function callback() {
  log("Callback called");
}
function callback2() {
  log("Other callback called");
}
// --------------------------------
export default function Timeouts() {
  console.clear();
  log("Start");

  useEffect(() => {
    log("Initial");
    setTimeout(callback, 1500);
    log("Check");
  }, []);
  
  function rerun() {
    log("Running");
    setTimeout(callback2, 1500);
    log("Check2");
  }

  return (
    <div>
      <h1>Timeouts</h1>
      <button onClick={rerun}>Rerun</button>
    </div>
  );
}