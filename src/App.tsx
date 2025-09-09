import React from 'react';
import {Counter} from "./components/Counter/Counter";
import './index.scss';

const App = () => {
  return (
    <div>
      <h1>React + TS + Webpack</h1>

      <Counter />
    </div>
  );
};

export default App;