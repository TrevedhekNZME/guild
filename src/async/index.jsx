import Timeouts from './Timeouts';
import Promises from './Promises';
import RandNums from './RandNums';
import CatFacts from './CatFacts';

const ver = 4;

export default function Async() {
  return (
    <div>
      <h1>Async calls, version {ver}</h1>
      {ver===1 && <Timeouts />}
      {ver===2 && <Promises />}
      {ver===3 && <RandNums />}
      {ver===4 && <CatFacts />}
    </div>
  )
}
