import React, { Component } from 'react';
import './Main.css';
import Summary from '../Summary/Summary';
import GridHeader from '../Grid/GridHeader';
import GridTabView from '../Grid/GridTabView';
import Modal from './../Modal/Modal';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultSummary: {
                numFailedTests: this.props.testResults.numFailedTests ?? 0,
                numPassedTests: this.props.testResults.numPassedTests ?? 0,
                numTotalTests: this.props.testResults.numTotalTests ?? 0,
                numPendingTests: this.props.testResults.numPendingTests ?? 0,
                numTodoTests: this.props.testResults.numTodoTests ?? 0
            },
            showModel: false
        };
        this.onShowModel = this.onShowModel.bind(this);
        this.onModelClose = this.onModelClose.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.testResults.numFailedTests !== this.props.testResults.numFailedTests
            || prevProps.testResults.numPassedTests !== this.props.testResults.numPassedTests
            || prevProps.testResults.numTotalTests !== this.props.testResults.numTotalTests
            || prevProps.testResults.numPendingTests !== this.props.testResults.numPendingTests
            || prevProps.testResults.numTodoTests !== this.props.testResults.numTodoTests) {
            this.setState({
                resultSummary: {
                    numFailedTests: this.props.testResults.numFailedTests ?? 0,
                    numPassedTests: this.props.testResults.numPassedTests ?? 0,
                    numTotalTests: this.props.testResults.numTotalTests ?? 0,
                    numPendingTests: this.props.testResults.numPendingTests ?? 0,
                    numTodoTests: this.props.testResults.numTodoTests ?? 0
                }
            });
        }
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
            <div className="main">
                <Summary resultSummary={this.state.resultSummary} />
                <GridHeader />
                <GridTabView testResults={this.props.testResults.children} onShowModel={this.onShowModel} />
                <Modal show={this.state.showModel} onClose={this.onModelClose} modelData={this.state.modelData}>
                </Modal>
            </div>
        );
    }
}

export default Main;
