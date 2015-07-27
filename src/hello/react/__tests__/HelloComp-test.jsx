import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import HelloComp from '../HelloComp';

describe('HelloComp', () => {

  it('sayHello', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloComp name="Mocha"/>);
    const result = renderer.getRenderOutput();
    result.type.should.be.eql('div');
    result.props.children.should.be.eql([
      'Hello', ', ', 'Mocha', '!'
    ]);
  });

  it('sayHi', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloComp name="Mocha" hi />);
    const result = renderer.getRenderOutput();
    result.type.should.be.eql('div');
    result.props.children.should.be.eql([
      'Hi', ', ', 'Mocha', '!'
    ]);
  });

});
