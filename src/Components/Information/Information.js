import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Information.css';
import DateUtilities from './../../Utilities/DateUtilities';
export default class Information extends React.Component {
    formatData(item) {
        if (item?.type) {
            if (item.type === 'date' && item?.value) {
                return new DateUtilities().formatDate(item.value);
            } else if (item.type === 'datetime' && item?.value) {
                return new DateUtilities().formatDateTime(item.value);
            } else if (item.type === 'boolean' && item?.value) {
                return 'Yes';
            } else if (item.type === 'boolean' && !item?.value) {
                return 'No';
            } else if (item.type === 'time') {
                return new DateUtilities().convertMillisecondsToTime(
                    item.value,
                );
            } else {
                return item?.value;
            }
        } else {
            return item?.value;
        }
    }
    render() {
        return (
            <div className="infoWrapper">
                {Array.isArray(this.props.info) &&
                    this.props.info.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <div className="box box1">{item.title}</div>
                                <div className="box box2">
                                    {this.formatData(item)}
                                </div>
                            </Fragment>
                        );
                    })}
            </div>
        );
    }
}
Information.propTypes = {
    info: PropTypes.array.isRequired,
};
