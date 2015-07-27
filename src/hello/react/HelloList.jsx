import React from 'react';
import HelloComp from 'hello/react/HelloComp';
import HelloItem from 'hello/react/HelloItem';

export default React.createClass({
  render: function() {
    return (
      <div className="list">
        <h1 className="title">
          <HelloComp ref="title" name={this.props.hello} />
        </h1>
        <div className="items">
          {this.props.items.map(item =>
            <HelloItem key={item.value} value={item.value} checked={item.checked} />
          )}
        </div>
      </div>
    );
  }
});
