import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SummaryElement.css';

export default class SummaryElement extends Component {
    render() {
        return (
            <span className={`dot ${this.props.styleClass}`}>
                <a href={`#${this.props.Category}`}>{this.props.data}</a>
                <span>{this.props.Category}</span>
            </span>
        );
    }
}
SummaryElement.propTypes = {
    Category: PropTypes.string.isRequired,
    styleClass: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
};
