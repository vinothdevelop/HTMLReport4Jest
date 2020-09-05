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
                            viewBox="0 0 20 20"
                            version="1.1"
                            width="1em"
                            height="1em"
                            role="img"
                            className="passed statusicon"
                        >
                            <polygon
                                id="Path-126"
                                points="0 11 2 9 7 14 18 3 20 5 7 18"
                            ></polygon>
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
                            viewBox="0 0 20 20"
                            version="1.1"
                            width="1em"
                            height="1em"
                            role="img"
                            fill="currentColor"
                        >
                            <polygon
                                id="Combined-Shape"
                                // eslint-disable-next-line max-len
                                points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"
                            ></polygon>
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
                            viewBox="0 0 20 20"
                            version="1.1"
                            width="1em"
                            height="1em"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <title>pencil</title>
                            <path
                                // eslint-disable-next-line max-len
                                d="M12.2928932,3.70710678 L0,16 L0,20 L4,20 L16.2928932,7.70710678 L12.2928932,3.70710678 Z M13.7071068,2.29289322 L16,0 L20,4 L17.7071068,6.29289322 L13.7071068,2.29289322 Z"
                                id="Combined-Shape"
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
