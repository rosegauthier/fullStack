import React from 'react';
import Header from './header';
import List from './list';
import NewItems from './new_items';

var TodoApp = React.createClass({
	render: function() {
		return <div className='todo-list'>
      <Header />
      <div>
        <List />
      	<NewItems />
      </div>
    </div>
	}
});

export default TodoApp;


