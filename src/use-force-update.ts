import { useReducer } from 'react';
 
const reducer = (state: boolean, _action: void): boolean => !state;

function useForceUpdate(){
  /**
   * see {@link https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate }
   */
  const [, dispatch] = useReducer<boolean, void>(reducer, true) ;

  // Turn dispatch(void) into dispatch().
  return dispatch as () => void;
};

export default useForceUpdate;
