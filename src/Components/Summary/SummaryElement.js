import React, { Component } from 'react';


import './SummaryElement.css';

export default class SummaryElement extends Component {
    render() {
        return (
            <span className={`dot ${this.props.styleClass}`}>
                <a href={`#${this.props.Category}`}>{this.props.data}</a>
                <span>{this.props.Category}</span>
            </span>
        )
    }
}