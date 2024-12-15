# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an incorrect implementation of the dependency array, leading to an infinite loop.

## Bug Description
The `MyComponent` component uses the `useEffect` hook to update the `count` state. However, the dependency array is empty (`[]`), causing the effect to run after every render.  This results in `setCount` being called continuously, incrementing the count infinitely and crashing the application.

## Bug Solution
The solution involves correctly specifying the dependencies in the dependency array. In this case, the effect should only run when the `count` state changes.  The dependency array should include `count` to prevent the infinite loop.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the rapidly incrementing count in the browser console and application crash.
