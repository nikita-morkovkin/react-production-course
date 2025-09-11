import {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import useTheme from "./providers/ThemeProvider/lib/useTheme";
import './styles/index.scss';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading translation...</div>}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;