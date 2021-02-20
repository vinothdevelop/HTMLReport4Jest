import React, { Component } from 'react';
import './Main.css';
import Summary from '../Summary/Summary';
import GridHeader from '../Grid/GridHeader';
import GridTabView from '../Grid/GridTabView';
import Modal from './../Modal/Modal';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import FilterToggler from '../FilterToggler/FilterToggler';
import { ToggleButton } from '../ToggleButton/ToggleButton';

class Main extends Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            resultSummary: {
                numFailedTests: this.props.testResults.numFailedTests ?? 0,
                numPassedTests: this.props.testResults.numPassedTests ?? 0,
                numTotalTests: this.props.testResults.numTotalTests ?? 0,
                numPendingTests: this.props.testResults.numPendingTests ?? 0,
                numTodoTests: this.props.testResults.numTodoTests ?? 0,
            },
            isDisplayed: false,
        };
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
                this.props.testResults.numTodoTests
        ) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                resultSummary: {
                    numFailedTests: this.props.testResults.numFailedTests ?? 0,
                    numPassedTests: this.props.testResults.numPassedTests ?? 0,
                    numTotalTests: this.props.testResults.numTotalTests ?? 0,
                    numPendingTests:
                        this.props.testResults.numPendingTests ?? 0,
                    numTodoTests: this.props.testResults.numTodoTests ?? 0,
                },
            });
        }
    }

    onModelClose() {
        this.setState({ isDisplayed: false });
    }

    onShowModel(item) {
        this.setState({ isDisplayed: true });
        this.setState({ modelData: item });
    }

    render() {
        return (
            <div className="main">
                <Summary resultSummary={this.state.resultSummary} />
                <Information info={this.props.information} />
                <div className="togglesWrapper">
                    <FilterToggler
                        statusList={this.props.statusList}
                        onStatusChecked={this.props.onStatusChecked}
                    />
                    <ToggleButton
                        checkedText="Expand All"
                        isToggled={this.props.isResultExpanded}
                        onToggle={this.props.onExpandToggle}
                    />
                </div>
                <GridHeader />
                <GridTabView
                    isResultExpanded={this.props.isResultExpanded}
                    testResults={this.props.testResults.children}
                    onShowModel={this.onShowModel}
                />
                <Modal
                    isDisplayed={this.state.isDisplayed}
                    modelData={this.state.modelData}
                    onClose={this.onModelClose}
                />
            </div>
        );
    }

    static propTypes = {
        testResults: PropTypes.any.isRequired,
        isResultExpanded: PropTypes.bool,
        information: PropTypes.array,
        statusList: PropTypes.array,
        onStatusChecked: PropTypes.func.isRequired,
        onExpandToggle: PropTypes.func.isRequired,
    };

    static defaultProps = {
        isResultExpanded: false,
        information: [],
        statusList: [],
    };
}
export default Main;
