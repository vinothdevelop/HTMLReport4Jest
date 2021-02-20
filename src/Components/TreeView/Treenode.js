import React, { Component, Fragment } from 'react';

import './Treenode.css';

import LeafNode from './LeafNode';

import ParentNode from './ParentNode';
import PropTypes from 'prop-types';
export default class Treenode extends Component {
    render() {
        return (
            <>
                {this.props.treeViewData.map((item, index) => {
                    return item.children && item.children.length > 0 ? (
                        <ParentNode
                            key={index}
                            isMenuExpanded={this.props.isMenuExpanded}
                            item={item}
                            onTreeNodeClick={this.props.onTreeNodeClick}
                        />
                    ) : (
                        <LeafNode key={index} item={item} />
                    );
                })}
            </>
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
