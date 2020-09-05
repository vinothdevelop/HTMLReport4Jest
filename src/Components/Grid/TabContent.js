/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import './TabContent.css';
import TabHeading from './TabHeading';
import PropTypes from 'prop-types';
import DateUtilities from './../../Utilities/DateUtilities';
import Status from './Status';
class TabContent extends Component {
    formatTime(value) {
        return new DateUtilities().convertMillisecondsToTime(value);
    }
    render() {
        const hasChildren =
            this.props.item.children && this.props.item.children.length > 0;
        let content;
        if (hasChildren) {
            content = (
                <TabHeading
                    expandResults={this.props.expandResults}
                    item={this.props.item}
                    onShowModel={this.props.onShowModel}
                />
            );
        } else {
            content = (
                <Fragment>
                    <div className="column testcase">
                        {this.props.item.title}
                    </div>
                    <div className="column result">
                        <Status status={this.props.item.status} />
                    </div>
                    <div className="column time">
                        {this.formatTime(this.props.item?.duration)}
                    </div>
                    <div className="column information">
                        <div
                            className="informationicon"
                            onClick={() =>
                                this.props.onShowModel(this.props.item)
                            }
                        >
                            <i>
                                <svg
                                    aria-label="more information"
                                    viewBox="64 64 896 896"
                                    data-icon="exclamation-circle"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                >
                                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                                </svg>
                            </i>{' '}
                            Info
                        </div>
                    </div>
                </Fragment>
            );
        }
        return <Fragment>{content}</Fragment>;
    }
}
TabContent.propTypes = {
    item: PropTypes.any.isRequired,
    onShowModel: PropTypes.func.isRequired,
    expandResults: PropTypes.any,
};
export default TabContent;
