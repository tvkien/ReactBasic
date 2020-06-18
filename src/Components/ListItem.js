import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

import Item from './Item'
import Items from '../MockData/Items';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Items,
      showAlert: false,
      titleAlert: '',
      idAlert: ''
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
        <SweetAlert
          show={this.state.showAlert}
          title="Delete Item"
          text={this.state.titleAlert}
          showCancelButton
          onOutsideClick={() => this.setState({ showAlert: false })}
          onEscapeKey={() => this.setState({ showAlert: false })}
          onCancel={() => this.setState({ showAlert: false })}
          onConfirm={() => this.handleDeleteItem()}
        />
      </div>
    )
  }

  renderItem = () => {
    let { items } = this.state;

    if (items.length === 0) {
      return <Item item={0} />
    }

    return items.map((item) => {
      return (<Item item={item} handleShowAlert={this.handleShowAlert} />)
    });
  }

  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item.id
    });
  }

  handleDeleteItem = () => {
    let { idAlert, items } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
    }

    this.setState({
      showAlert: false
    });
  }
}
export default ListItem;