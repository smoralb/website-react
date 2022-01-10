import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);

reportWebVitals();
