import { useCallback, useReducer } from 'react';

type EmptyObject = {};

type VoidFunction = () => void;

// Returning a new object reference guarantees that a before-and-after
//   equivalence check will always be false, resulting in a re-render, even
//   when multiple calls to forceUpdate are batched.
const reducer = (): EmptyObject => Object.create(null);

const useForceUpdate = (): VoidFunction => {
  const [ , dispatch] =
    useReducer<EmptyObject, null>(reducer, Object.create(null));

  // Turn dispatch(required_parameter) into dispatch().
  const memoizedDispatch = useCallback(
    (): void => {
      dispatch(null);
    },
    [ dispatch ],
  );
  return memoizedDispatch;
};

export default useForceUpdate;
