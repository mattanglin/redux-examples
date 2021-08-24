import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Action creators
export const incrementCountAction = () => ({ type: '@@counter/INCREMENT_COUNT' });
export const decrementCountAction = () => ({ type: '@@counter/DECREMENT_COUNT' });
export const resetCountAction = () => ({ type: '@@counter/RESET_COUNT' });

export const setIncrementing = (isIncrementing = true) => ({ type: '@@counter/SET_INCREMENTING', payload: isIncrementing });

export const incrementXTimesEverySecondThunk = (x = 0) => {
  // A "thunk" is a function action
  return async (dispatch, getState) => {
    // Set incrementing state
    dispatch(setIncrementing());

    let timesIncremented = 0;
    while (timesIncremented < x) {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Incrementing from ${getState().count}.`);
          dispatch(incrementCountAction());
          resolve();
        }, 1000)
      });
      timesIncremented++;
    }

    // Unset incrementing
    dispatch(setIncrementing(false));
  }
}

const initialState = { count: 0, isIncrementing: false };

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '@@counter/INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case '@@counter/DECREMENT_COUNT':
      return {
        ...state,
        count: state.count - 1,
      };
    case '@@counter/RESET_COUNT':
      return {
        ...state,
        count: 0,
      };
    case '@@counter/SET_INCREMENTING':
      return {
        ...state,
        isIncrementing: action.payload,
      };
    default:
      return state;
  }

};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  )
);