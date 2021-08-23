import React, { useState, useCallback } from 'react';
import './Counter.css';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incremenetCount = useCallback(() => setCount(count + 1), [count, setCount]);
  const decrementCount = useCallback(() => setCount(count - 1), [count, setCount]);
  const resetCount = useCallback(() => setCount(0), [setCount]);

  return (
    <div className="counter">
      <div className="row">
        <button onClick={decrementCount} type="button">-</button>
        <div>{count}</div>
        <button onClick={incremenetCount} type="button">+</button>
      </div>
      <button onClick={resetCount} type="button">reset</button>
    </div>
  )

};
