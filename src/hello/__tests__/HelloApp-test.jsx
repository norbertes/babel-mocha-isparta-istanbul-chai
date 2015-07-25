import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
const Simulate = TestUtils.Simulate;

import HelloApp from '../HelloApp';
import HelloComp from 'hello/react/HelloComp';

describe('HelloApp', () => {

  it('render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloApp title="Hello Mocha"/>);
    const result = renderer.getRenderOutput();
    result.type.should.be.eql('div');
    result.props.children.should.be.eql([
      <h1>Hello Mocha</h1>,
      <HelloComp name="Mocha" />
    ]);
  });

});
