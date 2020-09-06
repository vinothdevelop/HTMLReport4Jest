import React, { Component, Fragment } from 'react';
import './Status.css';
import PropTypes from 'prop-types';
class Status extends Component {
    render() {
        if (this.props.status === 'passed') {
            return (
                <Fragment>
                    <i>
                        <svg
                            aria-label="passed"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="1em"
                            height="1em"
                            role="img"
                            className="passed statusicon"
                        >
                            <path
                                fillRule="evenodd"
                                // eslint-disable-next-line max-len
                                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                            ></path>
                        </svg>
                    </i>
                    {this.props.status}
                </Fragment>
            );
        } else if (this.props.status === 'failed') {
            return (
                <Fragment>
                    <i>
                        <svg
                            aria-label="failed"
                            className="failed statusicon"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="1em"
                            height="1em"
                            role="img"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                // eslint-disable-next-line max-len
                                d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                            ></path>
                        </svg>
                    </i>
                    {this.props.status}
                </Fragment>
            );
        } else if (this.props.status === 'pending') {
            return (
                <Fragment>
                    <i>
                        <svg
                            className="pending statusicon"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="1em"
                            height="1em"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                            ></path>
                        </svg>
                    </i>
                    {this.props.status}
                </Fragment>
            );
        } else if (this.props.status === 'todo') {
            return (
                <Fragment>
                    <i>
                        <svg
                            className="todo statusicon"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="1em"
                            height="1em"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8z"
                            ></path>
                        </svg>
                    </i>
                    {this.props.status}
                </Fragment>
            );
        } else {
            return <Fragment>{this.props.status}</Fragment>;
        }
    }
}
Status.propTypes = {
    status: PropTypes.string.isRequired,
};
export default Status;
