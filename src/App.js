import React, { Component } from 'react';
import './App.css';

import './Components/Header/Header';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
let data;
const statusList = [];
class App extends Component {
    constructor(props) {
        data = window.resultData;
        super(props);
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            menuState: 'close',
            testResults: data,
            treeViewData: this.formatTreeViewData(data, []),
            information: this.getInformation(data),
        };
        this.onTreeNodeClick = this.onTreeNodeClick.bind(this);
        this.state.gridData = this.state.treeViewData;
        this.menuStateChange = this.menuStateChange.bind(this);
        this.onStatusChecked = this.onStatusChecked.bind(this);
        this.state.isResultExpanded = this.state.testResults?.reporterOptions?.expandResults;
        this.onExpandToggle = this.onExpandToggle.bind(this);
    }

    getStatusList() {
        return statusList;
    }

    formatTreeViewData(testResults, statusFilter) {
        const testResultData = {};
        Object.assign(testResultData, testResults);
        let treeViewData = [];
        let id = 1;
        const rootElement = {
            title: 'All',
            numPassedTests: testResultData.numPassedTests,
            numFailedTests: testResultData.numFailedTests,
            numTotalTests: testResultData.numTotalTests,
            numPendingTests: testResultData.numPendingTests,
            numTodoTests: testResultData.numTodoTests,
            id: `id${1}`,
        };
        id++;
        if (testResultData.testResults) {
            [rootElement.children, id] = this.parseTreeData(
                testResultData.testResults,
                [],
                id,
                statusFilter,
            );
        }

        treeViewData = rootElement;
        return treeViewData;
    }

    // eslint-disable-next-line sonarjs/cognitive-complexity
    parseTreeData(testResults, parentArray, id, statusFilter) {
        let subArray = [];
        testResults.forEach(element => {
            if (element.testFilePath || element.fullName) {
                const nodeValue = {};
                nodeValue.title = element.testFilePath
                    ? this.parseFilePath(element.testFilePath)
                    : element.fullName;
                nodeValue.numPassedTests = element.numPassingTests;
                nodeValue.numFailedTests = element.numFailingTests;
                nodeValue.numTotalTests =
                    element.numPassingTests +
                    element.numFailingTests +
                    element.numPendingTests;
                nodeValue.numPendingTests = element.numPendingTests;
                nodeValue.numTodoTests = element.numTodoTests;
                nodeValue.failureMessages = element.failureMessage;
                nodeValue.id = `id${id}`;
                id++;
                if (element.testResults) {
                    [nodeValue.children, id] = this.parseTreeData(
                        element.testResults,
                        [],
                        id,
                        statusFilter,
                    );
                    if (
                        statusFilter.length === 0 ||
                        nodeValue.children.length > 0
                    ) {
                        parentArray.push(nodeValue);
                    }
                } else if (element.ancestorTitles) {
                    if (statusList.indexOf(element.status) < 0) {
                        statusList.push(element.status);
                    }

                    if (
                        statusFilter.length === 0 ||
                        statusFilter.indexOf(element.status) >= 0
                    ) {
                        [subArray, id] = this.parseAncestor(
                            element.ancestorTitles,
                            element,
                            subArray,
                            id,
                            statusFilter,
                        );
                    }
                }
            }
        });
        if (subArray.length > 0) {
            parentArray = subArray;
        }

        return [parentArray, id];
    }

    // eslint-disable-next-line max-params, sonarjs/cognitive-complexity
    parseAncestor(ancestors, testCase, parentArray, id, statusFilter) {
        const ancestorCopy = [...ancestors];
        if (ancestors.length > 0) {
            const itemTitle = ancestors[0];
            const elementIndex = parentArray.findIndex(value => {
                return value.title === itemTitle;
            });

            if (elementIndex === -1) {
                const nodeValue = {
                    title: itemTitle,
                    numPassedTests: testCase.status === 'passed' ? 1 : 0,
                    numFailedTests: testCase.status === 'failed' ? 1 : 0,
                    numTotalTests: 1,
                    numPendingTests: testCase.status === 'pending' ? 1 : 0,
                    numTodoTests: testCase.status === 'todo' ? 1 : 0,
                    id: `id${id}`,
                };

                id++;
                ancestorCopy.shift();
                [nodeValue.children, id] = this.parseAncestor(
                    ancestorCopy,
                    testCase,
                    [],
                    id,
                    statusFilter,
                );
                parentArray.push(nodeValue);
            } else {
                ancestorCopy.shift();
                // eslint-disable-next-line security/detect-object-injection
                parentArray[elementIndex].numTotalTests++;
                switch (testCase.status) {
                    case 'passed':
                        // eslint-disable-next-line security/detect-object-injection
                        parentArray[elementIndex].numPassedTests++;
                        break;
                    case 'failed':
                        // eslint-disable-next-line security/detect-object-injection
                        parentArray[elementIndex].numFailedTests++;
                        break;
                    case 'pending':
                        // eslint-disable-next-line security/detect-object-injection
                        parentArray[elementIndex].numPendingTests++;
                        break;
                    case 'todo':
                        // eslint-disable-next-line security/detect-object-injection
                        parentArray[elementIndex].numTodoTests++;
                        break;
                    default:
                        break;
                }

                // eslint-disable-next-line security/detect-object-injection
                [parentArray[elementIndex].children, id] = this.parseAncestor(
                    ancestorCopy,
                    testCase,
                    // eslint-disable-next-line security/detect-object-injection
                    parentArray[elementIndex].children,
                    id,
                    statusFilter,
                );
            }
        } else {
            let nodeValue = {};
            nodeValue = testCase;
            nodeValue.id = `id${id}`;
            id++;
            parentArray.push(nodeValue);
        }

        return [parentArray, id];
    }

    parseFilePath(filePath) {
        return filePath.split('\\').pop().split('/').pop();
    }

    menuStateChange(openState) {
        this.setState({ menuState: openState });
    }

    onTreeNodeClick(item) {
        this.setState({ gridData: item });
    }

    getInformation(data) {
        const information = [...(data?.reporterOptions?.information ?? [])];
        information.push({
            title: 'Start Time',
            value: data?.startTime,
            type: 'datetime',
        });
        if (data?.endTime) {
            information.push({
                title: 'End Time',
                value: data?.endTime,
                type: 'datetime',
            });
            information.push({
                title: 'Elapsed',
                value: data?.endTime - data?.startTime,
                type: 'time',
            });
        }

        if (data?.openHandles && data.openHandles.length > 0) {
            information.push({
                title: 'Open Handles',
                value: data?.openHandles?.length,
                type: 'number',
            });
        }

        information.push({
            title: 'Interupted',
            value: data?.wasInterrupted,
            type: 'boolean',
        });
        return information;
    }

    onStatusChecked = checkedStatuses => {
        this.setState(prevState => ({
            gridData: this.formatTreeViewData(
                prevState.testResults,
                checkedStatuses,
            ),
        }));
    };

    onExpandToggle = isResultExpanded => {
        this.setState({ isResultExpanded: isResultExpanded });
    };

    render() {
        return (
            <div className="App">
                <Header
                    isMenuHidden={
                        this.state.testResults?.reporterOptions?.hideMenu
                    }
                    heading={this.state.testResults?.reporterOptions?.title}
                    menuStateChange={this.menuStateChange}
                />
                <Sidebar
                    treeViewData={this.state.treeViewData}
                    menuState={this.state.menuState}
                    isMenuExpanded={
                        this.state.testResults?.reporterOptions?.expandMenuItems
                    }
                    onTreeNodeClick={this.onTreeNodeClick}
                />
                <Main
                    testResults={this.state.gridData}
                    isResultExpanded={this.state.isResultExpanded}
                    information={this.state.information}
                    statusList={this.getStatusList()}
                    onStatusChecked={this.onStatusChecked}
                    onExpandToggle={this.onExpandToggle}
                />
            </div>
        );
    }
}

export default App;
