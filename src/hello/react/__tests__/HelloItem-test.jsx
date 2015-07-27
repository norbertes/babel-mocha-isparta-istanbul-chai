import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import ReactUtils from 'ReactUtils';

import HelloItem from '../HelloItem';

describe('HelloItem', () => {

  it('should be rendered in shadow', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloItem value="Mocha" />);
    const result = renderer.getRenderOutput();
    result.type.should.be.equal('label');
    result.props.children.map(ReactUtils.toTypeProps)
      .should.be.eql([
        {type: 'input', props: {type: 'checkbox', value: 'Mocha', checked: false}},
        {type: 'text', text: 'Mocha'},
        {type: 'text', text: ': '},
        {type: 'text', text: 'Off'}
      ]);
  });

  it('should be rendered in document(by jsdom)', () => {
    var comp = TestUtils.renderIntoDocument(<HelloItem value="Mocha" />);
    var chks = TestUtils.scryRenderedDOMComponentsWithTag(comp, 'input');
    chks.length.should.be.equal(1);
    var chk = chks[0];
    {
      chk.props.checked.should.be.false;
      comp.getDOMNode().textContent.should.be.equal('Mocha: Off');

      TestUtils.Simulate.change(chk);

      chk.props.checked.should.be.true;
      comp.getDOMNode().textContent.should.be.equal('Mocha: On');
    }
  });

  it('should be rendered as "Mocha: On"', () => {
    var comp = TestUtils.renderIntoDocument(<HelloItem value="Mocha" checked="true" />);
    comp.getDOMNode().textContent.should.be.equal('Mocha: On');
  });

});
