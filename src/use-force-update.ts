import { useReducer } from 'react';

type VoidFunction = () => void;
type VoidFunctionCreator = () => VoidFunction;
type ToggleReducer = (state: boolean, action: void) => boolean;

const reducer: ToggleReducer = state => !state;

const useForceUpdate: VoidFunctionCreator = () => {
  const [, dispatch] = useReducer(reducer, true);
  return dispatch as VoidFunction;
};

export default useForceUpdate;
