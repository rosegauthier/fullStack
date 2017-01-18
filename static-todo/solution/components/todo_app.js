import React from 'react';
import Header from './header';
import TodoList from './todo_list';
import NewTodo from './new_todo';

var TodoApp = React.createClass({
  render: function() {
    return <div className='todo-list'>
      <Header />
      <TodoList />
      <NewTodo />
    </div>
  }
})

export default TodoApp;
