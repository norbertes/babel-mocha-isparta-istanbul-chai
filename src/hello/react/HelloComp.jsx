import React from 'react';

export default React.createClass({
  render: function() {
    const verb = !this.props.hi ? 'Hello' : 'Hi';
    return (
      <div>{verb}, {this.props.name}!</div>
    );
  }
});
