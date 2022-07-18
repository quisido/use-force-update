import { act, render } from '@testing-library/react';
import useForceUpdate from '.';

const FIRST = 0;
const NONE = 0;
const ONCE = 1;
const SECOND = 1;
const THRICE = 3;
const TWICE = 2;

describe('forceUpdate', () => {
  const forceUpdates: (() => void)[] = [];
  function TestComponent(): null {
    forceUpdates.push(useForceUpdate());
    return null;
  }

  beforeEach((): void => {
    forceUpdates.splice(FIRST, forceUpdates.length);
    render(<TestComponent />);
  });

  it('should accept no parameters', (): void => {
    expect(forceUpdates[FIRST].length).toBe(NONE);
  });

  it('should maintain the same reference', (): void => {
    act((): void => {
      forceUpdates[FIRST]();
    });

    expect(forceUpdates[FIRST]).toBe(forceUpdates[SECOND]);
  });

  it('should update the component', (): void => {
    expect(forceUpdates.length).toBe(ONCE);

    act((): void => {
      forceUpdates[FIRST]();
    });

    expect(forceUpdates.length).toBe(TWICE);

    act((): void => {
      forceUpdates[SECOND]();
    });

    expect(forceUpdates.length).toBe(THRICE);
  });
});
