import Router from "./router/main-router";
import { StateProvider } from './context';

function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}

export default App;
