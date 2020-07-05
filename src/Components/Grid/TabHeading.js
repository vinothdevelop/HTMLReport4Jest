import React, { Component } from 'react';
import './TabHeading.css'
import TabContent from './TabContent';

class TabHeading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultSummary: {
                numFailedTests: this.props.item.numFailedTests ?? 0,
                numPassedTests: this.props.item.numPassedTests ?? 0,
                numTotalTests: this.props.item.numTotalTests ?? 0,
                numPendingTests: this.props.item.numPendingTests ?? 0,
                numTodoTests: this.props.item.numTodoTests ?? 0
            }
        }
    }
    render() {
        return (
            <div className="tabs">
                <input type="checkbox" id={this.props.item.id} />
                <label className="tab-label" htmlFor={this.props.item.id}>{this.props.item.title}
                    <span className="numberCircleParent">
                        <span className="numberCircle green">{this.state.resultSummary.numPassedTests}</span>
                        <span className="numberCircle orange">{this.state.resultSummary.numPendingTests}</span>
                        <span className="numberCircle red">{this.state.resultSummary.numFailedTests}</span>
                        <span className="numberCircle blue">{this.state.resultSummary.numTotalTests}</span>
                        <span className="numberCircle gray">{this.state.resultSummary.numTodoTests}</span>
                    </span>
                </label>
                <div className="tab-content row">
                    {
                        this.props.item.children.map((item) => {
                            return <TabContent item={item} key={item.id} onShowModel={this.props.onShowModel} />
                        }
                        )
                    }
                </div>
            </div>

        );
    }
}

export default TabHeading;
