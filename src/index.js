import React from "react";
import ReactDOM from "react-dom";
import AppProvider from "./contex";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
