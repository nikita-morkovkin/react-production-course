import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from "react-router-dom";
import './app/styles/index.scss';
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";

render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);