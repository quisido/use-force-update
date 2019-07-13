import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import useForceUpdate from '../use-force-update';

describe('useForceUpdate', () => {
  const forceUpdates: Array<() => void> = [];
  let renders: number;
  let TestComponent: React.FunctionComponent<{}> = () => null;

  beforeEach((): void => {

    // Reset array of forceUpdate functions.
    forceUpdates.splice(0, forceUpdates.length);

    // Reset render count.
    renders = 0;

    // Create the component.
    // This creates a new forceUpdate hook for each test.
    TestComponent = (): null => {
      forceUpdates.push(useForceUpdate());
      renders++;
      return null;
    };

  });

  it('should accept no parameters', (): void => {
    TestRenderer.create(<TestComponent />);
    expect(forceUpdates[0].length).to.equal(0);
  });

  it('should maintain the same reference', (): void => {
    TestRenderer.create(<TestComponent />);
    forceUpdates[0]();
    expect(forceUpdates[0]).to.equal(forceUpdates[1]);
  });

  it('should return undefined', (): void => {
    TestRenderer.create(<TestComponent />);
    expect(forceUpdates[0]()).to.be.undefined;
  });

  it('should update the component', (): void => {
    expect(renders).to.equal(0);
    TestRenderer.create(<TestComponent />);
    expect(renders).to.equal(1);
    forceUpdates[0]();
    expect(renders).to.equal(2);
    forceUpdates[1]();
    expect(renders).to.equal(3);
  });
});
