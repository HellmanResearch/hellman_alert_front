/** @format */
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
//import "amfe-flexible";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("");
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
