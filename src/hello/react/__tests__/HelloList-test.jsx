import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import HelloList from '../HelloList';
import HelloItem from '../HelloItem';

describe('HelloList', () => {

  const ITEMS = ['A', 'B', 'C'].map(item => {
    return {value: item, checked: item === 'B'};
  });

  it('should be rendered by jsdom', () => {
    var comp = TestUtils.renderIntoDocument(<HelloList hello="Mocha" items={ITEMS} />);
    comp.refs.title.props.name.should.be.equal('Mocha');

    var items = TestUtils.scryRenderedComponentsWithType(comp, HelloItem);
    items.length.should.be.equal(ITEMS.length);
    items.map(item => {
      return item.props.checked;
    }).should.be.eql([false, true, false]);
  });

  it('should be rendered by shallowRenderer', () => {
    const shallowRenderer = TestUtils.createRenderer();
    let items = (() => {
      shallowRenderer.render(<HelloList hello="Mocha" items={ITEMS}/>);
      const comp = shallowRenderer.getRenderOutput();
      return comp.props.children[1].props.children.filter(component => component.type === HelloItem);
    })();
    items.length.should.be.equal(ITEMS.length);
    items.map(item => {
      return item.props.checked;
    }).should.be.eql([false, true, false]);
  });

});
