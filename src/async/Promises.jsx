import { useEffect } from "react";
import "./style.css";
import { mockFetch } from "./fetchers";

function log(...msg) {
  console.log(`${Date.now()}`.slice(-6), ...msg);
}

function callback(data) {
  log("Callback called", data);
}
function callback2(data) {
  log("Other callback called", data);
}

// --------------------------------
export default function Promises() {
  console.clear();
  log("Start");

  useEffect(() => {
    log("Initial");
    mockFetch("ok").then(callback);
    log("Check");
  }, []);
  
  function rerun() {
    log("Running");
    mockFetch("ok").then(callback2);
    log("Check2");
  }

  return (
    <div>
      <h1>Promises</h1>
      <button onClick={rerun}>Rerun</button>
    </div>
  );
}