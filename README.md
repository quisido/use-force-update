# use-force-update
`useForceUpdate` is a React Hook that forces your functional component to re-render.

`useForceUpdate` does not serve a purpose in and of itself.
It is a tiny package that aims to be integrated into larger hooks, making obsolete any class functionality that is still reliant on `this.forceUpdate`.

## Install
* `npm install use-force-update` or
* `yarn add use-force-update`

## Use
```JavaScript
import useForceUpdate from 'use-force-update';

const MyButton = () => {

  const forceUpdate = useForceUpdate();

  const handleClick = () => {
    alert('I will re-render now.');
    forceUpdate();
  };

  return <button onClick={handleClick} />;
};
```
