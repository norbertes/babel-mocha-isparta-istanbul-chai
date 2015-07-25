import React from 'react';
import HelloComp from 'hello/react/HelloComp';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <HelloComp name="Mocha" />
      </div>
    );
  }
});
