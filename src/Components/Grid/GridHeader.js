import React, { Component } from 'react';
import './GridHeader.css';

class GridHeader extends Component {
    render() {
        return (
            <div className="row tableheader">
                <div className="column testcase">Test case</div>
                <div className="column result">Result</div>
                <div className="column time">Time</div>
                <div className="column information">Additonal information</div>
            </div>
        );
    }
}

export default GridHeader;
