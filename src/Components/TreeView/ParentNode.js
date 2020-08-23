import React, { Component } from 'react';
import Treenode from './Treenode';
import PropTypes from 'prop-types';
export default class ParentNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            caretClass: this.props.expandMenuItems ? 'caret-down' : '',
            nestedClass: this.props.expandMenuItems ? 'active' : '',
        };
    }
    onTreeCaretClick(e) {
        e.target.parentElement
            .querySelector('.nested')
            .classList.toggle('active');
        e.target.classList.toggle('caret-down');
    }

    render() {
        return (
            <li>
                <span
                    className={`caret ${this.state.caretClass}`}
                    onClick={event => {
                        return this.onTreeCaretClick(event);
                    }}
                ></span>
                <span
                    className="nodeTitle"
                    onClick={() => {
                        return this.props.onTreeNodeClick(this.props.item);
                    }}
                >
                    {this.props.item.title}
                </span>
                <ul className={`nested ${this.state.nestedClass}`}>
                    <Treenode
                        expandMenuItems={this.props.expandMenuItems}
                        treeViewData={this.props.item.children}
                        onTreeNodeClick={this.props.onTreeNodeClick}
                    />
                </ul>
            </li>
        );
    }
}
ParentNode.propTypes = {
    onTreeNodeClick: PropTypes.func.isRequired,
    item: PropTypes.any.isRequired,
    expandMenuItems: PropTypes.bool,
};