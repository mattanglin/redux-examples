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