import React, { Component } from 'react';


import './Treeview.css';
import ParentNode from './ParentNode';
export default class Treeview extends Component {
    render() {
        return (
            <ul className="treelist">
                <ParentNode item={this.props.treeViewData} onTreeNodeClick={this.props.onTreeNodeClick} />
            </ul>
        )
    }
}

