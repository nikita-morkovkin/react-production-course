import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './styles/index.scss';
import ThemeProvider from "./components/Theme/ThemeProvider/ThemeProvider";

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