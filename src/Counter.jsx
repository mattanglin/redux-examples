import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCountAction, decrementCountAction, resetCountAction } from './redux-counter';
import './Counter.css';

export const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();

  const incremenetCount = useCallback(() => dispatch(incrementCountAction()), [dispatch]);
  const decrementCount = useCallback(() => dispatch(decrementCountAction()), [dispatch]);
  const resetCount = useCallback(() => dispatch(resetCountAction()), [dispatch]);

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
