import React, { Component } from 'react';
import './GridTab.css';
import TabHeading from './TabHeading';

class GridTab extends Component {
    render() {
        return (
            <TabHeading item={this.props.item} />
        );
    }
}

export default GridTab;
