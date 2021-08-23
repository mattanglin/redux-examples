import { createStore } from 'redux';

// Action creator
export const setCountAction = (count) => ({  type: '@@counter/SET_COUNT', payload: count });

const initialState = { count: 0 };

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '@@counter/SET_COUNT':
      return {
        count: action.payload,
      };
    default:
      return state;
  }

};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());