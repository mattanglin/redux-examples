import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountAction } from './redux-counter';
import './Counter.css';

export const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  const setCount = useCallback((countParam) => dispatch(setCountAction(countParam)), [dispatch]);

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
