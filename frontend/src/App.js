import Router from "./router/main-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StateProvider } from "./context";
import "./actions/axios.config";

function App() {
  return (
    <StateProvider>
      <Router />
      <ToastContainer />
    </StateProvider>
  );
}

export default App;
