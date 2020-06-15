import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppContextProvider } from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  rootElement
);
