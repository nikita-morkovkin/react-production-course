import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from "./components/Counter/Counter";
import AboutPageLazy from "./pages/AboutPage/AboutPageLazy";
import MainPageLazy from "./pages/MainPage/MainPageLazy";
import './styles/index.scss';
import useTheme from "./components/Theme/UseThemeHook/useTheme";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>React + TS + Webpack</h1>

      <Counter />
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>

      <button
        type="button"
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Switch dark' : 'Switch light'}
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/about"
            element={<AboutPageLazy />}
          />

          <Route
            path="/"
            element={<MainPageLazy />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;