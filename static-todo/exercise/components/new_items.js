import React from 'react';

var NewItems = React.createClass({
	render: function() {
		return <div className='row new-todo'>
          <div className='col-md-2'></div>
          <div className='col-md-9'>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Add Something New" />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Add</button>
              </span>
            </div>
          </div>
        </div>
	}
});

export default NewItems;