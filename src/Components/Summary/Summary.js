import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import './Summary.css';
import SummaryElement from './SummaryElement';

export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testSummaryData: {
                labels: ['Passed', 'Pending', 'Failed', 'Todo'],
                datasets: [
                    {
                        data: [
                            this.props.resultSummary.numPassedTests,
                            this.props.resultSummary.numPendingTests,
                            this.props.resultSummary.numFailedTests,
                            this.props.resultSummary.numTodoTests,
                        ],
                        backgroundColor: ['green', 'orange', 'red', 'gray'],
                        hoverBackgroundColor: [
                            'green',
                            'orange',
                            'red',
                            'gray',
                        ],
                    },
                ],
            },
            testSuiteSummaryData: {
                labels: ['Passed', 'Pending', 'Failed', 'Runtime Error'],
                datasets: [
                    {
                        data: [
                            this.props.resultSummary.numPassedTestSuites,
                            this.props.resultSummary.numPendingTestSuites,
                            this.props.resultSummary.numFailedTestSuites,
                            this.props.resultSummary.numRuntimeErrorTestSuites,
                        ],
                        backgroundColor: ['green', 'orange', 'red', 'gray'],
                        hoverBackgroundColor: [
                            'green',
                            'orange',
                            'red',
                            'gray',
                        ],
                    },
                ],
            },
            snapshotSummaryData: {
                labels: ['Matched', 'Updated', 'Unmatched', 'Added'],
                datasets: [
                    {
                        data: [
                            this.props.resultSummary.numMatchedSnapshot,
                            this.props.resultSummary.numUpdatedSnapshot,
                            this.props.resultSummary.numUnmatchedSnapshot,
                            this.props.resultSummary.numAddedSnapshot,
                        ],
                        backgroundColor: ['green', 'orange', 'red', 'gray'],
                        hoverBackgroundColor: [
                            'green',
                            'orange',
                            'red',
                            'gray',
                        ],
                    },
                ],
            },
        };
    }
    render() {
        return (
            <Fragment>
                <SummaryElement
                    key={`${this.props.id}_1`}
                    data={this.state.testSummaryData}
                    title={'Test Summary'}
                />
                <SummaryElement
                    key={`${this.props.id}_2`}
                    data={this.state.testSuiteSummaryData}
                    title={'Test Suite Summary'}
                />
                <SummaryElement
                    key={`${this.props.id}_3`}
                    data={this.state.snapshotSummaryData}
                    title={'Snapshot Summary'}
                />
            </Fragment>
        );
    }
}
Summary.propTypes = {
    resultSummary: PropTypes.any.isRequired,
    id: PropTypes.any.isRequired,
};
