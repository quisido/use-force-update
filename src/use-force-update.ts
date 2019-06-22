import { useReducer } from 'react';

const useForceUpdate = () =>
  useReducer(() => ({}), {})[1] as (() => void);

export default useForceUpdate;
