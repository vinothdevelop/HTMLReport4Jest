import React, { Component, Fragment } from 'react';
import './GridTabView.css';
import TabContent from './TabContent';
import PropTypes from 'prop-types';
class GridTabView extends Component {
    render() {
        return (
            <>
                {this.props.testResults.map(item => {
                    return (
                        <TabContent
                            key={item.id}
                            isResultExpanded={this.props.isResultExpanded}
                            item={item}
                            onShowModel={this.props.onShowModel}
                        />
                    );
                })}
            </>
        );
    }

    static propTypes = {
        testResults: PropTypes.any.isRequired,
        onShowModel: PropTypes.func.isRequired,
        isResultExpanded: PropTypes.any,
    };

    static defaultProps = {
        isResultExpanded: null,
    };
}
export default GridTabView;
