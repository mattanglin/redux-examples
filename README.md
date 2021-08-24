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
Here we see in the [Counter Component](src/Counter.jsx) basic state management with the [useState hook](https://reactjs.org/docs/hooks-reference.html#usestate)
to maintain the counter count.

## 02 React State Pitfalls

A common pitfall for localized React state is being unable to access state in parent or sibling components. Additionally,
your local state will be lost everytime your component unmounts and remounts. In this example you can see this by changing
the counter value, clicking a different "page" button, and then returning to the "counter" page.

## 03 React Context Solution

A common solution the above pitfall is to hoist state to a parent component and passing it down via props. A better solution,
still using core React is to [create a context](src/counterCtx.js) and [wrap our entire app with the context provider](src/App.js#L18).
Now we can easily [access `count` and `setCount` in our Counter component](src/Counter.js#L6) (or any other component for that matter) by consuming the
provided context. Additionally, since the context won't ever unount (unless we unmount our entire App) we don't have to worry about the value getting lost.

## 04 Redux Solution

Redux is essentially just global state provided to our app globally via context. In our redux implementation we
- [create an action for `setCount`](src/redux-counter.js#L4)
- [create an object shape and default value for our initial store state](src/redux-counter.js#L6)
- [create a reducer to handle our `setCount` action](src/redux-counter.js#L8)
- [Create a store with our configured reducer](src/redux-counter.js#L20)
- and finally, [wrap our app with configured redux context provider](src/App.js#L18) just like we did with our previous context.

Now we can access our `count` state and call (dispatch) our `setCount` action from [within our Counter component](src/Coutner.js#L7-L9) just like before!
That seems like a lot of overhead just to accomplish what we easily did with React context...