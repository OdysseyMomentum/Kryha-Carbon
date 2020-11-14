import Router from "./router/main-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StateProvider } from "./context";
import "./actions/axios.config";
import { GlobalStyle } from "./styles/styled";

function App() {
  return (
    <StateProvider>
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </StateProvider>
  );
}

export default App;
