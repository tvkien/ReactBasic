import React, { Component } from 'react';

class Item extends Component {
    render() {
        let { item } = this.props;

        let classNameLabel = '';
        let nameLabel = '';
        switch (item.level) {
            case 1:
                classNameLabel = 'label label-warning';
                nameLabel = 'Medium';
                break;
            case 2:
                classNameLabel = 'label label-danger';
                nameLabel = 'High';
                break;
            default:
                classNameLabel = 'label label-info';
                nameLabel = 'Low';
                break;
        }

        return (
            <tr>
                <td className="text-center">{item.id}</td>
                <td>{item.name}</td>
                <td><span className={classNameLabel}>{nameLabel}</span></td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;