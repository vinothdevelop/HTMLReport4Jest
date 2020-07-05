import React, { Component } from 'react';
import Treenode from './Treenode';

export default class ParentNode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: this.props.item
        }
    }
    onTreeCaretClick(e) {
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
        e.target.classList.toggle("caret-down");
    }

    render() {
        return (
            <li>
                <span className="caret" onClick={(event) => {
                    return this.onTreeCaretClick(event);
                }}>
                </span>
                <span className="nodeTitle" onClick={() => {
                    return this.props.onTreeNodeClick(this.props.item)
                }}>
                    {this.props.item.title}
                </span>
                <ul className="nested"  >
                    <Treenode treeViewData={this.props.item.children} onTreeNodeClick={this.props.onTreeNodeClick} />
                </ul>
            </li>
        )
    }
}

