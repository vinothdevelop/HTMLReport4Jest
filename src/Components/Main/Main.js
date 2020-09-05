import React, { Component } from 'react';
import './Main.css';
import Summary from '../Summary/Summary';
import GridHeader from '../Grid/GridHeader';
import GridTabView from '../Grid/GridTabView';
import Modal from './../Modal/Modal';
import PropTypes from 'prop-types';
import Information from '../Information/Information';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { showModel: false };
        this.onShowModel = this.onShowModel.bind(this);
        this.onModelClose = this.onModelClose.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.testResults.numFailedTests !==
                this.props.testResults.numFailedTests ||
            prevProps.testResults.numPassedTests !==
                this.props.testResults.numPassedTests ||
            prevProps.testResults.numTotalTests !==
                this.props.testResults.numTotalTests ||
            prevProps.testResults.numPendingTests !==
                this.props.testResults.numPendingTests ||
            prevProps.testResults.numTodoTests !==
                this.props.testResults.numTodoTests ||
            prevProps.testResults.numFailedTestSuites !==
                this.props.testResults.numFailedTestSuites ||
            prevProps.testResults.numPendingTestSuites !==
                this.props.testResults.numPendingTestSuites ||
            prevProps.testResults.numPassedTestSuites !==
                this.props.testResults.numPassedTestSuites ||
            prevProps.testResults.numRuntimeErrorTestSuites !==
                this.props.testResults.numRuntimeErrorTestSuites
        ) {
            return;
        }
    }

    getSummary() {
        return {
            numFailedTests: this.props.testResults.numFailedTests ?? 0,
            numPassedTests: this.props.testResults.numPassedTests ?? 0,
            numPendingTests: this.props.testResults.numPendingTests ?? 0,
            numTodoTests: this.props.testResults.numTodoTests ?? 0,
            numFailedTestSuites:
                this.props.testResults.numFailedTestSuites ?? 0,
            numPassedTestSuites:
                this.props.testResults.numPassedTestSuites ?? 0,
            numPendingTestSuites:
                this.props.testResults.numPendingTestSuites ?? 0,
            numRuntimeErrorTestSuites:
                this.props.testResults.numRuntimeErrorTestSuites ?? 0,
            numAddedSnapshot: this.props.testResults.numAddedSnapshot ?? 0,
            numMatchedSnapshot: this.props.testResults.numMatchedSnapshot ?? 0,
            numUnmatchedSnapshot:
                this.props.testResults.numUnmatchedSnapshot ?? 0,
            numUpdatedSnapshot: this.props.testResults.numUpdatedSnapshot ?? 0,
        };
    }

    onModelClose() {
        this.setState({ showModel: false });
    }

    onShowModel(item) {
        this.setState({ showModel: true });
        this.setState({ modelData: item });
    }
    render() {
        return (
            <div className={`main menu${this.props.menuState}`}>
                <Summary
                    key={this.props.testResults.id}
                    id={this.props.testResults.id}
                    resultSummary={this.getSummary()}
                />
                <Information info={this.props.information}></Information>
                <GridHeader />
                <GridTabView
                    expandResults={this.props.expandResults}
                    testResults={this.props.testResults.children}
                    onShowModel={this.onShowModel}
                />
                <Modal
                    show={this.state.showModel}
                    onClose={this.onModelClose}
                    modelData={this.state.modelData}
                ></Modal>
            </div>
        );
    }
}
Main.propTypes = {
    testResults: PropTypes.any.isRequired,
    expandResults: PropTypes.any,
    information: PropTypes.array,
    menuState: PropTypes.string.isRequired,
};
export default Main;
