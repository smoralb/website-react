import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import React, { Suspense } from 'react';

ReactDOM.render(
  <React.StrictMode>
        <Suspense fallback="loading">
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>,
  document.querySelector("#root")
);

reportWebVitals()
