import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Information.css';
export default class Information extends React.Component {
    render() {
        return (
            <div className="infoWrapper">
                {this.props.info.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="box box1">{item.title}</div>
                            <div className="box box2">{item.value}</div>
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
