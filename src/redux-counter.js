import { createStore } from 'redux';

// Action creators
export const incrementCountAction = () => ({ type: '@@counter/INCREMENT_COUNT' });
export const decrementCountAction = () => ({ type: '@@counter/DECREMENT_COUNT' });
export const resetCountAction = () => ({ type: '@@counter/RESET_COUNT' });

const initialState = { count: 0 };

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '@@counter/INCREMENT_COUNT':
      return {
        count: state.count + 1,
      };
    case '@@counter/DECREMENT_COUNT':
      return {
        count: state.count - 1,
      };
    case '@@counter/RESET_COUNT':
      return {
        count: 0,
      };
    default:
      return state;
  }

};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());