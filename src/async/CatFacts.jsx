import { useEffect, useState } from "react";
import { getCatFact } from "./fetchers";

function log(...msg) {
  console.log(`${Date.now()}`.slice(-6), ...msg);
}

// --------------------------------
export default function CatFacts() {
  console.clear();
  const [data, setData] = useState({});

  useEffect(() => {
    getCatFact().then(catFact => {
      setData(catFact);
      log("ok", catFact);
    }).catch(err => {
      log("error", err);
      setData([{ fact: "Oops" }]);
    })
  }, []);

  return (
    <div>
      <h1>About Cats</h1>
      <h3>{data.fact}</h3>
    </div>
  );
}