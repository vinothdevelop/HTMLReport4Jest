import React, { Component } from 'react';

export default class LeafNode extends Component {

    render() {
        return (
            <li>{this.props.item.title}</li>
        )
    }
}