import { GlobalState_Provider } from "Hooks/useGlobalState";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <GlobalState_Provider>
    <App />
  </GlobalState_Provider>,
  document.getElementById("root")
);