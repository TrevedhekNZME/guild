import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary';
import Timeouts from './async/Timeouts';
import Promises from './async/Promises';
import RandNums from './async/RandNums';
import CatFacts from './async/CatFacts';

const ver = 4;

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <div>
      <h1>Async calls, version {ver}</h1>
      {ver===1 && <Timeouts />}
      {ver===2 && <Promises />}
      {ver===3 && <RandNums />}
      {ver===4 && <CatFacts />}
    </div>
  </ErrorBoundary>
)

