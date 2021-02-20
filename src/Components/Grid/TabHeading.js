import React, { Component } from 'react';
import './TabHeading.css';
import TabContent from './TabContent';
import PropTypes from 'prop-types';
class TabHeading extends Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            resultSummary: {
                numFailedTests: this.props.item.numFailedTests ?? 0,
                numPassedTests: this.props.item.numPassedTests ?? 0,
                numTotalTests: this.props.item.numTotalTests ?? 0,
                numPendingTests: this.props.item.numPendingTests ?? 0,
                numTodoTests: this.props.item.numTodoTests ?? 0,
            },
            isChecked: this.props.isResultExpanded,
        };
    }

    toggleChange = () => {
        this.setState({
            // eslint-disable-next-line react/no-access-state-in-setstate
            isChecked: !this.state.isChecked,
        });
    };

    render() {
        return (
            <div className="tabs">
                <input
                    type="checkbox"
                    id={`elem_${this.props.item.id}`}
                    checked={this.state.isChecked}
                    className="togglerCheckBox"
                    onChange={this.toggleChange}
                />
                <label
                    className="tab-label"
                    htmlFor={`elem_${this.props.item.id}`}
                >
                    {this.props.item.title}
                    <span className="numberCircleParent">
                        <span className="numberCircle green">
                            {this.state.resultSummary.numPassedTests}
                        </span>
                        <span className="numberCircle orange">
                            {this.state.resultSummary.numPendingTests}
                        </span>
                        <span className="numberCircle red">
                            {this.state.resultSummary.numFailedTests}
                        </span>
                        <span className="numberCircle blue">
                            {this.state.resultSummary.numTotalTests}
                        </span>
                        <span className="numberCircle gray">
                            {this.state.resultSummary.numTodoTests}
                        </span>
                    </span>
                </label>
                <div className="tab-content row">
                    {this.props.item.children.map(item => {
                        return (
                            <TabContent
                                key={item.id}
                                isResultExpanded={this.props.isResultExpanded}
                                item={item}
                                onShowModel={this.props.onShowModel}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    static propTypes = {
        item: PropTypes.any.isRequired,
        onShowModel: PropTypes.func.isRequired,
        isResultExpanded: PropTypes.bool,
    };

    static defaultProps = {
        isResultExpanded: false,
    };
}
export default TabHeading;
