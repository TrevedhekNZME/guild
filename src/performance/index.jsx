import { Ver1 } from "./V1";
import { Ver2 } from "./V2";
import { Ver3 } from "./V3";
import { Ver4 } from "./V4";

const ver = 1;

export default function Perform() {
  console.clear();
  return (
    <div>
      <h1>Performance tests, version {ver}</h1>
      {ver === 1 && <Ver1 />}
      {ver === 2 && <Ver2 />}
      {ver === 3 && <Ver3 />}
      {ver === 4 && <Ver4 />}
    </div>
  )
}
