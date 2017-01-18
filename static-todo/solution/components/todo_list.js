import React from 'react';

var TodoList = React.createClass({
  render: function() {
    return <div>
      <div className='row'>
        <div className='col-md-2 todo-check'><input type='checkbox' /></div>
        <div className='col-md-10'>Do the dishes</div>
      </div>

      <div className='row'>
        <div className='col-md-2 todo-check'><input type='checkbox' /></div>
        <div className='col-md-10'>Mow the Lawn</div>
      </div>

      <div className='row'>
        <div className='col-md-2 todo-check'><input type='checkbox' /></div>
        <div className='col-md-10'>Do Full-stack homework</div>
      </div>
    </div>
  }
})

export default TodoList;
