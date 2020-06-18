import React, { Component } from 'react';

import Item from './Item'
import Items from '../MockData/Items';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Items
    }
  }

  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">No</th>
              <th>Name</th>
              <th style={{ width: '15%' }}>Level</th>
              <th style={{ width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItem()}
          </tbody>
        </table>
      </div>
    )
  }

  renderItem = () => 
  {
    let { items } = this.state;

    return items.map((item) => 
    {
      return (<Item item = {item}/>)
    });
  }
}
export default ListItem;