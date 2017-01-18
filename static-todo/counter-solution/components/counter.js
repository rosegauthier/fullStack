import React from 'react';

var Counter = React.createClass({
  getInitialState: function() {
    return { count: 0 };
  },

  render: function() {
    return <div>
      <div>{ this.state.count }</div>
      <button onClick={ this.increment }>Increment</button>
      <button onClick={ this.decrement }>Decrement</button>
      <button onClick={ this.reset }>Reset</button>
    </div>;
  },

  increment: function() {
    this.setState({count: this.state.count + 1});
  },

  decrement: function() {
    this.setState({count: this.state.count - 1});
  },

  reset: function() {
    this.setState({count: 0});
  }
});

export default Counter;
