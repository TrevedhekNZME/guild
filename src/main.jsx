import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary';
// import Async from './async';
import Perform from './performance';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    {/* <Async /> */}
    <Perform />
  </ErrorBoundary>
)
