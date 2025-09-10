import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import './styles/index.scss';
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <h1>React + TS + Webpack</h1>

      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>

      <button
        type="button"
        className={'button-switch'}
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Switch dark' : 'Switch light'}
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/"
            element={<MainPage />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;