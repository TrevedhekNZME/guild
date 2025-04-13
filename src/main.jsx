import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from './ErrorBoundary';
import Page from './stateContext2/Page';
// import Async from './async';
// import Perform from './performance';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Page />
    {/* <Async /> */}
    {/* <Perform /> */}
  </ErrorBoundary>
)
