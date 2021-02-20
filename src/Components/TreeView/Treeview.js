import React, { Component } from 'react';
import './Treeview.css';
import ParentNode from './ParentNode';
import PropTypes from 'prop-types';
export default class Treeview extends Component {
    render() {
        return (
            <ul className="treelist">
                <ParentNode
                    isMenuExpanded={this.props.isMenuExpanded}
                    item={this.props.treeViewData}
                    onTreeNodeClick={this.props.onTreeNodeClick}
                />
            </ul>
        );
    }

    static propTypes = {
        onTreeNodeClick: PropTypes.func.isRequired,
        treeViewData: PropTypes.any.isRequired,
        isMenuExpanded: PropTypes.bool,
    };

    static defaultProps = {
        isMenuExpanded: false,
    };
}
