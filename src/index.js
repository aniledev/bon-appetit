// import "unfetch/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./contexts/UserContext";
import App from "./App";
// import "./setup-icons";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    {/* <UserProvider> */}
    <App />
    {/* </UserProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
