import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./core/app/app";
import { store } from "./core/store/store";
import { Provider } from "react-redux";

const container = document.querySelector(".container")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
