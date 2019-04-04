import { useRef, useState } from 'react';

function useForceUpdate() {
  const setValue = useState(0)[1]
  return useRef(() => setValue(v => ~v)).current
}

export default useForceUpdate;
