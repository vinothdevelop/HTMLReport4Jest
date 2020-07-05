import React, { Component } from 'react';


import './Summary.css';
import SummaryElement from './SummaryElement';

export default class Summary extends Component {
    render() {
        return (
            <div className="summary">
                <SummaryElement Category="Passed" styleClass="green" data={this.props.resultSummary.numPassedTests} />
                <SummaryElement Category="Pending" styleClass="orange" data={this.props.resultSummary.numPendingTests} />
                <SummaryElement Category="Failed" styleClass="red" data={this.props.resultSummary.numFailedTests} />
                <SummaryElement Category="Total" styleClass="blue" data={this.props.resultSummary.numTotalTests} />
                <SummaryElement Category="Todo" styleClass="gray" data={this.props.resultSummary.numTodoTests} />
            </div>
        )
    }
}

