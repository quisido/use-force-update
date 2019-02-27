import { useReducer } from 'react';

type VoidFunction = () => void
type VoidFunctionCreator = () => VoidFunction;
type ToggleReducer = (state: boolean, action: void) => boolean;

const reducer: ToggleReducer = state => !state;

const useForceUpdate: VoidFunctionCreator = () => (
  useReducer(reducer, true)[1] as VoidFunction
);

export default useForceUpdate;
