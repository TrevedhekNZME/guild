import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary';
import Page1 from './stateContext/Page1';
// import Async from './async';
// import Perform from './performance';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Page1 />
    {/* <Async /> */}
    {/* <Perform /> */}
  </ErrorBoundary>
)
