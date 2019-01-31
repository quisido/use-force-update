import { expect } from 'chai';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import useForceUpdate from '../src/use-force-update';

describe('useForceUpdate', () => {
  let forceUpdate: () => void;
  let renders: number;
  let TestComponent: React.FunctionComponent<{}>;

  beforeEach(() => {

    // Reset render count.
    renders = 0;

    // Create the component.
    // This creates a new forceUpdate hook for each test.
    TestComponent = () => {
      forceUpdate = useForceUpdate();
      renders++;
      return null;
    };

  });

  it('should update a component', () => {
    expect(renders).to.equal(0);
    TestRenderer.create(<TestComponent />);
    expect(renders).to.equal(1);
    forceUpdate();
    expect(renders).to.equal(2);
  });

});
