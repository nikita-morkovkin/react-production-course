import React, {StrictMode} from 'react';
// eslint-disable-next-line react/no-deprecated
import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss';
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import "shared/config/i18n/i18n";
import {ErrorBoundary} from "app/providers/ErrorBoundary";

render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);