/** @format */
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
document.cookie = "sessionid:kmzv7jorb1gjeubbqc9xtv1r03r2a10u";
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
