import React from 'react';
import CheckBox from './CheckBox';
import PropTypes from 'prop-types';
import './FilterToggler.css';
export default class FilterToggler extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line react/state-in-constructor
        this.state = {
            statusList: this.init(this.props.statusList),
        };
    }

    init(statusList) {
        if (statusList && statusList.length > 0) {
            return statusList.map(status => {
                return { value: status, isChecked: false };
            });
        } else {
            return [];
        }
    }

    handleChecked = event => {
        const checkStatuses = [];
        this.state.statusList.forEach(status => {
            if (status.value === event.target.value) {
                status.isChecked = event.target.checked;
            }

            if (status.isChecked) {
                checkStatuses.push(status.value);
            }
        });
        this.setState(prevState => ({ statusList: prevState.statusList }));
        this.props.onStatusChecked(checkStatuses);
    };

    render() {
        if (this.props.statusList && this.props.statusList.length > 0) {
            return (
                <div className="filterWrapper">
                    <p>
                        Filter:{' '}
                        {this.state.statusList.map(status => {
                            return (
                                <CheckBox
                                    key={status.value}
                                    handleCheck={this.handleChecked}
                                    {...status}
                                />
                            );
                        })}
                    </p>
                </div>
            );
        }

        return null;
    }

    static propTypes = {
        statusList: PropTypes.array,
        onStatusChecked: PropTypes.func.isRequired,
    };

    static defaultProps = {
        statusList: [],
    };
}
