import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementXTimesEverySecondThunk } from './redux-counter';
import './AutoIncrementor.css';

export const AutoIncrementor = () => {
  const [incrementCount, setIncrementCount] = useState(1);
  const handleIncrementChange = useCallback((event) => setIncrementCount(parseInt(event.target.value)), []);

  const isIncrementing = useSelector((store) => store.isIncrementing);

  const dispatch = useDispatch();
  const autoIncrement = useCallback(() => dispatch(incrementXTimesEverySecondThunk(incrementCount)), [incrementCount, dispatch]);

  return (
    <div className="auto-incrementor">
      <label htmlFor="incrementor">How many times do you want to increment?</label>
      <div className="field">
        <input id="incrementor" type="number" onChange={handleIncrementChange} value={incrementCount} />
        <button onClick={autoIncrement} type="button" disabled={isIncrementing}>auto-increment</button>
      </div>
    </div>
  )
};
