import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCountAction, decrementCountAction, resetCountAction } from './redux-counter';
import { AutoIncrementor } from './AutoIncrementor';
import './Counter.css';

export const Counter = () => {
  const count = useSelector((store) => store.count);
  const isIncrementing = useSelector((store) => store.isIncrementing);
  const dispatch = useDispatch();

  const incremenetCount = useCallback(() => dispatch(incrementCountAction()), [dispatch]);
  const decrementCount = useCallback(() => dispatch(decrementCountAction()), [dispatch]);
  const resetCount = useCallback(() => dispatch(resetCountAction()), [dispatch]);

  return (
    <div className="counter">
      {isIncrementing && (
        <div>auto-incrementing...</div>
      )}
      <div className="row">
        <button onClick={decrementCount} type="button" disabled={isIncrementing}>-</button>
        <div>{count}</div>
        <button onClick={incremenetCount} type="button" disabled={isIncrementing}>+</button>
      </div>
      <button onClick={resetCount} type="button" disabled={isIncrementing}>reset</button>
      <AutoIncrementor />
    </div>
  )

};
