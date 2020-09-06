import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './CheckBox.css';
export const CheckBox = props => {
    return (
        <Fragment>
            <input
                key={props.value}
                onChange={props.handleCheck}
                type="checkbox"
                checked={props.isChecked}
                value={props.value}
                id={props.value}
            />
            <label className="checkboxLable" htmlFor={props.value}>
                {props.value}
            </label>
        </Fragment>
    );
};
CheckBox.propTypes = {
    handleCheck: PropTypes.func.isRequired,
    isChecked: PropTypes.bool,
    value: PropTypes.string.isRequired,
};
export default CheckBox;
