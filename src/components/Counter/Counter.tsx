import React, {useState} from 'react';
import * as classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>

      <div className={classes.container}>
        <button
          onClick={() => setCount(count - 1)}
          type="button"
        >
          DECREMENT
        </button>

        <button
          onClick={() => setCount(count + 1)}
          type="button"
        >
          INCREMENT
        </button>
      </div>
    </div>
  );
};