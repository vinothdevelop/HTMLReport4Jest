import React, { Component } from 'react';


import './Sidebar.css';
import Treeview from '../TreeView/Treeview';

export default class Sidebar extends Component {

    /* using fat arrow to bind to instance */
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
                <Treeview treeViewData={this.props.treeViewData} onTreeNodeClick={this.props.onTreeNodeClick} />
            </div>
        )
    }
}

