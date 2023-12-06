import { useEffect } from "react";
import { mockFetch } from "./fetchers";
import "./style.css";

function log(...msg) {
  console.log(`${Date.now()}`.slice(-6), ...msg);
}

function success(data) {
  log("Callback called", data);
}

function fail(data) {
  log("Callback called", data);
}

// --------------------------------
export default function RandNums() {
  console.clear();

  useEffect(() => {
    mockFetch("ok")
      .then(success)
      .catch(fail);
  }, []);

  function rerun(mockPath) {
    return async () => {
      try {
        const data = await mockFetch(mockPath);
        success(data);
      } catch (err) {
        fail(err);
      }
    }
  }

  return (
    <div>
      <h1>Some Random Numbers</h1>
      <button onClick={rerun("ok")}>Reload</button>
      <button onClick={rerun("break")}>Break</button>
      <ul>
        {/* {nums.map(n => (<li key={n}>{n}</li>))} */}
      </ul>
    </div>
  );
}