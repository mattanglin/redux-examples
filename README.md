# Redux Examples

Basic example of Redux usage and why we use it for team walkthrough.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

This project has stepped branches so you can see the reasoning and thought process behind incrementally integrating redux into your appplication.

### Install

```
> npm install
```

### Run App
```
> npm start
```

## 01 React State

A common function of our React components and applications is basic state management.
Here we see in the [Counter Component](./src/Counter.jsx) basic state management with the [useState hook](https://reactjs.org/docs/hooks-reference.html#usestate)
to maintain the counter count.

## 02 React State Pitfalls

A common pitfall for localized React state is being unable to access state in parent or sibling components. Additionally,
your local state will be lost everytime your component unmounts and remounts. In this example you can see this by changing
the counter value, clicking a different "page" button, and then returning to the "counter" page.

## 03 React Context Solution

A common solution the above pitfall is to hoist state to a parent component and passing it down via props. A better solution,
still using core React is to [create a context](./src/counterCtx.js) and [wrap our entire app with the context provider](./src/App.js#L18).
Now we can easily [access `count` and `setCount` in our Counter component](./src/Counter.jsx#L6) (or any other component for that matter) by consuming the
provided context. Additionally, since the context won't ever unount (unless we unmount our entire App) we don't have to worry about the value getting lost.

## 04 Redux Solution

Redux is essentially just global state provided to our app globally via context. In our redux implementation we
- [create an action for `setCount`](./src/redux-counter.js#L4)
- [create an object shape and default value for our initial store state](./src/redux-counter.js#L6)
- [create a reducer to handle our `setCount` action](./src/redux-counter.js#L8)
- [Create a store with our configured reducer](./src/redux-counter.js#L20)
- and finally, [wrap our app with configured redux context provider](./src/App.js#L18) just like we did with our previous context.

Now we can access our `count` state and call (dispatch) our `setCount` action from [within our Counter component](./src/Counter.jsx#L7-L9) just like before!
That seems like a lot of overhead just to accomplish what we easily did with React context...

## 05 Redux Reducer Actions

We can refactor our existing solution by abstracting the separate counter handlers out of Counter component and [making them into explicit actions](./src/redux-counter.js#L4-L6) that
get dispatched to our store and then [handled by our reducer](./src/redux-counter.js#L12-L23). This moves the counter functionality complexity out of our components which makes it
much easier to [unit test our counter behavior](./src/redux-counter.spec.js#L8). Which is good. Unit tests are a good thing.

You can run the tests yourself with the following command:
```
> npm test
```

## 06 Redux Thunks

Since Redux reducers need to be pure functions that can only handle plain Javascript objects as actions, we need to integrate Redux thunk middleware to handle
asynchrounous side effects. Redux [thunk middleware is added to our store](./src/redux-counter.js#L69-L71) so it can intercept and handle "thunk" actions allowing us to dispatch functions in addition
to plain object actions. The middleware is [incredibly simple](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js). If the dispatched [action is a function (thunk) we invoke that function](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js#L3),
passing it our stores `dispatch` and `getStore` as paramaters. If the dispatched action is a [regualr javascript object action, we let it pass through to our reducers](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js#L7) as is.
This allows us to create [asynchronous thunk actions](./src/redux-coutner.js#LL11-L32) we can [dispatch to our store](./src/AutoIncrementor.jsx#L13).
As the async function executes it can [dispatch](./src/redux-counter.js#L15) as [many actions](./src/redux-counter.js#L22) as [needed](./src/redux-counter.js#L30) during its lifecycle.
Any standard object actions that are dispatched will get [handled by our reducer](./src/redux-counter.js#L53) as expected.
The thunk action in this example may not be terribly useful, but hopefully you can see how it could easily translate to other asynchronous functionality (like a fetch call with optional success and failure actions).
