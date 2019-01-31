// @ts-ignore
import { useState } from 'react';

interface VoidFunction {
  (): void;
}

interface VoidFunctionCreator {
  (): VoidFunction;
}

const toggle = (state: boolean) => !state;
const useForceUpdate: VoidFunctionCreator = (): VoidFunction => {
  const [ , setState ] = useState(false);
  const forceUpdate: VoidFunction = (): void => {
    setState(toggle);
  };
  return forceUpdate;
};

export default useForceUpdate;
