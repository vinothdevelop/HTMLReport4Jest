import React, { Component, Fragment } from 'react';
import './GridTabView.css';
import TabContent from './TabContent';
import PropTypes from 'prop-types'
class GridTabView extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.testResults.map((item) => {
                        return <TabContent
                            expandResults={this.props.expandResults}
                            item={item} key={item.id}
                            onShowModel={this.props.onShowModel} />
                    })
                }
            </Fragment>
        );
    }
}
GridTabView.propTypes = {
    testResults: PropTypes.any.isRequired,
    onShowModel: PropTypes.func.isRequired,
    expandResults: PropTypes.any
};
export default GridTabView;
