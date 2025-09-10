import React from 'react';
import {Link} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/about'}>
        About
      </Link>

      <AppRouter />
    </div>
  );
};

export default App;