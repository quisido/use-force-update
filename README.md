# useForceUpdate
[![version](https://img.shields.io/npm/v/use-force-update.svg)](https://www.npmjs.com/package/use-force-update)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-force-update.svg)](https://www.npmjs.com/package/use-force-update)
[![downloads](https://img.shields.io/npm/dt/use-force-update.svg)](https://www.npmjs.com/package/use-force-update)
[![build](https://github.com/CharlesStover/use-force-update/actions/workflows/use-force-update.yml/badge.svg?branch=main&event=push)](https://github.com/CharlesStover/use-force-update/actions/workflows/use-force-update.yml)

`useForceUpdate` is a React Hook that forces your function component to
re-render.

`useForceUpdate` does not serve a purpose in and of itself. It is a tiny
package that aims to be integrated into larger hooks, making obsolete any class
functionality that is still reliant on `this.forceUpdate()`.

## Install

* `npm install use-force-update` or
* `yarn add use-force-update`

## Use

In its simplest form, `useForceUpdate` re-renders a component.

```jsx
import useForceUpdate from 'use-force-update';

let renderCount = 0;

export default function MyButton() {
  const forceUpdate = useForceUpdate();

  renderCount++;
  return (
    <>
      <p>I have rendered {renderCount} times.</p>
      <button onClick={forceUpdate}>
        Re-render
      </button>
    </>
  );
};
```

In its ideal form, `useForceUpdate` integrates with event emitters, such as
state managers.

```jsx
import { useEffect } from 'react';
import useForceUpdate from 'use-force-update';
import store from './store';

export default function MyButton() {
  const forceUpdate = useForceUpdate();

  const username = store.get('username');

  useEffect(() => {
    // When the username changes, re-render this component.
    const selector = state => state.username;
    const unsubscribe = store.subscribe(selector, forceUpdate);

    // When we unmount, stop re-rendering this component.
    return () => {
      unsubscribe();
    };
  }, [forceUpdate]);

  if (username === null) {
    return <p>You are not logged in.</p>;
  }

  return <p>Hello, {username}!</p>;
};
```
