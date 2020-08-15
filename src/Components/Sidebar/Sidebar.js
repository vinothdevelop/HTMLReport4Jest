import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './Sidebar.css';
import Treeview from '../TreeView/Treeview';

export default class Sidebar extends Component {
    render() {
        return (
            <div className={`sidenav ${this.props.menuState}`}>
                <Treeview
                    expandMenuItems={this.props.expandMenuItems}
                    treeViewData={this.props.treeViewData}
                    onTreeNodeClick={this.props.onTreeNodeClick}
                />
            </div>
        );
    }
}
Sidebar.propTypes = {
    onTreeNodeClick: PropTypes.func.isRequired,
    treeViewData: PropTypes.any.isRequired,
    menuState: PropTypes.string.isRequired,
    expandMenuItems: PropTypes.bool,
};
