import React, { Component, Fragment } from 'react';


import './Treenode.css';
import LeafNode from './LeafNode';
import ParentNode from './ParentNode';
import PropTypes from 'prop-types'
export default class Treenode extends Component {

    render() {
        return (

            <Fragment>
                {
                    this.props.treeViewData.map((item, index) => {
                        return (item.children && item.children.length > 0) ?
                            <ParentNode item={item} key={index} onTreeNodeClick={this.props.onTreeNodeClick} /> :
                            <LeafNode item={item} key={index} />;
                    }
                    )
                }
            </Fragment>
        )
    }
}
Treenode.propTypes = {
    onTreeNodeClick: PropTypes.func.isRequired,
    treeViewData: PropTypes.any.isRequired
};

