import {
  reducer,
  incrementCountAction,
  decrementCountAction,
  resetCountAction,
} from './redux-counter';

describe('redux-counter', () => {
  describe('reducer', () => {
    describe('increment', () => {
      it('should increment the existing count by one', () => {
        expect(reducer({ count: 0 }, incrementCountAction())).toHaveProperty('count', 1);
        expect(reducer({ count: 10 }, incrementCountAction())).toHaveProperty('count', 11);
        expect(reducer({ count: -10 }, incrementCountAction())).toHaveProperty('count', -9);
      });
    });

    describe('decrement', () => {
      it('should decrement the existing count by one', () => {
        expect(reducer({ count: 0 }, decrementCountAction())).toHaveProperty('count', -1);
        expect(reducer({ count: 10 }, decrementCountAction())).toHaveProperty('count', 9);
        expect(reducer({ count: -10 }, decrementCountAction())).toHaveProperty('count', -11);
      });
    });

    describe('reset', () => {
      it('should reset the count to zero', () => {
        expect(reducer({ count: 0 }, resetCountAction())).toHaveProperty('count', 0);
        expect(reducer({ count: 10 }, resetCountAction())).toHaveProperty('count', 0);
        expect(reducer({ count: -10 }, resetCountAction())).toHaveProperty('count', 0);
      });
    });
  });
});
