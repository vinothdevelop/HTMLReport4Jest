import React, { Component } from 'react';
import './App.css';

import './Components/Header/Header';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
let data;
class App extends Component {
    constructor(props) {
        data = window.resultData;
        super(props);
        this.state = {
            menuState: 'close',
            testResults: data,
            treeViewData: this.formatTreeViewData(data),
        };
        this.onTreeNodeClick = this.onTreeNodeClick.bind(this);
        this.state.gridData = this.state.treeViewData;
    }
    formatTreeViewData(testResults) {
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
            );
        }
        treeViewData = rootElement;
        return treeViewData;
    }

    parseTreeData(testResults, parentArray, id) {
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
                    );
                    parentArray.push(nodeValue);
                } else if (element.ancestorTitles) {
                    [subArray, id] = this.parseAncestor(
                        element.ancestorTitles,
                        element,
                        subArray,
                        id,
                    );
                }
            }
        });
        if (subArray.length > 0) {
            parentArray = subArray;
        }
        return [parentArray, id];
    }

    parseAncestor(ancestors, testCase, parentArray, id) {
        const ancestorCopy = [...ancestors];
        if (ancestors.length > 0) {
            const itemTitle = ancestors[0];
            const elementIndex = parentArray.findIndex(value => {
                return value.title === itemTitle;
            });

            if (elementIndex === -1) {
                const nodeValue = {};
                nodeValue.title = itemTitle;
                nodeValue.numPassedTests = testCase.status === 'passed' ? 1 : 0;
                nodeValue.numFailedTests = testCase.status === 'failed' ? 1 : 0;
                nodeValue.numTotalTests = 1;
                nodeValue.numPendingTests =
                    testCase.status === 'pending' ? 1 : 0;
                nodeValue.numTodoTests = testCase.status === 'todo' ? 1 : 0;
                nodeValue.id = `id${id}`;
                id++;
                ancestorCopy.shift();
                [nodeValue.children, id] = this.parseAncestor(
                    ancestorCopy,
                    testCase,
                    [],
                    id,
                );
                parentArray.push(nodeValue);
            } else {
                ancestorCopy.shift();
                parentArray[elementIndex].numTotalTests++;
                switch (testCase.status) {
                    case 'passed':
                        parentArray[elementIndex].numPassedTests++;
                        break;
                    case 'failed':
                        parentArray[elementIndex].numFailedTests++;
                        break;
                    case 'pending':
                        parentArray[elementIndex].numPendingTests++;
                        break;
                    case 'todo':
                        parentArray[elementIndex].numTodoTests++;
                        break;
                    default:
                        break;
                }
                [parentArray[elementIndex].children, id] = this.parseAncestor(
                    ancestorCopy,
                    testCase,
                    parentArray[elementIndex].children,
                    id,
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

    render() {
        return (
            <div className="App">
                <Header
                    hideMenu={this.state.testResults?.reporterOptions?.hideMenu}
                    heading={this.state.testResults?.reporterOptions?.title}
                    menuStateChange={() => this.menuStateChange('open')}
                />
                <Sidebar
                    treeViewData={this.state.treeViewData}
                    menuState={this.state.menuState}
                    menuStateChange={() => this.menuStateChange('close')}
                    onTreeNodeClick={this.onTreeNodeClick}
                    expandMenuItems={
                        this.state.testResults?.reporterOptions?.expandMenuItems
                    }
                />
                <Main
                    testResults={this.state.gridData}
                    expandResults={
                        this.state.testResults?.reporterOptions?.expandResults
                    }
                    information={
                        this.state.testResults?.reporterOptions?.information
                    }
                />
            </div>
        );
    }
}

export default App;
