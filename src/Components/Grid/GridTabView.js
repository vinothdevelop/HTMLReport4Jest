import React, { Component, Fragment } from 'react';
import './GridTabView.css';
import TabContent from './TabContent';

class GridTabView extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.testResults.map((item, index) => {
                        return <TabContent item={item} key={item.id} onShowModel={this.props.onShowModel} />
                    })
                }
            </Fragment>
        );
    }
}

export default GridTabView;
