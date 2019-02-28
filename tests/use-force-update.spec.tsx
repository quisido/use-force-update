import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import useForceUpdate from '../use-force-update';

type VoidFunction = () => void;

describe('useForceUpdate', () => {
  const forceUpdates: VoidFunction[] = [];
  let renders: number;
  let TestComponent: React.FunctionComponent<{}> = () => null;

  beforeEach(() => {

    // Reset array of forceUpdate functions.
    forceUpdates.splice(0, forceUpdates.length);

    // Reset render count.
    renders = 0;

    // Create the component.
    // This creates a new forceUpdate hook for each test.
    TestComponent = () => {
      forceUpdates.push(useForceUpdate());
      renders++;
      return null;
    };

  });

  it('should accept no parameters', () => {
    TestRenderer.create(<TestComponent />);
    expect(forceUpdates[0].length).to.equal(0);
  });

  it('should maintain the same reference', () => {
    TestRenderer.create(<TestComponent />);
    forceUpdates[0]();
    expect(forceUpdates[0]).to.equal(forceUpdates[1]);
  });

  it('should return undefined', () => {
    TestRenderer.create(<TestComponent />);
    expect(forceUpdates[0]()).to.be.undefined;
  });

  it('should update the component', () => {
    expect(renders).to.equal(0);
    TestRenderer.create(<TestComponent />);
    expect(renders).to.equal(1);
    forceUpdates[0]();
    expect(renders).to.equal(2);
    forceUpdates[1]();
    expect(renders).to.equal(3);
  });

});
