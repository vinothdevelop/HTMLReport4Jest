import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class LeafNode extends Component {
    render() {
        return <li>{this.props.item.title}</li>;
    }

    static propTypes = {
        item: PropTypes.any.isRequired,
    };
}
