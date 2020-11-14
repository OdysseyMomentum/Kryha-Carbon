import Router from "./router/main-router";
import { StateProvider } from './context';
import './actions/axios.config';

function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
