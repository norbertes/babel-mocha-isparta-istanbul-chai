import React from 'react';
import HelloList from 'hello/react/HelloList';

const ITEMS = ['A', 'B', 'C'];

export default React.createClass({
  render: function() {
    return <HelloList items={ITEMS.map(item => {
      return {value: item, checked: item === 'B'};
    })} />;
  }
});
