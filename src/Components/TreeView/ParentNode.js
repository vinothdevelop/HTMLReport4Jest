import React, { Component } from 'react';
import Treenode from './Treenode';
import PropTypes from 'prop-types';
export default class ParentNode extends Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            item: props.item,
        };
    }

    onTreeCaretClick(e) {
        e.target.parentElement
            .querySelector('.nested')
            .classList.toggle('active');
        e.target.classList.toggle('caret-down');
    }

    getCaretClassName() {
        return this.props.isMenuExpanded ? 'caret-down' : '';
    }

    getNestedClassName() {
        return this.props.isMenuExpanded ? 'active' : '';
    }

    render() {
        return (
            <li>
                <span
                    className={`caret ${this.getCaretClassName()}`}
                    onClick={event => {
                        return this.onTreeCaretClick(event);
                    }}
                />
                <span
                    className="nodeTitle"
                    onClick={() => {
                        return this.props.onTreeNodeClick(this.props.item);
                    }}
                >
                    {this.props.item.title}
                </span>
                <ul className={`nested ${this.getNestedClassName()}`}>
                    <Treenode
                        isMenuExpanded={this.props.isMenuExpanded}
                        treeViewData={this.props.item.children}
                        onTreeNodeClick={this.props.onTreeNodeClick}
                    />
                </ul>
            </li>
        );
    }

    static propTypes = {
        onTreeNodeClick: PropTypes.func.isRequired,
        item: PropTypes.any.isRequired,
        isMenuExpanded: PropTypes.bool,
    };

    static defaultProps = {
        isMenuExpanded: false,
    };
}
