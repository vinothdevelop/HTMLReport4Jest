import React, { Component } from 'react';
import './Treeview.css';
import ParentNode from './ParentNode';
import PropTypes from 'prop-types'
export default class Treeview extends Component {
    render() {
        return (
            <ul className="treelist">
                <ParentNode
                    expandMenuItems={this.props.expandMenuItems}
                    item={this.props.treeViewData}
                    onTreeNodeClick={this.props.onTreeNodeClick} />
            </ul>
        )
    }
}
Treeview.propTypes = {
    onTreeNodeClick: PropTypes.func.isRequired,
    treeViewData: PropTypes.any.isRequired,
    expandMenuItems: PropTypes.bool
};

