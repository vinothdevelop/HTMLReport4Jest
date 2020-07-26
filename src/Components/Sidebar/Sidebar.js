import React, { Component } from 'react';

import PropTypes from 'prop-types'
import './Sidebar.css';
import Treeview from '../TreeView/Treeview';

export default class Sidebar extends Component {
    onTreeCloseClick = () => {
        this.props.menuStateChange('close');
    }

    onTreeCaretClick(e) {
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
    }


    render() {
        return (
            <div className={`sidenav ${this.props.menuState}`}>
                <span className="closebtn" onClick={() => this.onTreeCloseClick()}>&times;</span>
                <Treeview
                    expandMenuItems={this.props.expandMenuItems}
                    treeViewData={this.props.treeViewData}
                    onTreeNodeClick={this.props.onTreeNodeClick} />
            </div>
        )
    }
}
Sidebar.propTypes = {
    onTreeNodeClick: PropTypes.func.isRequired,
    treeViewData: PropTypes.any.isRequired,
    menuState: PropTypes.string.isRequired,
    menuStateChange: PropTypes.func.isRequired,
    expandMenuItems: PropTypes.bool
};

