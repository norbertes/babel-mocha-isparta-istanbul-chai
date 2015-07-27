import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {checked: this.props.checked || false};
  },
  handleChange: function(evt) {
    this.setState({checked: !this.state.checked});
  },
  render: function() {
    return <label><input type="checkbox" value={this.props.value}
      onChange={this.handleChange} checked={this.state.checked} />
      {this.props.value}: {this.state.checked ? 'On' : 'Off'}</label>;
  }
});
